let slideIndex = 1;
showSlides(slideIndex);
// next/previous control
function plusSlides(n) {
  showSlides((slideIndex += n));
}

// thumbnail image control
function currentSlide(n) {
  showSlides((slide.slideIndex = n));
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("myslides");

  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }

  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  slides[slideIndex - 1].style.display = "block";
}
