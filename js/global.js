const closeMenuButton = document.getElementById("closeMenu")
const burgerMenu = document.getElementById("burgerMenu")
const burgerButton = document.getElementById("burgerButton")

function openMenu() {
  burgerMenu.classList.add("open")
  burgerButton.classList.add("hidden")
}

function closeMenu() {
  burgerMenu.classList.remove("open")
  burgerButton.classList.remove("hidden")
}
