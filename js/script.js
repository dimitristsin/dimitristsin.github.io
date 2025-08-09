// Theme Toggle
document.getElementById('theme-toggle').addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');
    try {
        localStorage.setItem('theme', document.body.classList.contains('dark-mode') ? 'dark' : 'light');
    } catch (e) {
        console.warn("Could not set theme preference in localStorage:", e);
    }
    this.textContent = document.body.classList.contains('dark-mode') ? '☀️' : '🌙';
    this.setAttribute('aria-label', document.body.classList.contains('dark-mode') ? 'Switch to light mode' : 'Switch to dark mode');
});

// Check for saved theme preference
try {
    if (localStorage.getItem('theme') === 'dark') {
        document.body.classList.add('dark-mode');
        const themeToggle = document.getElementById('theme-toggle');
        if (themeToggle) { // Check if element exists before accessing
            themeToggle.textContent = '☀️';
            themeToggle.setAttribute('aria-label', 'Switch to light mode');
        }
    }
} catch (e) {
    console.warn("Could not read theme preference from localStorage:", e);
}

// Modal functionality for publications
const modal = document.getElementById('pub-modal');
const modalBody = document.getElementById('modal-body');
const closeModal = document.querySelector('.close-modal');

// Function to open modal
function openModal(contentHtml) {
    modalBody.innerHTML = contentHtml;
    modal.style.display = 'block';
    document.body.classList.add('modal-open'); // To prevent scrolling body
    closeModal.focus(); // Focus on the close button for accessibility
}

// Function to close modal
function closePubModal() { // Renamed to avoid conflict with window.close()
    modal.style.display = 'none';
    document.body.classList.remove('modal-open');
    // For simplicity, we'll skip focus restoration here, but it's good practice
    // If you track the element that opened the modal, you would restore focus to it here.
}

document.querySelectorAll('.pub-link').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        
        let content = '';
        if (this.hasAttribute('data-pdf')) {
            content = `
                <iframe src="${this.getAttribute('data-pdf')}" 
                        style="width:100%; height:70vh;" 
                        frameborder="0" title="Publication PDF Viewer"></iframe>
            `;
        } else if (this.hasAttribute('data-abstract')) {
            content = `
                <h3>Abstract</h3>
                <p>${this.getAttribute('data-abstract')}</p>
            `;
        }
        openModal(content);
    });
});

// Close modal
closeModal.addEventListener('click', closePubModal);

window.addEventListener('click', (e) => {
    if (e.target === modal) {
        closePubModal();
    }
});

// Close modal with Escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.style.display === 'block') {
        closePubModal();
    }
});

// Smooth scrolling for navigation
document.querySelectorAll('.main-nav a[href^="#"]').forEach(anchor => { // Only select internal hash links
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);

        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
            // Update URL hash without jumping
            history.pushState(null, null, targetId);
        }
    });
});
