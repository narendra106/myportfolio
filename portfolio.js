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
function showresume() {
    const resume = document.querySelector('.resume')
    resume.style.display = 'flex'
    const sidemenu = document.querySelector('.sidemenu')
    sidemenu.style.display = 'none'
}
function hideresume() {
    const resume = document.querySelector('.resume')
    resume.style.display = 'none'
}