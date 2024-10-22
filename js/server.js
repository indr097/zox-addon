// JavaScript to handle dropdown menu interactivity
document.addEventListener("DOMContentLoaded", function() {
    const dropdown = document.querySelector('.dropdown');
    
    dropdown.addEventListener('mouseover', function() {
        const dropdownContent = dropdown.querySelector('.dropdown-content');
        dropdownContent.style.display = 'block';
    });

    dropdown.addEventListener('mouseout', function() {
        const dropdownContent = dropdown.querySelector('.dropdown-content');
        dropdownContent.style.display = 'none';
    });
});

// Scroll to sections when clicking on dropdown links
const links = document.querySelectorAll('.nav-links a');
links.forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = e.target.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        targetElement.scrollIntoView({ behavior: 'smooth' });
    });
});
