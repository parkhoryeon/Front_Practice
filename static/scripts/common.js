console.log('common.js Connected')

const side_menu = document.querySelector('#header aside')
const side_close = document.querySelector('.top_top a img')
const hamburger = document.querySelector('#header .inner .left li:first-child a img')

hamburger.addEventListener('click', function(event) {
    event.preventDefault();
    side_menu.classList.add('show')
})

side_close.addEventListener('click', function(event) {
    event.preventDefault();
    side_menu.classList.remove('show')
})