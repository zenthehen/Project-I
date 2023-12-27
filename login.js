function openSignupForm() {
    document.getElementById("loginForm").style.display = "none";
    document.getElementById("signupForm").style.display = "block";
}
function backButton(){
    document.getElementById("loginForm").style.display = "flex";
    document.getElementById("signupForm").style.display = "none";
}

