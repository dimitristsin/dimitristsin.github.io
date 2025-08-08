// js/publications.js
document.addEventListener('DOMContentLoaded', function() {
    const modal = document.getElementById('pub-modal');
    const modalBody = document.getElementById('modal-body');
    const closeModal = document.querySelector('.close-modal');

    // Handle publication link clicks
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
    document.querySelectorAll('.main-nav a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        });
    });
});
