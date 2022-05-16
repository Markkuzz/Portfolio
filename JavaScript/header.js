


// HAMBURGER MENU
const hamburger=document.querySelector('.hamburger');
const navMenu=document.querySelector('nav');
const body=document.querySelector('body');

hamburger.addEventListener('click', ()=> {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
    body.classList.toggle('active');
})

document.querySelectorAll('.link').forEach(n=>n.addEventListener('click', ()=>{
    hamburger.classList.remove('active');
    navMenu.classList.remove('active');
    body.classList.remove('active');
}))