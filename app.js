const form = document.querySelector('form');
const password = form.password;
const confirmPassword = form.confirmPassword;
const feedback = document.querySelector('.feedback');
let isPasswordMatch = false;

confirmPassword.addEventListener('input', () => {
    console.log("listening for password");
    if (password.value != confirmPassword.value) {
        if(!feedback.classList.contains("error")){
            feedback.classList.toggle("error");
            password.classList.toggle("error");
            confirmPassword.classList.toggle("error");
        }
        isPasswordMatch = false;
        console.log("false");
    } else {
        if(feedback.classList.contains("error")) {
            feedback.classList.toggle("error");
            password.classList.toggle("error");
            confirmPassword.classList.toggle("error");
        }
        feedback.innerHTML = "";
        isPasswordMatch = true;
        console.log("true");
    }
});