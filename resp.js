burger=document.querySelector('.burger')
navbar=document.querySelector('.navbar')
navList=document.querySelector('.nav-list')
right=document.querySelector('.right')

burger.addEventListener('click',()=>{
    navbar.classList.toggle('h-nav');
    navList.classList.toggle('v-class');
   right.classList.toggle('v-class');
})