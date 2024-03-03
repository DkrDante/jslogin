const wrapper = document.querySelector('.wrapper');
const registerlink = document.querySelector('.register-now');
const loginlink = document.querySelector('.login-now');
const btnpop = document.querySelector('.butlogpop');
const close = document.querySelector('.close')
registerlink.onclick = () => {
    wrapper.classList.add('active');
}
loginlink.onclick = () => {
    wrapper.classList.remove('active');
}
btnpop.onclick = () => {
    wrapper.classList.add('active-popup');

}
close.onclick = () => {
    wrapper.classList.remove('active-popup');
    wrapper.classList.remove('active');


}
let docTitle = document.title;
window.addEventListener("blur", () => {
    document.title = "I miss you love ☹️";
})
window.addEventListener("focus", () => {
    document.title = docTitle;
})

function showHidePassword() {
    var passwordInput = document.getElementById("password");
    var showHideButton = document.getElementById("show-hide-button");

    if (passwordInput.type === "password") {
        passwordInput.type = "text";
        showHideButton.innerHTML = "Hide Password";
    } else {
        passwordInput.type = "password";
        showHideButton.innerHTML = "Show Password";
    }
}

var passwordInput = document.getElementById("password");
var showHideButton = document.getElementById("show-hide-button");
showHideButton.addEventListener("click", showHidePassword);