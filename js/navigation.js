// Handle navigation collapse on scroll
document.addEventListener('DOMContentLoaded', function() {
    const header = document.querySelector('.main-header');
    const headerHeight = header.offsetHeight;
    const contentWrapper = document.querySelector('.content-wrapper');
    
    // Set initial padding based on header height
    contentWrapper.style.paddingTop = headerHeight + 'px';
    
    // Throttle scroll events for better performance
    let ticking = false;
    
    window.addEventListener('scroll', function() {
        if (!ticking) {
            window.requestAnimationFrame(function() {
                if (window.scrollY > headerHeight / 2) {
                    header.classList.add('scrolled');
                } else {
                    header.classList.remove('scrolled');
                }
                ticking = false;
            });
            ticking = true;
        }
    });
    
    // Smooth scrolling for navigation
    document.querySelectorAll('.nav-link[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const targetPosition = target.offsetTop - header.offsetHeight;
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
                
                // Update URL without jumping
                if (history.pushState) {
                    history.pushState(null, null, this.getAttribute('href'));
                }
            }
        });
    });
});
