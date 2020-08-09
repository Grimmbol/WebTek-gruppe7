const modal = document.getElementById("modal");
const modalImages = document.getElementsByClassName("modal-image");
const len = modalImages.length;
const gallery = document.getElementById("gallery");
const header = document.getElementById("header");
const galleryHeadline = document.getElementById("gallery-headline");
const footer = document.getElementById("footer");

var index;


function closeModal(){
    modal.style.display = "none";
    gallery.style.filter = "none";
    header.style.filter = "none";
    galleryHeadline.style.filter = "none";
    footer.style.filter = "none";
}

function openModal(n){
    modal.style.display = "block";
    gallery.style.filter = "blur(20px)";
    header.style.filter = "blur(20px)";
    galleryHeadline.style.filter = "blur(20px)";
    footer.style.filter = "blur(20px)";
    index = n;
}

function nextSlide(n){
    index += n;

    if(index < 0){
        index = len - 1;
    }

    if(index > (len - 1)){
        index = 0;
    }

    showSlide(index);
}


function showSlide(n){

    for(i = 0; i < len; i++){
        modalImages[i].style.display = "none";
    }

    modalImages[n].style.display = "block";
}

// bytt bilde med piltaster
// lukk med escape
document.addEventListener('keydown', function(event){
  if (event.code == 'ArrowRight'){nextSlide(1)}
  else if (event.code == 'ArrowLeft'){nextSlide(-1)}
  else if (event.code == 'Escape'){closeModal()}
})

//forstørr bilde med Enter
//virker kun på første bilde
document.querySelector('.image').addEventListener('keydown', function(event){
  if (event.code == 'Enter')
  {openModal(1)}
})
