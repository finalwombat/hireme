
// const mobile = document.createElement('div')
// mobile.className = 'nav-mobile'
// document.querySelector('.topnav').appendChild(mobile)
//
function hasClass(elem, className) {
  return new RegExp(' ' + className + ' ').test(' ' + elem.className + ' ')
}
//
// function toggleClass(elem, className) {
//   const newClass = ' '
// }


const navButton = document.querySelector('.menu-button');
console.log(navButton)

const navMenu = document.querySelector('.mobile-menu .nav');
console.log(navMenu)

navButton.addEventListener('click', function(event){
  navMenu.classList.toggle('active')
})
