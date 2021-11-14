hamburger = document.getElementById('burger')
 navbar = document.getElementById('navbarid')
navmenu = document.getElementById('navlist')

hamburger.addEventListener('click', () => {
    navbar.classList.toggle('h-nav'),
    navmenu.classList.toggle('v-class');
})

function onChange() {
    const password = document.querySelector('input[name=password]');
    const confirm = document.querySelector('input[name=confirmpassword]');
    if (confirm.value === password.value) {
      confirm.setCustomValidity('');
    } else {
      confirm.setCustomValidity('Passwords do not match!!');
    }
  }