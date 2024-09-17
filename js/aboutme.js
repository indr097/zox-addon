// JavaScript to dynamically calculate age
document.addEventListener('DOMContentLoaded', function () {
    calculateAge('1996-01-15'); // Date of birth format: YYYY-MM-DD
    animateSkillBars();
});

// Function to calculate age
function calculateAge(dob) {
    const birthDate = new Date(dob);
    const today = new Date();
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }
    document.getElementById('age').textContent = age;
}

// Function to copy text to clipboard
function copyToClipboard(elementId) {
    const text = document.getElementById(elementId).textContent;
    navigator.clipboard.writeText(text).then(() => {
        alert(elementId.charAt(0).toUpperCase() + elementId.slice(1) + ' copied to clipboard!');
    });
}

// Function to animate skill progress bars
function animateSkillBars() {
    const skills = {
        'html-bar': '90%',
        'css-bar': '80%',
        'js-bar': '75%'
    };

    for (const [id, width] of Object.entries(skills)) {
        document.getElementById(id).style.width = width;
    }
}
