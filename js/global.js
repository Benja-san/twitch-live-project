const closeMenuButton = document.getElementById("closeMenu")
const burgerMenu = document.getElementById("burgerMenu")
const burgerButton = document.getElementById("burgerButton")
const characterPopin = document.getElementById("characterPopin")

function displayCharacterPopin(index) {
  const nameTag = document.getElementById("characterName")
  const positionTag = document.getElementById("characterPosition")
  const pictureTag = document.getElementById("characterImage")
  const descriptionTag = document.getElementById("characterDescription")

  nameTag.innerText = CHARACTERS[index].name
  positionTag.innerText = CHARACTERS[index].position
  pictureTag.src = `media/pictures/characters/${CHARACTERS[index].picture}`
  descriptionTag.innerText = CHARACTERS[index].description

  characterPopin.classList.add("active")
}

function openMenu() {
  burgerMenu.classList.add("open")
  burgerButton.classList.add("hidden")
}

function closeMenu() {
  burgerMenu.classList.remove("open")
  burgerButton.classList.remove("hidden")
}

const mainTitleTag = document.getElementById("mainTitle")
mainTitleTag.innerHTML = mainTitle

const mainLogo = document.getElementById("mainLogo")
const imgTag = document.createElement("img")
imgTag.src = `media/pictures/logo/${logoPicture}`
imgTag.alt = mainTitle
imgTag.classList.add("mainLogoPic")
mainLogo.innerText = ""
mainLogo.appendChild(imgTag)

const charactersContainer = document.getElementById("charactersContainer")
CHARACTERS.map((character, index) => {
  const liTag = document.createElement("li")
  liTag.innerHTML = `<article onclick="displayCharacterPopin(${index})" class="characterCard" style="background-color:${globalColor}">
    <h2>${character.name}</h2>
    <img alt=${character.name} src="media/pictures/characters/${character.picture}" >
    </article>`
  charactersContainer.appendChild(liTag)
})

const backgroundPlayer = document.getElementById("backgroundPlayer")
backgroundPlayer.innerHTML = `<iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/${backgroundVideoContent}?si=2cGSM_ih6YadJ0U_&mute=1&autoplay=1&loop=1"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin"
        allowfullscreen
      ></iframe><div class="overlay"></div>`

console.log(CHARACTERS)
