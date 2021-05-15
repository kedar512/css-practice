let backdrop = document.querySelector('.backdrop');
let modal = document.querySelector('.modal');
let choosePlanButtons = document.querySelectorAll('.plan button');
let toggleButton = document.querySelector('.toggle-button');
let mobileNav = document.querySelector('.mobile-nav');

const showModal = (e) => {
    // modal.style.display = 'block';
    // backdrop.style.display = 'block';
    modal.classList.add('open');
    backdrop.classList.add('open');
}

const hideModal = (e) => {
    // modal.style.display = 'none';
    // backdrop.style.display = 'none';
    // mobileNav.style.display = 'none';
    if (null !== modal) {
        modal.classList.remove('open');
    }
    backdrop.classList.remove('open');

    if (null !== mobileNav) {
        mobileNav.classList.remove('open');
    }
}

toggleButton.addEventListener('click', () => {
    // mobileNav.style.display = 'block';
    mobileNav.classList.add('open');
    backdrop.classList.add('open');
});

for (button of choosePlanButtons) {
    button.addEventListener('click', showModal);
}