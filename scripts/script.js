
/*Slider-header*/
window.onload=function(){
var swiper = new Swiper(".books-slider", {
 loop:true,
 centeredSlides:true,
 autoplay:{
    delay:950,
    disableOnInteraction:false,
 },
  breakpoints: {
    0:{
      slidesPerView: 1,
      spaceBetween:10,
    },
    768: {
      slidesPerView: 2,
      spaceBetween:20,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween:30,
    },
  },
});
}

/*Slider-blog*/
let slideIndex = 1;
showSlides(slideIndex);


function plusSlides(n) {
  showSlides(slideIndex += n);
}


function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex-1].style.display = "block";
 
} 


