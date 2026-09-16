// --- 1. PERSISTENT CONTENT STAGE WITH URL UPDATES & FETCH ---
const modal = document.getElementById("content-window");
const modalTitle = document.getElementById("window-title");
const modalBody = document.getElementById("window-body");
const navButtons = Array.from(document.querySelectorAll(".orbit-disc"));

function setActiveSection(sectionName) {
    navButtons.forEach(button => {
        const isActive = button.dataset.section === sectionName;
        button.classList.toggle("active", isActive);
        button.setAttribute("aria-pressed", isActive ? "true" : "false");
    });
}

function openWindow(sectionName, updateHistory = true) {
    modalTitle.innerText = sectionName;
    modalBody.innerHTML = "<p>Loading...</p>";
    setActiveSection(sectionName);

    if (updateHistory) {
        window.history.pushState(
            { section: sectionName },
            "",
            "#" + encodeURIComponent(sectionName)
        );
    }

    const fileName = sectionName.toLowerCase() + ".html";

    fetch(fileName)
        .then(response => {
            if (!response.ok) throw new Error("File not found");
            return response.text();
        })
        .then(htmlData => {
            modalBody.innerHTML = htmlData;

            if (window.MathJax) {
                MathJax.typesetPromise([modalBody]).catch(function (err) {
                    console.log("MathJax error: ", err.message);
                });
            }
        })
        .catch(() => {
            modalBody.innerHTML = `<p>Content for ${sectionName} is coming soon!</p>`;
        });
}

// Kept for compatibility with the old markup. In this experiment the central
// screen is persistent, so "closing" simply returns to About.
function closeWindow() {
    openWindow("About");
}

window.addEventListener("popstate", function () {
    const section = window.location.hash
        ? decodeURIComponent(window.location.hash.substring(1))
        : "About";
    openWindow(section, false);
});

// --- 2. LIVELIER PASTEL NETWORK BACKGROUND ---
const canvas = document.getElementById('particle-canvas');
const ctx = canvas.getContext('2d');

let particles = [];

const palette = [
    'rgba(90, 220, 200, ',
    'rgba(130, 160, 255, ',
    'rgba(255, 140, 160, '
];

class Particle {
    constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.vx = (Math.random() - 0.5) * 0.3;
        this.vy = (Math.random() - 0.5) * 0.3;
        this.radius = Math.random() * 2 + 1;
        this.baseColor = palette[Math.floor(Math.random() * palette.length)];
    }

    update() {
        this.x += 0.6 * this.vx;
        this.y += 0.6 * this.vy;

        if (this.x < 0 || this.x > canvas.width) this.vx = -this.vx;
        if (this.y < 0 || this.y > canvas.height) this.vy = -this.vy;
    }

    draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = this.baseColor + '0.85)';
        ctx.fill();
    }
}

function initParticles() {
    particles = [];
    const particleCount = window.innerWidth < 600 ? 50 : 130;
    for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle());
    }
}

function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    initParticles();
}

window.addEventListener('resize', resizeCanvas);
resizeCanvas();

function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    for (let i = 0; i < particles.length; i++) {
        particles[i].update();
        particles[i].draw();

        for (let j = i + 1; j < particles.length; j++) {
            const dx = particles[i].x - particles[j].x;
            const dy = particles[i].y - particles[j].y;
            const distance = Math.sqrt(dx * dx + dy * dy);

            if (distance < 180) {
                ctx.beginPath();
                const opacity = 1 - (distance / 180);
                ctx.strokeStyle = particles[i].baseColor + (opacity * 0.55) + ')';
                ctx.lineWidth = 1.2;
                ctx.moveTo(particles[i].x, particles[i].y);
                ctx.lineTo(particles[j].x, particles[j].y);
                ctx.stroke();
            }
        }
    }

    requestAnimationFrame(animate);
}

window.onload = () => {
    animate();

    const initialSection = window.location.hash
        ? decodeURIComponent(window.location.hash.substring(1))
        : "About";

    openWindow(initialSection, false);
};