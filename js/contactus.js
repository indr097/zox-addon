// Search bar functionality
document.getElementById('search-bar').addEventListener('keypress', function (event) {
    if (event.key === 'Enter') {
        let query = event.target.value;
        window.location.href = `/search?query=${query}`;
    }
});

// Contact form submission (this is a placeholder, actual submission logic will depend on backend)
document.querySelector('.contact-form').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent the form from submitting
    
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let message = document.getElementById('message').value;
    
    alert(`Thank you, ${name}. Your message has been sent!`);
});
