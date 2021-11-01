hamburger = document.getElementById('burger')
 navbar = document.getElementById('navbarid')
navmenu = document.getElementById('navlist')

hamburger.addEventListener('click', () => {
    navbar.classList.toggle('h-nav'),
    navmenu.classList.toggle('v-class');
})