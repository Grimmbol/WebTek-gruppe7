let slideIndex = 1;
showSlides(slideIndex);

// neste/forrige
function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    let credit = document.getElementById("akkreditering");
    console.log(credit);
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
    // Hvem må akkrediteres for bildet?
    // Fotogjengen
    if(slides[slideIndex-1].className.split(" ").includes("fotogjengen")) {
	credit.textContent = "Foto: foto.samfundet.no";
    }
    // Snaustrinda
    else {
	credit.textContent = "Foto: Snaustrinda";
    }
	
}   

// bytt bilde med piltaster
document.addEventListener('keydown', function(event){
  if (event.code == 'ArrowRight'){plusSlides(1)}
  else if (event.code == 'ArrowLeft'){plusSlides(-1)}
})
