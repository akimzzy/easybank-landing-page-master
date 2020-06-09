// Mobile Nav Display
const btn = document.querySelector(".header__mobile");
const closebtn = document.querySelector(".header__close");
const mobileBG = document.querySelector(".mobile");
const mobileNav = document.querySelector(".mobile__nav");   

// function to toggle classes to display mobile nav and 
const displayNav = () => {   
    // Display mobile-nav Background
    mobileBG.classList.toggle("transUP");
    // Display mobile-nav
    mobileNav.classList.toggle("height");
    // Display close button
    closebtn.classList.toggle("display");
    // Hide humberger
    btn.classList.toggle("display");
}

// call DisplayNav onClick
btn.addEventListener("click", displayNav);

// GSAP Animation

/*
const tween = TweenLite.to(".home__heading", 1, {
    color: "green"
})
*/

const tl = new TimelineLite();

const home = document.querySelector(".home__btn");
 
tl.fromTo(".header__logo", 1, 
    {
        x: -200,
        ease: Power2.easeOut
    },
    {
        x: 0
    }
)
.fromTo(".home__heading", 1, 
    { 
        opacity: 0,
        y: 50,
        ease: Power2.easeOut
    },
    {
        opacity: 1,  
        y: 0
    }, "-= 0.5" 
)
.fromTo(".home__details", 1,
    { 
        opacity: 0,
        y: 50,
        ease: Power2.easeOut
    },
    {
        opacity: 1,  
        y: 0
    }, "-= 0.5"
)
.fromTo(".home__btn", 0.5,
    { 
        opacity: 0,
        x: 50,
        ease: Power2.easeOut
    },
    {
        opacity: 1,  
        x: 0 
    }, "-= 1" 
)