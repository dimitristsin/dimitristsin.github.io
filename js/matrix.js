document.addEventListener('DOMContentLoaded', function() {
    const canvas = document.getElementById('matrixCanvas');
    const ctx = canvas.getContext('2d');
    
    // Set canvas to full window size
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    
    // Matrix characters
    const matrixChars = "01∀∃∈⊆≟∧∨¬→↔⊕⊗⊤⊥ℕℤℝℂΠΣλφψω";
    const fontSize = 16;
    const columns = canvas.width / fontSize;
    
    // Set of drops for each column
    const drops = [];
    for (let i = 0; i < columns; i++) {
        drops[i] = Math.floor(Math.random() * canvas.height / fontSize) * fontSize;
    }
    
    // Draw function
    function draw() {
        // Semi-transparent background
        ctx.fillStyle = 'rgba(18, 20, 29, 0.05)';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        
        // Set font and color
        ctx.fillStyle = '#4a6ee0';
        ctx.font = fontSize + 'px Fira Code';
        
        // Draw characters
        for (let i = 0; i < drops.length; i++) {
            const text = matrixChars.charAt(Math.floor(Math.random() * matrixChars.length));
            ctx.fillText(text, i * fontSize, drops[i] * fontSize);
            
            // Reset drops at random intervals
            if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
                drops[i] = 0;
            }
            drops[i]++;
        }
    }
    
    // Animation loop
    setInterval(draw, 33);
    
    // Resize handler
    window.addEventListener('resize', function() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    });
});
