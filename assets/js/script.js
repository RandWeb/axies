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

