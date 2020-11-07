let slider = document.querySelector('.slider');
let images = document.querySelector('.slider-img');


let sliderRect = slider.getBoundingClientRect();
let imagesRect = images.getBoundingClientRect();


let sliderWidth = sliderRect.width - 10;
let imagesTotalWidth = (imagesRect.width + 110) * 6 ;


let rateScroll = imagesTotalWidth/sliderWidth;
let mouseInitPosX = sliderRect.left;


window.addEventListener('mousemove', function (e){
    
    let mouseCurrentPosX = e.pageX;
    let widthToscroll = (slider.scrollWidth - sliderWidth);
    let scrollSlider = ((e.pageX - mouseInitPosX)/sliderWidth) * widthToscroll;
    
    if(mouseCurrentPosX > mouseInitPosX){
        slider.scrollTo(scrollSlider, 0);
    }   

})