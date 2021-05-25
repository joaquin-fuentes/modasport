
window.addEventListener("load", function() {

    let nav = document.querySelector(".enlaces-menu")
    let menu = document.querySelector(".menu-hamburguesa")

   
    menu.addEventListener("click",function(){
        nav.classList.toggle("activado")
    })
})