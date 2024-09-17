// Function to toggle between Login and Signup
function login() {
    var formBox = document.querySelector('.form-box');
    var btn = document.getElementById('btn');
    formBox.style.left = '0';
    btn.style.left = '0';
}

function signup() {
    var formBox = document.querySelector('.form-box');
    var btn = document.getElementById('btn');
    formBox.style.left = '-100%';
    btn.style.left = '50%';
}
