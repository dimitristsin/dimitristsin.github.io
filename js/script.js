// Smooth scrolling for navigation
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', function(e) {
        if(this.hash !== '#') {
            e.preventDefault();
            const target = document.querySelector(this.hash);
            if(target) {
                window.scrollTo({
                    top: target.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        }
    });
});

// Modal functionality for publications
const modal = document.getElementById('pub-modal');
const modalBody = document.getElementById('modal-body');

document.querySelectorAll('.pub-link').forEach(link => {
    link.addEventListener('click', function(e) {
        if(this.href.endsWith('.pdf')) {
            e.preventDefault();
            modalBody.innerHTML = `<iframe src="${this.href}" style="width:100%; height:80vh;"></iframe>`;
            modal.style.display = 'block';
        }
    });
});

document.querySelector('.close-modal').addEventListener('click', () => {
    modal.style.display = 'none';
});

window.addEventListener('click', (e) => {
    if(e.target === modal) {
        modal.style.display = 'none';
    }
});
