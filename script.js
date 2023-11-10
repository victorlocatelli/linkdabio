function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  //pegar a tag img
  const img = document.querySelector("#profile img")

  //substituir a img
  if (html.classList.contains("light")) {
    //se tiver light mode, adiciona a img light
    img.setAttribute("src", "./assets/my-avatar-light.jpg")
  } else {
    //se tiver sem ligh mode, manter a img normal
    img.setAttribute("src", "./assets/my-avatar.png")
  }
}
