document.addEventListener('DOMContentLoaded', function() {
    const themeToggle = document.getElementById('theme-toggle');
    
    // Set default to light mode
    document.body.classList.add('light-mode');
    localStorage.setItem('theme', 'light');
    themeToggle.textContent = '🌙';
    
    // Toggle theme on button click
    themeToggle.addEventListener('click', function() {
        const isDark = document.body.classList.contains('dark-mode');
        document.body.classList.toggle('dark-mode', !isDark);
        document.body.classList.toggle('light-mode', isDark);
        
        const newTheme = isDark ? 'light' : 'dark';
        localStorage.setItem('theme', newTheme);
        themeToggle.textContent = isDark ? '🌙' : '☀️';
    });
    
    // Check for saved preference
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        document.body.classList.add('dark-mode');
        document.body.classList.remove('light-mode');
        themeToggle.textContent = '☀️';
    }
});
