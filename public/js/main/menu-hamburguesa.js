
window.addEventListener("load", function() {

    let nav = document.querySelector(".header-nav na ul")
    let menu = document.querySelector(".menu-hamburguesa")

   
    menu.addEventListener("click",function(){
        nav.classList.toggle("nav-ventana-modal")
    })
})