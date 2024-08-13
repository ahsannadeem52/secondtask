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
