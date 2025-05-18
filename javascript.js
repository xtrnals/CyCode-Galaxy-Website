const logbox = document.querySelector('.log-box')
const signinlink = document.querySelector('.sign-in')
const createacclink = document.querySelector('.create-acc')

createacclink.addEventListener('click', () => {
    logbox.classList.add('active');
});

signinlink.addEventListener('click', () => {
    logbox.classList.remove('active');
});