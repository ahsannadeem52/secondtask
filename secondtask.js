var slides = document.getElementById('discover');
var pre = document.getElementById('pre');
var next = document.getElementById('Next'); 
var totalimage = 13 ;
var currentitem = 0;
function upDateslider(){
    slides.style.transform = `translateX(-${currentitem * 100}%)`;
}

next.addEventListener('click', () => {
    console.log("Next button clicked");
    if (currentitem === totalimage) {
        currentitem = 0;
    } else {
        currentitem++;
    }
    upDateslider();
});

pre.addEventListener('click', () => {
    console.log("Previous button clicked");
    if (currentitem === 0) {
        currentitem = totalimage - 1;
    } else {
        currentitem--;
    }
    upDateslider();
});

var imageSlide = document.getElementById('deals');
var Pre2 = document.getElementById('pre2');
var next2 = document.getElementById('Next2'); 
var totalimage = 2;
var currentitem = 0;
function updateSlider(){
    imageSlide.style.transform = `translateX(-${currentitem * 100}%)`;
}

next2.addEventListener('click', () => {
    console.log("Next button clicked");
    if (currentitem === totalimage - 1) {
        currentitem = 0;
    } else {
        currentitem++;
    }
    updateSlider();
});

Pre2.addEventListener('click', () => {
    console.log("Previous button clicked");
    if (currentitem === 0) {
        currentitem = totalimage - 1;
    } else {
        currentitem--;
    }
    updateSlider();
});
