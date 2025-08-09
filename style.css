/* Modern Color Scheme: Mostly Blue with Orange Accents */
:root {
    --primary-blue: #0056b3; /* Darker Royal Blue */
    --secondary-blue: #007bff; /* Bright Royal Blue */
    --accent-orange: #fd7e14; /* Vibrant Orange */
    --light-gray: #f8f9fa; /* Very Light Gray */
    --dark-gray: #343a40; /* Dark Charcoal Gray */
    --text-color: #333; /* Default text color */
    --bg-color: #ffffff; /* White background */

    /* New: Spacing */
    --spacing-xs: 0.5rem;
    --spacing-sm: 0.75rem; /* Slightly reduced */
    --spacing-md: 1rem;    /* Reduced */
    --spacing-lg: 1.5rem;  /* Reduced */
    --spacing-xl: 2rem;    /* Reduced */
    --spacing-xxl: 2.5rem; /* Reduced */

    /* New: Typography */
    --font-size-base: 1rem;
    --font-size-sm: 0.875rem;
    --font-size-md: 1.125rem;
    --font-size-lg: 1.5rem;
    --font-size-xl: 2rem;
    --font-size-xxl: 2.5rem;

    /* New: Border Radius */
    --border-radius-sm: 4px;
    --border-radius-md: 8px;
}

/* Dark Mode Colors */
.dark-mode {
    --primary-blue: #007bff; /* Bright Royal Blue for primary in dark mode */
    --secondary-blue: #0056b3; /* Darker Royal Blue for secondary */
    --accent-orange: #ff914d; /* Slightly lighter orange for dark mode contrast */
    --light-gray: #495057; /* Darker light gray */
    --dark-gray: #f8f9fa; /* Lighter dark gray for text */
    --text-color: #ecf0f1; /* Light text */
    --bg-color: #2c3e50; /* Dark background */
}

/* Base Styles */
body {
    font-family: 'Lato', sans-serif;
    line-height: 1.6;
    color: var(--text-color);
    background: var(--bg-color);
    margin: 0;
    padding: 0;
    transition: background 0.3s ease, color 0.3s ease;
    font-size: var(--font-size-base);
}

.modal-open {
    overflow: hidden; /* Prevent scrolling when modal is open */
}

h1, h2, h3 {
    font-family: 'Merriweather', serif;
    color: var(--primary-blue);
}

h1 { font-size: var(--font-size-xxl); }
h2 { font-size: var(--font-size-xl); }
h3 { font-size: var(--font-size-lg); }

/* Layout */
.content-wrapper {
    max-width: 1200px;
    margin: 0 auto;
    padding: var(--spacing-lg);
}

/* Header */
.main-header {
    background: var(--primary-blue);
    color: white;
    padding: var(--spacing-md) var(--spacing-lg);
    position: sticky; /* Makes header sticky */
    top: 0;
    z-index: 100;
    box-shadow: 0 2px 10px rgba(0,0,0,0.1); /* Subtle shadow for sticky effect */
    transition: all 0.3s ease-in-out;
    display: flex; /* Use flexbox for layout */
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap; /* Allow wrapping on small screens */
}

.main-header .header-content {
    text-align: left; /* Align header content to left */
    margin-bottom: 0;
    flex-grow: 1; /* Allow content to grow */
}

.main-header h1 {
    color: white;
    margin: 0;
    font-size: var(--font-size-xl);
    transition: font-size 0.3s ease; /* Transition for shrinking text */
}

.subtitle {
    color: rgba(255,255,255,0.8);
    margin: 0.5rem 0 0;
    font-size: var(--font-size-sm);
    transition: opacity 0.3s ease; /* Transition for hiding subtitle */
}

/* Sticky Header Shrink/Icon-Only state */
.main-header.scrolled {
    padding: var(--spacing-xs) var(--spacing-md); /* Smaller padding when scrolled */
    background: var(--primary-blue); /* Keep background same or slightly different */
    justify-content: center; /* Center icons when scrolled */
}

.main-header.scrolled .header-content {
    opacity: 0;
    max-width: 0;
    overflow: hidden;
    margin-right: 0;
    white-space: nowrap; /* Prevent text wrap if it briefly appears */
    transition: opacity 0.3s ease, max-width 0.3s ease;
}

/* Navigation */
.main-nav {
    display: flex;
    justify-content: center;
    gap: var(--spacing-md);
    flex-wrap: wrap;
    align-items: center;
}

.nav-link {
    color: white;
    text-decoration: none;
    font-weight: 500;
    padding: 0.5rem 0;
    position: relative;
    transition: color 0.3s ease;
    display: flex; /* Enable flexbox for icon and text */
    align-items: center;
    gap: 0.5rem; /* Space between icon and text */
}

.nav-icon {
    font-size: 1.2em; /* Icon size */
    transition: transform 0.3s ease, font-size 0.3s ease;
}

.nav-text {
    transition: opacity 0.3s ease, width 0.3s ease, margin-left 0.3s ease;
    white-space: nowrap; /* Prevent text from wrapping */
    overflow: hidden;
    max-width: 100px; /* Initial max-width, adjust as needed */
}

.nav-link:hover {
    color: var(--accent-orange); /* Livelier hover color */
}

.nav-link::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 0;
    height: 2px;
    background: var(--accent-orange); /* Livelier underline */
    transition: width 0.3s ease;
}

.nav-link:hover::after {
    width: 100%;
}

.theme-btn {
    background: none;
    border: none;
    color: white;
    font-size: 1.2rem;
    cursor: pointer;
    padding: 0 0.5rem;
}

/* When scrolled, hide text and only show icons */
.main-header.scrolled .nav-link {
    padding: 0.2rem 0.5rem; /* Smaller padding for icon-only mode */
}

.main-header.scrolled .nav-text {
    opacity: 0;
    width: 0;
    margin-left: 0;
    visibility: hidden; /* Hide completely from screen readers and layout */
}

.main-header.scrolled .nav-icon {
    font-size: 1.4em; /* Slightly larger icon in icon-only mode */
}


/* Hero Section */
.hero-section {
    background: linear-gradient(to right, var(--primary-blue), var(--secondary-blue)); /* Blue gradient */
    color: white;
    text-align: center;
    padding: var(--spacing-xxl) var(--spacing-lg);
    margin-bottom: var(--spacing-xl); /* Space before the About section */
    border-bottom-left-radius: var(--border-radius-md); /* Soften corners */
    border-bottom-right-radius: var(--border-radius-md);
}

.hero-content h2 {
    color: white;
    font-size: var(--font-size-xxl);
    margin-bottom: var(--spacing-sm);
}

.hero-content p {
    font-size: var(--font-size-md);
    max-width: 700px;
    margin: 0 auto var(--spacing-lg) auto;
    opacity: 0.9;
}

.btn {
    display: inline-block;
    padding: var(--spacing-sm) var(--spacing-md);
    border-radius: var(--border-radius-sm);
    text-decoration: none;
    font-weight: bold;
    transition: all 0.3s ease;
    margin: 0 var(--spacing-xs);
    font-size: var(--font-size-sm);
    cursor: pointer;
}

.btn-primary {
    background: var(--light-gray);
    color: var(--primary-blue);
    border: 2px solid var(--light-gray);
}

.btn-primary:hover {
    background: none;
    color: var(--light-gray);
    box-shadow: 0 0 10px var(--light-gray);
}

.btn-secondary {
    background: none;
    color: var(--light-gray);
    border: 2px solid var(--light-gray);
}

.btn-secondary:hover {
    background: var(--light-gray);
    color: var(--primary-blue);
    box-shadow: 0 0 10px var(--light-gray);
}

/* General Section Styling */
section {
    padding: var(--spacing-xl) 0; /* More vertical padding for sections */
    margin-bottom: var(--spacing-md); /* Reduced space between sections */
    border-bottom: 1px dashed rgba(0,0,0,0.1); /* Subtle separator */
}

/* Remove the last border for cleaner look */
section:last-of-type {
    border-bottom: none;
}

.dark-mode section {
    border-bottom: 1px dashed rgba(255,255,255,0.1);
}

/* About Section */
.about-section {
    display: flex;
    gap: var(--spacing-xl);
    margin: var(--spacing-xl) 0;
    align-items: center;
}

.profile-container {
    flex: 1;
    max-width: 300px;
}

.profile-img {
    width: 100%;
    border-radius: var(--border-radius-md);
    box-shadow: 0 5px 15px rgba(0,0,0,0.1);
    transition: transform 0.3s ease;
}

.profile-img:hover {
    transform: translateY(-5px);
}

.about-text {
    flex: 2;
}

.about-text ul {
    list-style: disc;
    margin-left: var(--spacing-lg);
    padding: 0;
}

.about-text li {
    margin-bottom: var(--spacing-xs);
}

/* Research Section */
.research-section {
    margin: var(--spacing-xxl) 0;
}

.interests-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: var(--spacing-md);
    margin-top: var(--spacing-lg);
}

.interest-card {
    background: white;
    padding: var(--spacing-md);
    border-radius: var(--border-radius-md);
    box-shadow: 0 3px 10px rgba(0,0,0,0.08);
    border-left: 3px solid var(--accent-orange); /* Orange touch */
    transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.dark-mode .interest-card {
    background: #34495e; /* Dark background for cards */
}

.interest-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 20px rgba(0,0,0,0.1);
}

/* Publications Section */
.publications-section {
    margin: var(--spacing-xxl) 0;
}

.publication-category {
    margin-bottom: var(--spacing-xl);
}

.publication-item {
    background: white;
    padding: var(--spacing-md);
    margin: var(--spacing-md) 0;
    border-radius: var(--border-radius-md);
    border-left: 4px solid var(--secondary-blue); /* Blue border */
    box-shadow: 0 2px 10px rgba(0,0,0,0.05);
}

.dark-mode .publication-item {
    background: #34495e;
}

.pub-title {
    font-weight: bold;
    color: var(--secondary-blue); /* Blue title */
    margin-bottom: 0.5rem;
}

.pub-authors {
    color: var(--text-color);
    opacity: 0.8;
    font-style: italic;
    margin-bottom: var(--spacing-sm);
    font-size: var(--font-size-sm);
}

.pub-links {
    display: flex;
    gap: var(--spacing-sm);
}

.pub-link {
    color: white;
    background: var(--accent-orange); /* Orange button */
    text-decoration: none;
    padding: 0.5rem 1rem;
    border: 1px solid var(--accent-orange);
    border-radius: var(--border-radius-sm);
    transition: all 0.3s ease;
    font-size: var(--font-size-sm);
    display: inline-flex;
    align-items: center;
    gap: 0.3rem;
    cursor: pointer;
}

.pub-link:hover {
    background: var(--primary-blue); /* Blue hover */
    border-color: var(--primary-blue);
    transform: translateY(-2px);
    box-shadow: 0 4px 8px rgba(0,0,0,0.1);
}

.pub-link[data-pdf]::before {
    content: '📄';
    font-size: 1em;
}

.pub-link[data-abstract]::before {
    content: '📝';
    font-size: 1em;
}

/* Teaching Section */
.teaching-section {
    margin: var(--spacing-xxl) 0;
}

.teaching-item {
    background: white;
    padding: var(--spacing-md);
    border-radius: var(--border-radius-md);
    box-shadow: 0 3px 10px rgba(0,0,0,0.08);
    border-left: 3px solid var(--secondary-blue); /* Blue border */
}

.dark-mode .teaching-item {
    background: #34495e;
}

.teaching-item h3 {
    margin-top: 0;
    margin-bottom: var(--spacing-xs);
}

.teaching-item p {
    margin-top: 0;
    margin-bottom: var(--spacing-sm);
    font-size: var(--font-size-sm);
}

/* Modal Styles */
.modal {
    display: none;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0,0,0,0.7);
    z-index: 1000;
}

.modal-content {
    background: var(--bg-color);
    margin: 4rem auto;
    padding: var(--spacing-lg);
    width: 90%;
    max-width: 900px;
    border-radius: var(--border-radius-md);
    position: relative;
    max-height: 90vh;
    overflow-y: auto;
    box-shadow: 0 10px 30px rgba(0,0,0,0.3);
}

.close-modal {
    position: absolute;
    right: var(--spacing-md);
    top: var(--spacing-md);
    font-size: var(--font-size-lg);
    cursor: pointer;
    color: var(--primary-blue);
    background: var(--light-gray);
    border-radius: 50%;
    width: 1.8em;
    height: 1.8em;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.2s ease-in-out;
}

.close-modal:hover {
    background: var(--accent-orange);
    color: white;
    transform: rotate(90deg);
}

.modal-content iframe {
    border-radius: var(--border-radius-sm);
}

/* Footer */
.main-footer {
    background: var(--primary-blue);
    color: white;
    text-align: center;
    padding: var(--spacing-md);
    margin-top: var(--spacing-xl);
}

.footer-links {
    margin-top: var(--spacing-sm);
}

.footer-links a {
    color: white;
    margin: 0 var(--spacing-sm);
    text-decoration: none;
    font-size: var(--font-size-sm);
}

.footer-links a:hover {
    text-decoration: underline;
}

/* Responsive Design */
@media (max-width: 768px) {
    .content-wrapper {
        padding: var(--spacing-md);
    }
    
    .main-header {
        padding: var(--spacing-md) var(--spacing-md);
    }

    .main-header h1 {
        font-size: var(--font-size-xl);
    }

    .subtitle {
        font-size: var(--font-size-sm);
    }
    
    .main-nav {
        flex-direction: column;
        align-items: center;
        gap: var(--spacing-sm);
        margin-top: var(--spacing-md);
    }

    .hero-section {
        padding: var(--spacing-xl) var(--spacing-md);
    }

    .hero-content h2 {
        font-size: var(--font-size-xl);
    }
    .hero-content p {
        font-size: var(--font-size-sm);
    }

    .about-section {
        flex-direction: column;
        text-align: center;
        gap: var(--spacing-md);
    }
    
    .profile-container {
        max-width: 180px;
        margin-bottom: var(--spacing-md);
    }
    
    .interests-grid {
        grid-template-columns: 1fr;
    }
    
    .publication-item, .teaching-item, .interest-card {
        padding: var(--spacing-md);
    }

    .pub-links {
        flex-direction: column;
        gap: var(--spacing-sm);
    }
    
    .modal-content {
        width: 95%;
        padding: var(--spacing-md);
        margin: 2rem auto;
        max-height: 90vh;
    }

    /* Adjust sticky header for small screens */
    .main-header.scrolled .nav-text {
        display: none; /* Hide text on very small screens when scrolled */
    }

    .main-header.scrolled .header-content {
        display: none; /* Hide header content on small screens when scrolled */
    }

    .main-header.scrolled .main-nav {
        flex-direction: row; /* Keep nav horizontal when sticky for icons */
        gap: var(--spacing-xs);
        width: 100%;
        justify-content: space-around;
    }
}
