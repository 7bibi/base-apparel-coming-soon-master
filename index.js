let email = document.getElementById("email-address")
let form = document.getElementById("form")
let errorText = document.getElementById("error-text")
let errorIcon = document.getElementById("error-icon")

const pattern = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;

function handleSubmit(e) {
    if(!email.value.match(pattern)) {
        e.preventDefault();
        showError();
    } else {
        hideError();
    }
}

function showError () {
    errorIcon.style.display = 'block';
    errorText.style.opacity = 1
    errorText.style.height = "auto"
    email.style.borderColor = "hsl(0, 93%, 68%)"
}

function hideError() {
    errorIcon.style.display = 'none';
    errorText.style.opacity = 0
    errorText.style.height = 0
    email.style.borderColor = "hsl(0, 36%, 70%)"
}

form.addEventListener('submit', handleSubmit)
email.addEventListener('input', () => hideError())
