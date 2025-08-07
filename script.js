//scroll change navbar
window.addEventListener("scroll",()=>{
    const navbar = document.getElementById("navbar");
    navbar.classList.toogle("scrolled",window.scrollY > 50);

});

//Hamburger menu toogle 
document.getElementById("hamburger").addEventListener("click",()=>{
    document.getElementById("nav-links").classList.toggle("show");
});

//ScrollReveal Animations
ScrollReveal().reveal('.hero-text', {delay: 200, duration: 800, distance: '50px', origin: 'bottom' });
ScrollReveal().reveal('.content', {delay: 200, duration: 800, distance: '50px', origin: 'bottom' });
