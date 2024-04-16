function mylogin(){
    window.location.href = "login.html"
};


function getdata() {
   
    var email = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert('Please enter a valid email address.');
        return;
    }

    var passwordRegex = /^(?=.*[a-zA-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
    if (!passwordRegex.test(password)) {
        alert('Password must be at least 8 characters long and contain both letters and numbers only.');
        return;
    }

    alert('Form submitted successfully!');
    window.location.href = 'index.html';  
}
