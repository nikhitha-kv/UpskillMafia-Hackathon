// JavaScript code to handle navigation
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault(); // Prevent the default action of navigation
        const targetId = this.getAttribute('href').substring(1); // Get the target section ID
        document.getElementById(targetId).scrollIntoView({ // Scroll to the target section
            behavior: 'smooth'
        });
    });
});