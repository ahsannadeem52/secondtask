var slides = document.getElementById('discover');
var pre = document.getElementById('pre');
var next = document.getElementById('Next'); 
var totalimage = 2;
var currentitem = 0;
function upDateslider(){
    slides.style.transform = `translateX(-${currentitem * 100}%)`;
}

next.addEventListener('click', () => {
    console.log("Next button clicked");
    if (currentitem === totalimage - 1) {
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
var imageslide = document.getElementById('trend');
var pre1 = document.getElementById('pre1');
var next1 = document.getElementById('Next1'); 
var totalimage = 2;
var currentitem = 0;
function upDateSlider(){
    imageslide.style.transform = `translateX(-${currentitem * 100}%)`;
}

next1.addEventListener('click', () => {
    console.log("Next button clicked");
    if (currentitem === totalimage - 1) {
        currentitem = 0;
    } else {
        currentitem++;
    }
    upDateSlider();
});

pre1.addEventListener('click', () => {
    console.log("Previous button clicked");
    if (currentitem === 0) {
        currentitem = totalimage - 1;
    } else {
        currentitem--;
    }
    upDateSlider();
});
var imageSlide = document.getElementById('deals');
var pre2 = document.getElementById('pre2');
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

pre2.addEventListener('click', () => {
    console.log("Previous button clicked");
    if (currentitem === 0) {
        currentitem = totalimage - 1;
    } else {
        currentitem--;
    }
    updateSlider();
});
