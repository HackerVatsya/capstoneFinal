const hamburgerBtn = document.querySelector('.hamburger');
const navList = document.querySelector('.nav-bar ul');

hamburgerBtn.addEventListener('click', () => {
    navList.classList.toggle('active');
    
    // console.log("Menu toggled!"); 
});