function openbox() {
    const sidemenu = document.querySelector('.sidemenu')
    sidemenu.style.display = 'flex'
    sidemenu.style.left = 0
}
function hidebox() {
    const sidemenu = document.querySelector('.sidemenu')
    sidemenu.style.display = 'none'
    sidemenu.style.left = -270
}
function lighter() {
    document.body.classList.toggle("dayMode")
}
let preload = document.getElementById("preload")
window.addEventListener("load", function () {
    preload.style.display = 'none'
})
let myName = document.querySelector('.myName')
if (this.innerWidth <= 755) {
    myName.textContent = 'NARENDRA MORTHA'
}