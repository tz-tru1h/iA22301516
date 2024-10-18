const userForm = document.getElementById("loginRegisterForm");
const userInputUsername = document.getElementById("Luserlog");
const userInputPassword = document.getElementById("pword");
const OptErrorMessage = document.getElementById("logerror");
const hiddenButton = document.getElementById("hiddenButton");

const defaultUsername = "default12@gmail.com";
const defaultPassword = "password123";

function getloginRegisterFormErrors(Luserlog, pword) {
    let errors = [];

    if (Luserlog === '' || Luserlog === null) {
        errors.push('Username is required');
        userInputUsername.parentElement.classList.add('Incorrect');
    }

    if (pword === '' || pword === null) {
        errors.push('Password is required');
        userInputPassword.parentElement.classList.add('Incorrect');
    }

    if (Luserlog !== defaultUsername || pword !== defaultPassword) {
        errors.push('Incorrect username or password.');
        userInputUsername.parentElement.classList.add('Incorrect');
        userInputPassword.parentElement.classList.add('Incorrect');
    }

    return errors;
}

userForm.addEventListener('submit', (e) => {
    e.preventDefault(); 

    let errors = [];

    errors = getloginRegisterFormErrors(userInputUsername.value.trim(), userInputPassword.value.trim());

    if (errors.length > 0) {
        e.preventDefault(); 
        OptErrorMessage.innerText = errors.join(". ");
    } else {
        hiddenButton.style.display = "block";
    }
});

const allInputs = [userInputUsername, userInputPassword];

allInputs.forEach(input => {
    input.addEventListener('input', () => {
        if (input.parentElement.classList.contains('Incorrect')) {
            input.parentElement.classList.remove('Incorrect');
        }
    });
});

