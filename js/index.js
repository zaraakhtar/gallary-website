// RESPONSIVE NAVBAR CODE
const navSlide = () =>{
    const burger= document.querySelector('.burger');
    const nav= document.querySelector('.nav-list');
    const navlistitem=document.querySelectorAll('.nav-listitem');
    const navlink=document.querySelectorAll('.nav-link')
    
// this is the function to display the slider on click
burger.addEventListener('click',()=>{
    //toggle animation
    nav.classList.toggle('nav-active');
    //links animation
    navlistitem.forEach((link, index)=>{
        if(link.style.animation){
            link.style.animation='';
        }else{
            link.style.animation=`linksanimation .5s ease forwards ${index/7 +0.3}s`;
        }
        });
    //burger animation
    burger.classList.toggle('toggle');
    });
//event listner to close the slider when clicked on the link    
nav.addEventListener('click',()=>{
    nav.classList.toggle('nav-active')
    navlistitem.forEach((link, index)=>{
        if(link.style.animation){
            link.style.animation='';
        }else{
            link.style.animation=`linksanimation .5s ease forwards ${index/7 +0.3}s`;
        }
        });
        burger.classList.toggle('toggle');
});
}
navSlide();