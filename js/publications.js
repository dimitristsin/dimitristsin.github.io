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
                    <h3>${this.closest('.publication-item').querySelector('.pub-title').textContent}</h3>
                    <iframe src="${this.getAttribute('data-pdf')}" 
                            style="width:100%; height:70vh;" 
                            frameborder="0"></iframe>
                `;
            } else if (this.hasAttribute('data-abstract')) {
                // Show abstract in modal
                modalBody.innerHTML = `
                    <h3>${this.closest('.publication-item').querySelector('.pub-title').textContent}</h3>
                    <p><em>${this.closest('.publication-item').querySelector('.pub-authors').textContent}</em></p>
                    <div class="abstract-content">
                        <h4>Abstract</h4>
                        <p>${this.getAttribute('data-abstract')}</p>
                    </div>
                `;
            } else if (this.hasAttribute('data-bibtex')) {
                // Show BibTeX in modal
                modalBody.innerHTML = `
                    <h3>${this.closest('.publication-item').querySelector('.pub-title').textContent}</h3>
                    <pre><code>${this.getAttribute('data-bibtex')}</code></pre>
                    <button class="copy-bibtex">Copy to Clipboard</button>
                `;
                
                // Add copy functionality
                modal.querySelector('.copy-bibtex').addEventListener('click', function() {
                    navigator.clipboard.writeText(this.previousElementSibling.textContent);
                    this.textContent = 'Copied!';
                    setTimeout(() => {
                        this.textContent = 'Copy to Clipboard';
                    }, 2000);
                });
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
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                window.scrollTo({
                    top: target.offsetTop - 100,
                    behavior: 'smooth'
                });
            }
        });
    });
});
