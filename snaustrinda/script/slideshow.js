let slideIndex = 1;
showSlides(slideIndex);

// Next/previous
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
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
}

function scrollDown(target, duration) {
  var target = document.querySelector(target);
  var targetPosition = target.getBoundingClientRect().top;
  var startPosition = window.pageYOffset;
  var distance = targetPosition;
  var startTime = null;

  function animation(currentTime) {
    if(startTime == null) startTime = currentTime;
    var timeElapsed = currentTime - startTime;
    var run = ease(timeElapsed, startPosition, distance, duration);
    window.scrollTo(0, run);
    if(timeElapsed < duration) requestAnimationFrame(animation);
  }
  function ease(t, b, c, d) {
    t /= d / 2;
    if(t < 1) return c / 2 * t * t + b;
    t--;
    return -c / 2 * (t*(t - 2) - 1) + b;
  }

  requestAnimationFrame(animation);
}
