const emailSubmission = document.querySelector('form');
const email = document.querySelector('input');
const error = document.querySelector('small');
const formControl = email.parentElement;

emailSubmission.addEventListener('submit', function(e) {
    e.preventDefault();
    if (email.value === '') {
        setErrorMessage('Oops! Please add your email.');
    }
    else if (!isValidEmail(email.value)) {
        setErrorMessage('Oops! Please check your email.');
    }
    else {
        success();
    }
});

function setErrorMessage(message) {
    formControl.className = 'form-control error';
    error.innerText = message;
}

function success() {
    formControl.className = 'form-control';
    error.innerText = '';
}

function isValidEmail(email) {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}
