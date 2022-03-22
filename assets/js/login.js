//login effect

let loginBtn = document.querySelector('.login__btn')
loginBtn.addEventListener('animationend', () => {
    console.log('test');
    loginBtn.classList.remove('active');
});
