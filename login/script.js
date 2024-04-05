document.addEventListener('DOMContentLoaded', function() {
    const signupButton = document.getElementById('signup');
    const loginButton = document.getElementById('login');
    const loginForm = document.querySelector('.Login-form');
    const signupForm = document.querySelector('.signup_form');

    signupButton.addEventListener('click', function(e) {
        e.preventDefault();
        loginForm.style.display = 'none';
        signupForm.style.display = 'block';
    });

    loginButton.addEventListener('click', function(e) {
        e.preventDefault();
        signupForm.style.display = 'none';
        loginForm.style.display = 'block';
    });
});
