// Theme Toggle (from previous)
document.getElementById('theme-toggle').addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');
    localStorage.setItem('theme', document.body.classList.contains('dark-mode') ? 'dark' : 'light');
    this.textContent = document.body.classList.contains('dark-mode') ? '☀️' : '🌙';
});

// Check for saved theme preference
if (localStorage.getItem('theme') === 'dark') {
    document.body.classList.add('dark-mode');
    document.getElementById('theme-toggle').textContent = '☀️';
}

// Modal functionality for publications
const modal = document.getElementById('pub-modal');
const modalBody = document.getElementById('modal-body');
const closeModal = document.querySelector('.close-modal');

document.querySelectorAll('.pub-link').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        
        if (this.hasAttribute('data-pdf')) {
            // Show PDF in modal
            modalBody.innerHTML = `
                <iframe src="${this.getAttribute('data-pdf')}" 
                        style="width:100%; height:70vh;" 
                        frameborder="0"></iframe>
            `;
        } else if (this.hasAttribute('data-abstract')) {
            // Show abstract in modal
            modalBody.innerHTML = `
                <h3>Abstract</h3>
                <p>${this.getAttribute('data-abstract')}</p>
            `;
        }
        
        modal.style.display = 'block';
    });
});

// Close modal
closeModal.addEventListener('click', () => {
    modal.style.display = 'none';
});

window.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.style.display = 'none';
    }
});

// Smooth scrolling for navigation
document.querySelectorAll('.nav-links a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        if (this.getAttribute('href').startsWith('#')) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});
