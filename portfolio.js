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
    document.body.classList.toggle("nightmode")

    let theme = document.querySelector(".light")
    if (document.body.classList.contains(".darkmode")) {
        theme.src = "/sun.png";
    }
    else {
        theme.src = "/moon.png";
    }
}