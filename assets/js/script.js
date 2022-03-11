/***
 * header
 */

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

