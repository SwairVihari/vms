const carouselSlide = document.querySelector('.image-slide');
const carouselImages = document.querySelectorAll('.image-slide img');



const hamburger = document.querySelector('.hamburger');
const navlinks = document.querySelector('.navlinks');
const bar = document.querySelector('.bar');
const close = document.querySelector('.close');
let hidden = true



//Buttons
const prevBtn = document.querySelector('#prevBtn');
const nextBtn = document.querySelector('#nextBtn');

//Counter

let counter = 1;
const size = carouselImages[0].clientWidth;


const tl = gsap.timeline({defaults: {duration:0.75, ease:"Power3.out"}});


const heroAnimation = () => {

    tl.fromTo('.cta1', {x:"100%", opacity: 0},{x:0,opacity:1});
    tl.fromTo('.cta3', {x:"-100%", opacity: 0},{x:0,opacity:1},"<20%")
    tl.fromTo('.cta2', {y:"100%", opacity: 0},{y:0,opacity:1},"<20%")
    tl.fromTo('.cta4', {x:"100%", opacity: 0},{x:0,opacity:1}, "<20%");

}


carouselSlide.style.transform = 'translateX(' + (-size *counter) + 'px';


//Button Listeners

nextBtn.addEventListener('click', ()=>{
    // console.log("Next Button is Clicked counter" + counter)
    // heroAnimation();
    
    // if(counter>= carouselImages.length-1) return;
    // carouselSlide.style.transition = "transform 0.4s ease-in-out";
    // counter++;
    // carouselSlide.style.transform = 'translateX(' + (-size *counter) + 'px';

    console.log("next Button Is Clicked counter is " + counter )
    
    if(counter<=0) return;
    carouselSlide.style.transition = "transform 0.4s ease-in-out";
    counter--;
    carouselSlide.style.transform = 'translateX(' + (-size *counter) + 'px';
    heroAnimation();
});

prevBtn.addEventListener('click', ()=>{
    // console.log("Prev Button Is Clicked counter is " + counter )
    // heroAnimation();
    // if(counter<=0) return;
    // carouselSlide.style.transition = "transform 0.4s ease-in-out";
    // counter--;
    // carouselSlide.style.transform = 'translateX(' + (-size *counter) + 'px';  


    
    
    if(counter>= carouselImages.length-1) return;
    console.log("prev Button is Clicked counter" + counter)
    carouselSlide.style.transition = "transform 0.4s ease-in-out";
    counter++;
    carouselSlide.style.transform = 'translateX(' + (-size *counter) + 'px';
    heroAnimation();
});

//How to loop back to original images

carouselSlide.addEventListener('transitionend', ()=>{
    if(carouselImages[counter].id === 'lastClone'){
       
        carouselSlide.style.transition = "none";
        counter = carouselImages.length-2;
        carouselSlide.style.transform = 'translateX(' + (-size *counter) + 'px';

    }

    if(carouselImages[counter].id === 'firstClone'){
        carouselSlide.style.transition = "none";
        counter = carouselImages.length-counter;
        carouselSlide.style.transform = 'translateX(' + (-size *counter) + 'px';

    }
})


hamburger.addEventListener('click', ()=>{
    
    navlinks.classList.toggle("navlinks-show")
    console.log("Function is working")
    bar.classList.toggle('display-none')
    if(hidden){
        close.classList.toggle('display-none')
    }

    
})


