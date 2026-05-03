// --- 1. MODAL LOGIC WITH URL UPDATES & FETCH ---
const modal = document.getElementById("content-window");
const modalTitle = document.getElementById("window-title");
const modalBody = document.getElementById("window-body");
const radialNav = document.querySelector(".radial-nav-container");
const mainName = document.querySelector(".main-title"); // NEW: Targets your name
const socialIcons = document.querySelector(".floating-socials"); // NEW

function openWindow(sectionName) {
    modalTitle.innerText = sectionName;
    modal.style.display = "flex";
    
    // Fades out the radial menu and your name
    radialNav.style.opacity = "0";
    radialNav.style.pointerEvents = "none";
    mainName.style.opacity = "0"; // NEW
    socialIcons.style.opacity = "0"; // NEW
    socialIcons.style.pointerEvents = "none"; // NEW
    
    window.history.pushState({ section: sectionName }, "", "#" + sectionName);

    modalBody.innerHTML = "<p>Loading...</p>";

    let fileName = sectionName.toLowerCase() + ".html";
    
    fetch(fileName)
        .then(response => {
            if (!response.ok) throw new Error("File not found");
            return response.text();
        })
        .then(htmlData => {
            modalBody.innerHTML = htmlData; 
            
            if (window.MathJax) {
                MathJax.typesetPromise([modalBody]).catch(function (err) {
                    console.log('MathJax error: ', err.message);
                });
            }
        })
        .catch(error => {
            modalBody.innerHTML = `<p>Content for ${sectionName} is coming soon!</p>`;
        });
}

function closeWindow() {
    modal.style.display = "none";
    
    // Fades the radial menu and your name back in
    radialNav.style.opacity = "1";
    radialNav.style.pointerEvents = "auto";
    mainName.style.opacity = "1"; // NEW
    socialIcons.style.opacity = "1"; // NEW
    socialIcons.style.pointerEvents = "auto"; // NEW
    
    window.history.pushState("", document.title, window.location.pathname + window.location.search);
}

window.onclick = function(event) {
    if (event.target == modal) {
        closeWindow();
    }
}

window.addEventListener('popstate', function() {
    if (window.location.hash) {
        let section = window.location.hash.substring(1);
        openWindow(section);
    } else {
        modal.style.display = "none";
        radialNav.style.opacity = "1";
        radialNav.style.pointerEvents = "auto";
        mainName.style.opacity = "1"; // NEW
	socialIcons.style.opacity = "1"; // NEW
	socialIcons.style.pointerEvents = "auto"; // NEW
    }
});

// --- 2. LIVELIER PASTEL NETWORK BACKGROUND ---
const canvas = document.getElementById('particle-canvas');
const ctx = canvas.getContext('2d');

let particles = [];

// Livelier, more vibrant pastel palette (Mint, Bright Periwinkle, Vibrant Coral)
const palette = [
    'rgba(90, 220, 200, ',  // Mint
    'rgba(130, 160, 255, ', // Bright Periwinkle
    'rgba(255, 140, 160, '  // Vibrant Coral
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
        // Your perfected, peaceful floating speed
        this.x += 0.6 * this.vx;
        this.y += 0.6 * this.vy;

        if (this.x < 0 || this.x > canvas.width) this.vx = -this.vx;
        if (this.y < 0 || this.y > canvas.height) this.vy = -this.vy;
    }

    draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = this.baseColor + '0.85)'; // Slightly more opaque dots
        ctx.fill();
    }
}

// Refills the background cleanly when resizing the screen
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
    initParticles(); // Ensure particles refresh on resize
}

window.addEventListener('resize', resizeCanvas);
resizeCanvas(); // Trigger initially

function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    for (let i = 0; i < particles.length; i++) {
        particles[i].update();
        particles[i].draw();

        for (let j = i + 1; j < particles.length; j++) {
            let dx = particles[i].x - particles[j].x;
            let dy = particles[i].y - particles[j].y;
            let distance = Math.sqrt(dx * dx + dy * dy);

            // Connection distance remains 180 as per original
            if (distance < 180) {
                ctx.beginPath();
                let opacity = 1 - (distance / 180);
                
                ctx.strokeStyle = particles[i].baseColor + (opacity * 0.55) + ')'; // Brighter connecting lines
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
    
    // Check if someone loaded the page with a link like yoursite.com/#About
    if (window.location.hash) {
        let section = window.location.hash.substring(1);
        openWindow(section);
    }
};