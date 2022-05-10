console.log('This Kinda Works?')

const hamBurger=document.querySelector('#hamburger');
const navMenu=document.querySelector('#main-nav');

hamBurger.addEventListener('click', ()=> {
    hamBurger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

document.querySelectorAll('.nav-link').forEach(e=> e.addEventListener('click', ()=>{
    hamBurger.classList.remove('active');
    navMenu.classList.remove('active');

}))