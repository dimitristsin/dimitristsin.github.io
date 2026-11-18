// --- 1. ACCESSIBLE SECTION DIALOG & URL NAVIGATION ---
const modal = document.getElementById("content-window");
const modalTitle = document.getElementById("window-title");
const modalBody = document.getElementById("window-body");
const radialNav = document.querySelector(".radial-nav-container");
const mainName = document.querySelector(".main-title");
const socialIcons = document.querySelector(".floating-socials");
const backgroundRegions = [radialNav, mainName, socialIcons];
const sectionNames = ["About", "Research", "Publications", "Presentations", "Teaching", "More"];
const sectionButtons = Array.from(radialNav.querySelectorAll("button"));
const focusableSelector = 'a[href], button:not([disabled]), summary, input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])';
let returnFocus = null;
let contentRequest = null;

sectionButtons.forEach(button => {
    button.type = "button";
    button.setAttribute("aria-haspopup", "dialog");
    button.setAttribute("aria-controls", "content-window");
});

function setBackgroundAvailable(available) {
    backgroundRegions.forEach(region => {
        region.inert = !available;
        region.style.opacity = available ? "1" : "0";
        region.style.pointerEvents = available ? "" : "none";
        if (available) region.removeAttribute("aria-hidden");
        else region.setAttribute("aria-hidden", "true");
    });
}

async function openWindow(sectionName, { updateHistory = true } = {}) {
    if (!sectionNames.includes(sectionName)) return;
    const wasClosed = modal.hidden;
    if (wasClosed) {
        returnFocus = sectionButtons.find(button => button.textContent.trim() === sectionName);
    }
    modalTitle.textContent = sectionName;
    modal.hidden = false;
    modal.style.display = "flex";
    modalTitle.focus({ preventScroll: true });
    setBackgroundAvailable(false);

    if (updateHistory && window.location.hash !== "#" + sectionName) {
        window.history.pushState({ section: sectionName }, "", "#" + sectionName);
    }

    contentRequest?.abort();
    const request = new AbortController();
    contentRequest = request;
    modalBody.setAttribute("aria-busy", "true");
    modalBody.innerHTML = "<p>Loading...</p>";

    try {
        const response = await fetch(sectionName.toLowerCase() + ".html", { signal: request.signal });
        if (!response.ok) throw new Error("File not found");
        const html = await response.text();
        if (request.signal.aborted) return;
        modalBody.innerHTML = html;
        if (window.MathJax?.typesetPromise) {
            window.MathJax.typesetPromise([modalBody]).catch(error => {
                console.log("MathJax error:", error.message);
            });
        }
    } catch (error) {
        if (error.name === "AbortError") return;
        modalBody.textContent = "Content for " + sectionName + " is coming soon!";
    } finally {
        if (contentRequest === request) modalBody.setAttribute("aria-busy", "false");
    }
}

function closeWindow({ updateHistory = true } = {}) {
    if (modal.hidden) return;
    contentRequest?.abort();
    modal.hidden = true;
    modal.style.display = "none";
    modalBody.setAttribute("aria-busy", "false");
    setBackgroundAvailable(true);
    if (updateHistory && window.location.hash) {
        window.history.pushState(null, "", window.location.pathname + window.location.search);
    }
    if (returnFocus?.isConnected) returnFocus.focus({ preventScroll: true });
}

modal.addEventListener("click", event => {
    if (event.target === modal) closeWindow();
});

document.addEventListener("keydown", event => {
    if (modal.hidden) return;
    if (event.key === "Escape") {
        event.preventDefault();
        closeWindow();
    } else if (event.key === "Tab") {
        const focusable = Array.from(modal.querySelectorAll(focusableSelector))
            .filter(element => element.getClientRects().length > 0 && !element.closest("[inert]"));
        const first = focusable[0];
        const last = focusable[focusable.length - 1];
        if (!first) {
            event.preventDefault();
            modalTitle.focus();
        } else if (event.shiftKey && (document.activeElement === first || !focusable.includes(document.activeElement))) {
            event.preventDefault();
            last.focus();
        } else if (!event.shiftKey && (document.activeElement === last || !focusable.includes(document.activeElement))) {
            event.preventDefault();
            first.focus();
        }
    }
});

function syncSectionWithUrl() {
    const section = window.location.hash.slice(1);
    if (sectionNames.includes(section)) openWindow(section, { updateHistory: false });
    else closeWindow({ updateHistory: false });
}

window.addEventListener("popstate", syncSectionWithUrl);
window.addEventListener("hashchange", () => {
    const section = window.location.hash.slice(1);
    if ((modal.hidden && sectionNames.includes(section)) || (!modal.hidden && modalTitle.textContent !== section)) {
        syncSectionWithUrl();
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

function drawNetwork() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    for (let i = 0; i < particles.length; i++) {
        if (!reducedMotion.matches) particles[i].update();
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
}

function animate() {
    drawNetwork();
    animationFrame = requestAnimationFrame(animate);
}

const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
let animationFrame = null;

function updateMotionPreference() {
    if (animationFrame !== null) cancelAnimationFrame(animationFrame);
    animationFrame = null;
    if (reducedMotion.matches) {
        drawNetwork();
    } else {
        animate();
    }
}

reducedMotion.addEventListener("change", updateMotionPreference);
window.addEventListener("resize", () => {
    if (reducedMotion.matches) drawNetwork();
});
updateMotionPreference();
syncSectionWithUrl();
