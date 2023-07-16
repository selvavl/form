const form = document.querySelector('form');
const password = form.password;
const confirmPassword = form.confirmPassword;
const feedback = document.querySelectorAll('.feedback');
let isPasswordMatch = false;

confirmPassword.addEventListener('input', () => {
    console.log("listening for password");
    if (password.value!== confirmPassword.value) {
        feedback.innerText = "Password did not match";
        isPasswordMatch = false;
        console.log("false");
    } else {
        feedback.innerHTML = "";
        isPasswordMatch = true;
    }
});