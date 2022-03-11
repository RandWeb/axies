/***
 * header
 */

let container = document.querySelector('.container')
container.addEventListener('click',()=>{
    let searchBox = document.querySelector('.header__search-box');
    console.log(window.getComputedStyle(searchBox, null).display);
    if(window.getComputedStyle(searchBox, null).getPropertyValue('display') == 'flex'){
        console.log('container')
        searchBox.style.display = "none";
    }
})
let iconSearch = document.querySelector('.search__icon')
iconSearch.addEventListener('click', ()=>{
    document.getElementsByClassName('header__search-box').style.display = "flex";
})
/**
 * popular pictures
 */

const pictures = document.querySelectorAll('.popular__pictures-item')

function removeActiveClasses(obj) {
    console.log(obj)
 for (let index = 0; index < obj.length; index++) {
     const node = obj[index];
     if(node.classList.contains('popular__item-active')){
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

