let btnMoblie = document.querySelector('.mobileNav')
btnMoblie.addEventListener('click', (e) => {
  let check = btnMoblie.classList.contains('active')
  let navMoble = document.querySelector('.menuMobile')
  if (check) {
    btnMoblie.classList.remove('active')
    navMoble.setAttribute('style', 'display:none;')
  } else {
    btnMoblie.classList.add('active')
    navMoble.setAttribute('style', 'display:block;')
  }
})
