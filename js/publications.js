document.addEventListener('DOMContentLoaded', function() {
    const modal = document.getElementById('pub-modal');
    const modalBody = document.getElementById('modal-body');
    const closeModal = document.querySelector('.close-modal');

    // Handle publication link clicks
    document.querySelectorAll('.pub-link').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const publicationItem = this.closest('.publication-item');
            const title = publicationItem.querySelector('.pub-title').textContent;
            const authors = publicationItem.querySelector('.pub-authors').textContent;
            
            if (this.hasAttribute('data-pdf')) {
                // Show PDF in modal
                modalBody.innerHTML = `
                    <h3>${title}</h3>
                    <p class="modal-authors">${authors}</p>
                    <iframe src="${this.getAttribute('data-pdf')}" 
                            style="width:100%; height:70vh;" 
                            frameborder="0"></iframe>
                `;
            } else if (this.hasAttribute('data-abstract')) {
                // Show abstract in modal
                modalBody.innerHTML = `
                    <h3>${title}</h3>
                    <p class="modal-authors">${authors}</p>
                    <div class="abstract-content">
                        <h4>Abstract</h4>
                        <p>${this.getAttribute('data-abstract')}</p>
                    </div>
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
});
