//document.addEventListener('DOMContentLoaded', function() {
    const loginBtn1 = document.getElementById('loginBtn');
    const signupBtn = document.getElementById('signupBtn');
    

    loginBtn1.addEventListener('click', function() {
        window.location.href='login.html'// Replace with your login functionality or page redirection
        console.log('Login button clicked');
        // Example: window.location.href = 'login.html';
    });

    signupBtn.addEventListener('click', function() {
        window.location.href ='register.html'
        console.log('Sign Up button clicked');
        
    });

    homeLink.addEventListener('click', function(event) {
        event.preventDefault();
        console.log('Home link clicked');
        // Add functionality for the home link click
        // Example: window.location.href = 'home.html';
    });

    downloadLink.addEventListener('click', function(event) {
        event.preventDefault();
        console.log('Download link clicked');
        // Add functionality for the download link click
        // Example: window.location.href = 'download.html';
    });

    discoverLink.addEventListener('click', function(event) {
        event.preventDefault();
        console.log('Discover link clicked');
        // Add functionality for the discover link click
        // Example: window.location.href = 'discover.html';
    });

    aboutLink.addEventListener('click', function(event) {
        event.preventDefault();
        console.log('About link clicked');
        // Add functionality for the about link click
        // Example: window.location.href = 'about.html';
    });
//}); 