/**
 * 
 * switching theme
 */
const lihteMode = document.querySelector('.header__sun');
const darkMode = document.querySelector('.header__moon');
let mode = document.querySelector('.header__mode h5');
lihteMode.addEventListener('click',()=>{
     let root = document.querySelector('html');
     if(!root.classList.contains('theme-light')){
        root.classList.remove('theme-dark');
        root.classList.add('theme-light');
        mode.innerHTML="light mode<br/><b>available</b>"
     }
})
darkMode.addEventListener('click',()=>{
     let root = document.querySelector('html');
    let mode = document.querySelector('.header__mode h5');
        if(!root.classList.contains('theme-dark')){
            root.classList.remove('theme-light');
            root.classList.add('theme-dark')
            mode.innerHTML="dark mode<br/><b>available</b>"
        }

})

/***
 * header
 */
// search box
document.addEventListener('mouseup', function (e) {
    var container = document.querySelector('.header__search-box');
    if (!container.contains(e.target)) {
        container.classList.remove('active-search')
    }
});
let iconSearch = document.querySelector('.search__icon')
iconSearch.addEventListener('click', () => {
    document.querySelector('.header__search-box').classList.add('active-search');
})

//showing header
document.querySelector('.menu').addEventListener('click', () => {
    console.log('menu');
    document.querySelectorAll('.target').forEach((item) => {
        item.classList.toggle('change');
        console.log('target');
    });
});

//submenu


let navLinks = document.querySelectorAll('.navbar__link')
navLinks.forEach((item)=>{
   item.addEventListener('click', (e) => {
        let submenu=item.querySelector('.sub__menu-one');
         removeClassActiveSubmenu();
        submenu.classList.add('active-submenu')
        console.log(submenu);
    });
});

function removeClassActiveSubmenu(){
    document.querySelectorAll('.sub__menu-one').forEach(item=>{
        item.classList.remove('active-submenu');
    })
}

document.addEventListener('mouseup', function (e) {
    var container = document.querySelector('.navbar');
    if (!container.contains(e.target)) {
        removeClassActiveSubmenu();
    }
});
