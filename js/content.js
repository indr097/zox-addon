// JavaScript for Dropdown Interaction
document.querySelectorAll('.dropdown-btn').forEach((btn) => {
    btn.addEventListener('click', function (e) {
        e.preventDefault(); // Prevent default anchor click behavior
        const dropdown = this.nextElementSibling;
        const isVisible = dropdown.style.display === 'block';
        
        // Hide all other dropdowns
        document.querySelectorAll('.dropdown-content').forEach((content) => {
            content.style.display = 'none';
        });

        // Toggle the current dropdown
        dropdown.style.display = isVisible ? 'none' : 'block';
    });
});

// Close dropdowns when clicking outside
document.addEventListener('click', function (e) {
    if (!e.target.closest('.dropdown')) {
        document.querySelectorAll('.dropdown-content').forEach((content) => {
            content.style.display = 'none';
        });
    }
});
// JavaScript to filter videos by category
document.addEventListener('DOMContentLoaded', function() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const videoItems = document.querySelectorAll('.video-item');

    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            const category = button.getAttribute('data-category');

            videoItems.forEach(item => {
                if (category === 'all' || item.getAttribute('data-category') === category) {
                    item.style.display = 'block'; // Show the item
                } else {
                    item.style.display = 'none'; // Hide the item
                }
            });
        });
    });
});
