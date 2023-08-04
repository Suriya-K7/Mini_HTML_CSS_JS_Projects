const slideritems=document.querySelectorAll('.slider-items');
const prevBtn=document.querySelector('.btnprev');
const nxtBtn=document.querySelector('.btnnxt');
let sliderPosition=0;
let totalSlide=slideritems.length;


nxtBtn.addEventListener('click',()=>{
    nxtSlide();
});

prevBtn.addEventListener('click',()=>{
    prevSlide();
});

function updateSlide(){
    slideritems.forEach(slide=>{
        slide.classList.remove('active');
        slide.classList.add('hidden');
    });
    slideritems[sliderPosition].classList.add('active');
    CreatedDots.forEach(dot=>{
        dot.classList.remove('active');
    });
    CreatedDots[sliderPosition].classList.add('active');
};
function nxtSlide(){
    if(sliderPosition==totalSlide-1){
        sliderPosition=0;
    }else{
        sliderPosition++;
    };
    updateSlide();
};
function prevSlide(){
    if(sliderPosition==0){
        sliderPosition=totalSlide-1;
    }else{
        sliderPosition--;
    };
    updateSlide();
};
const sliderDot=document.querySelector('.slider-dots');
    slideritems.forEach(slide=>{
        const dots=document.createElement('div');
        dots.classList.add('dot');
    sliderDot.appendChild(dots);
});

const CreatedDots=document.querySelectorAll('.dot');
CreatedDots[sliderPosition].classList.add('active');

CreatedDots.forEach((dot,index)=>{
    dot.addEventListener('click',()=>{
        sliderPosition=index;
        updateSlide();
    })
});

setInterval(()=>{
    if(sliderPosition==totalSlide-1){
        sliderPosition=0;
    }else{
        sliderPosition++;
    };
    updateSlide();
},5000)



