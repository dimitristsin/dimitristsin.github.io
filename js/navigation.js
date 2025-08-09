// Handle navigation collapse on scroll
document.addEventListener('DOMContentLoaded', function() {
    const header = document.querySelector('.main-header');
    const headerHeight = header.offsetHeight;
    
    window.addEventListener('scroll', function() {
        if (window.scrollY > headerHeight) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });
    
    // Smooth scrolling for navigation
    document.querySelectorAll('.nav-link[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                window.scrollTo({
                    top: target.offsetTop - header.offsetHeight,
                    behavior: 'smooth'
                });
            }
        });
    });
});
