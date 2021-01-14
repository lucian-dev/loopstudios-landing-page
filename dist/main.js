// MOBILE MENU
const showMenu = (toogleId) => {
  const toggle = document.getElementById(toogleId);
  const body = document.body;

  if (toggle && body ) {
    toggle.addEventListener('click', () => {
      body.classList.toggle('show-menu');
    })
  }
}
showMenu('nav-toggle');

// REMOVE "SHOW-MENU" 
const navLink = document.querySelectorAll('.header__link');

function linkAction() {
  const body = document.body;

  body.classList.remove('show-menu');

}
navLink.forEach(n => n.addEventListener('click', linkAction));

