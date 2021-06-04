let backdrop = document.querySelector('.backdrop');
let modal = document.querySelector('.modal');
let choosePlanButtons = document.querySelectorAll('.plan button');
let toggleButton = document.querySelector('.toggle-button');
let mobileNav = document.querySelector('.mobile-nav');
let firstName = document.querySelector('#first-name');
let lastName = document.querySelector('#last-name');
let email = document.querySelector('#email');
let password = document.querySelector('#password');
let submitButton = document.querySelector('#submit-button');
let ctaButton = document.querySelector('.main-nav__item--cta');

const validationObj = {
    'first-name': {
        isTouched: false,
        isValid: false
    },
    'last-name': {
        isTouched: false,
        isValid: false
    },
    email: {
        isTouched: false,
        isValid: false
    },
    password: {
        isTouched: false,
        isValid: false
    }
}

const emailPattern = /^\w+(\.\w+)?(@\w+\.\w+)$/;

const validateInput = e => {
    const value = e.target.value;
    const elemId = e.target.id;

    switch (elemId) {
        case ('email'):
            if (emailPattern.test(value)) {
                email.classList.remove('invalid');
                validationObj[elemId].isValid = true;
            } else {
                email.classList.add('invalid');
                validationObj[elemId].isValid = false;
            }
            break;
        case ('first-name'):
            if (value.trim().length === 0) {
                firstName.classList.add('invalid');
                validationObj[elemId].isValid = false;
            } else {
                firstName.classList.remove('invalid');
                validationObj[elemId].isValid = true;
            }
            break;
        case ('last-name'):
            if (value.trim().length === 0) {
                lastName.classList.add('invalid');
                validationObj[elemId].isValid = false;
            } else {
                lastName.classList.remove('invalid');
                validationObj[elemId].isValid = true;
            }
            break;
        case ('password'):
            if (value.trim().length === 0) {
                password.classList.add('invalid');
                validationObj[elemId].isValid = false;
            } else {
                password.classList.remove('invalid');
                validationObj[elemId].isValid = true;
            }
            break;
        default:
            console.log(`Invalid id: ${elemId}`);
    }
    isValidForm();
}

const isValidForm = () => {

    let isValidFlag = true;
    let isValid = async() => {
        for (const inputField in validationObj) {
            if (!validationObj[inputField].isValid) {
                isValidFlag = false;
            }
        }
        return Promise.resolve(isValidFlag);
    }

    isValid().then(value => {
        if (value) {
            submitButton.removeAttribute("disabled", "");
            submitButton.setAttribute("enabled", "");
        } else {
            submitButton.setAttribute("disabled", "");
            submitButton.removeAttribute("enabled", "");
        }
    });
}

const handleOnFocus = e => {
    const elemId = e.target.id;
    validationObj[elemId].isTouched = true;

    if ('email' === elemId && !validationObj[elemId].isValid) {
        email.classList.add('invalid');
    }

    if ('first-name' === elemId && !validationObj[elemId].isValid) {
        firstName.classList.add('invalid');
    }

    if ('last-name' === elemId && !validationObj[elemId].isValid) {
        lastName.classList.add('invalid');
    }

    if ('password' === elemId && !validationObj[elemId].isValid) {
        password.classList.add('invalid');
    }
}

const submitForm = (e) => {
    e.preventDefault();
    console.log("Form submitted...");
}

const showModal = (e) => {
    // modal.style.display = 'block';
    // backdrop.style.display = 'block';
    modal.classList.add('open');
    backdrop.style.display = "block";
    setTimeout(() => {
        backdrop.classList.add('open');
    }, 10);
}

const hideModal = (e) => {
    // modal.style.display = 'none';
    // backdrop.style.display = 'none';
    // mobileNav.style.display = 'none';
    if (null !== modal) {
        modal.classList.remove('open');
    }
    backdrop.classList.remove('open');
    setTimeout(() => {
        backdrop.style.display = "none";
    }, 500); // Time should be same as transition duration. check shared.css

    if (null !== mobileNav) {
        mobileNav.classList.remove('open');
    }
}

toggleButton.addEventListener('click', () => {
    //mobileNav.style.display = 'block';
    backdrop.style.display = "block";
    mobileNav.classList.add('open');
    setTimeout(() => {
        backdrop.classList.add('open');
    }, 10);
});

for (button of choosePlanButtons) {
    button.addEventListener('click', showModal);
}

ctaButton.addEventListener('animationstart', event => {
    console.log('Animation started', event);
});

ctaButton.addEventListener('animationiteration', event => {
    console.log('Animation iteration', event);
});

ctaButton.addEventListener('animationend', event => {
    console.log('Animation ended', event);
});