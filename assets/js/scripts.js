 
var hamburger = document.querySelector('.hamburger');
var body =document.querySelector('body');

// Add class on timeout to body. 

window.addEventListener('load', function() {
  setTimeout(function() {
    body.classList.add('loaded');
  }, 1000);
})

// Adds class menu-active class to body when hamburger is clicked.

hamburger.addEventListener('click', function() {

  body.classList.toggle('menu-active');

});
