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

/**
 * popular pictures
 */

const pictures = document.querySelectorAll('.popular__pictures-item')

function removeActiveClasses(obj) {
    console.log(obj)
    for (let index = 0; index < obj.length; index++) {
        const node = obj[index];
        if (node.classList.contains('popular__item-active')) {
            node.classList.remove('popular__item-active')
        }
    }
}

pictures.forEach((picture) => {
    picture.addEventListener('click', () => {
        removeActiveClasses(picture.parentNode.children);
        picture.classList.add('popular__item-active')
    })
})

