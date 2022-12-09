const menu = document.getElementById("menu")

export const toggleMobileMenu = () => {
  if (menu.classList.contains('hidden')) {
    menu.classList.remove('hidden')
  } else {
    menu.classList.add('hidden')
  }
}
