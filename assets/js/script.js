/**
 * 
 * switching theme
 */
const lihteMode = document.querySelector('.header__sun');
const darkMode = document.querySelector('.header__moon');
let mode = document.querySelector('.header__mode h5');
lihteMode.addEventListener('click', () => {
    let root = document.querySelector('html');
    if (!root.classList.contains('theme-light')) {
        root.classList.remove('theme-dark');
        root.classList.add('theme-light');
        mode.innerHTML = "light mode<br/><b>available</b>"
    }
})
darkMode.addEventListener('click', () => {
    let root = document.querySelector('html');
    let mode = document.querySelector('.header__mode h5');
    if (!root.classList.contains('theme-dark')) {
        root.classList.remove('theme-light');
        root.classList.add('theme-dark')
        mode.innerHTML = "dark mode<br/><b>available</b>"
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
navLinks.forEach((item) => {
    item.addEventListener('click', (e) => {
        let submenu = item.querySelector('.sub__menu-one');
        removeClassActiveSubmenu();
        submenu.classList.add('active-submenu');
        item.querySelector('i').classList.add('rotate');
        console.log(submenu);
    });
});

function removeClassActiveSubmenu() {
    document.querySelectorAll('.sub__menu-one').forEach(item => {
        item.classList.remove('active-submenu');
        document.querySelectorAll('.navbar__link i').forEach(icon => {
            icon.classList.remove('rotate')
        });
    })
}

document.addEventListener('mouseup', function (e) {
    var container = document.querySelector('.navbar');
    if (!container.contains(e.target)) {
        removeClassActiveSubmenu();
    }
});


//socials

let shareBtn = document.querySelector(".button");

shareBtn.addEventListener("click", () => {
    shareBtn.classList.toggle('show');
    if (document.querySelector(".social.twitter").classList.contains("clicked")) {
        document.querySelector(".social.twitter").classList.toggle("unclicked");
        document.querySelector(".social.facebook").classList.toggle("unclicked");
        document.querySelector(".social.discord").classList.toggle("unclicked");
        document.querySelector(".social.youtube").classList.toggle("unclicked");
    } else {
        document.querySelector(".social.twitter").classList.toggle("clicked");
        document.querySelector(".social.facebook").classList.toggle("clicked");
        document.querySelector(".social.discord").classList.toggle("clicked");
        document.querySelector(".social.youtube").classList.toggle("clicked");
    }
});

// details tabs

const tabs = document.querySelectorAll('.extra__title h4');

tabs.forEach(tab => {
    tab.addEventListener("click", () => {
        console.log(`.extra__tabs #${tab.id}`)
        RemoveShowTabClass();
        RemoveActiveTabClass();
        tab.classList.add('active')
        let subtab = document.querySelector(`.extra__tabs #${tab.id}`);
        subtab.classList.add('show-tab')
        console.log(subtab)
    })
})

function RemoveShowTabClass() {
    document.querySelectorAll('.extra__tabs > li').forEach(tab => {
        tab.classList.remove('show-tab')
    })
}
function RemoveActiveTabClass() {
    document.querySelectorAll('.extra__title h4').forEach(tab => {
        tab.classList.remove('active')
    })
}

/** scroll to top */
var scrollToTopBtn = document.querySelector(".scroll__btn");
var rootElement = document.documentElement;

function handleScroll() {
  var scrollTotal = rootElement.scrollHeight - rootElement.clientHeight;
  if (rootElement.scrollTop / scrollTotal > 0.01) {
    scrollToTopBtn.classList.add("scroll__btn-show");
  } else {
    scrollToTopBtn.classList.remove("scroll__btn-show");
  }
}

function scrollToTop() {
  rootElement.scrollTo({
    top: 0,
    behavior: "smooth"
  });
}
scrollToTopBtn.addEventListener("click", scrollToTop);
document.addEventListener("scroll", handleScroll);

