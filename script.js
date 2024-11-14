const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuBtnIcon = document.querySelector("i");

menuBtn.addEventListener("click", (e)=>{
    navLinks.classList.toggle("open");

    const isopen = navLinks.classList.contains("open");
    menuBtnIcon.setAttribute("class", isopen ? "ri-close-line" : "ri-menu-line");
});


navLinks.addEventListener("click", (e)=>{
    navLinks.classList.remove("open");
    menuBtnIcon.setAttribute("class", "ri-menu-lines");
});

const scrollRevealoption = {
    distance: "50px",
    origin: "bottom",
    duration: 1000,
};



ScrollReveal().reveal(".header__container h1", {
    ...scrollRevealoption,
});

ScrollReveal().reveal(".header__container p",{
    ...scrollRevealoption,
    delay: 500,
});
ScrollReveal().reveal(".header__container form",{
    ...scrollRevealoption,
    delay: 1000,
});

ScrollReveal().reveal(".feature__card", {
    duration: 1000,
    interval: 500,
});


// destination
ScrollReveal().reveal(".destination__card", {
    duration: 1000,
    interval: 500,
});

//pakage js
ScrollReveal().reveal(".pakage__card", {
    ...scrollRevealoption,
   interval: 500,
});


const swiper = new Swiper(".swiper", {
    slidesPerView: "auto",
    spaceBetween: 20,
    pagination: {
        el:".swiper-pagination",
    },
});


