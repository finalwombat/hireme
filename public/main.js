

const navButton = document.querySelector('.menu-button');
console.log(navButton)

const navMenu = document.querySelector('.mobile-menu .nav');
console.log(navMenu)

navButton.addEventListener('click', function(event){
  navMenu.classList.toggle('active')
})

navMenu.addEventListener('click', function(event){
  navMenu.classList.toggle('active')
})
