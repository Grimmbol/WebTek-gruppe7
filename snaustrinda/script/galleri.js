const modal = document.getElementById("modal");
const modalImages = document.getElementsByClassName("modal-image");
const len = modalImages.length;
const gallery = document.getElementById("gallery");

var index;


function closeModal(){
    modal.style.display = "none";
    gallery.style.filter = "none";
}

function openModal(n){
    modal.style.display = "block";
    gallery.style.filter = "blur(20px)";
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