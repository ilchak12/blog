let mobileMenu = document.querySelector(".menu-mobile");
let mainMenu = document.querySelector(".menu-nav");

mobileMenu.addEventListener("click", function() {
    mobileMenu.classList.toggle("active-menu");
    if(mobileMenu.classList.contains("active-menu")) {
        mainMenu.classList.add("active-menu");
    } else {
        mainMenu.classList.remove("active-menu");
    }
})

$(".slider").slick({
    autoplay: true,
    autoplaySpeed: 10000,
    arrows: false
});