//login effect

let loginBtn = document.querySelector('.login__btn')
loginBtn.addEventListener('animationend', () => {
    console.log('test');
    loginBtn.classList.remove('active');
});

const inputs = document.querySelectorAll('input');
inputs.forEach(e => {
    e.addEventListener('click', () => {
        e.parentElement.firstElementChild.classList.add('input-active');
    });
})


document.addEventListener('mouseup', function (e) {
    let inp = document.querySelectorAll('input');
    inp.forEach(ele => {
        if (ele.parentElement.firstElementChild.classList.contains('input-active')) {
            ele.parentElement.firstElementChild.classList.remove('input-active');
        }
    });
});