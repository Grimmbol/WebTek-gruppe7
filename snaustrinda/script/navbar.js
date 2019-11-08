
const meny = document.getElementById('meny')
const ikon = document.getElementById('menyikon')

// vis eller skjul meny når menyikon klikkes
ikon.addEventListener('click', function(){
  if (meny.style.display){
    meny.style.display = null
  }
  else{
  meny.style.display = 'block'
  }
})

// fjern hvis det klikkes uterfor menyen
window.onclick = function(e) {
  if (!e.target.closest('#menyikon')) {
    if (meny.style.display){
      meny.style.display = null
    }
  }
}

// Finner siden man er på, endrer stil og fjerner lenke
if (document.getElementById('historie')){
  meny.childNodes[0].classList.add('aktiv')
  meny.childNodes[0].innerText = meny.childNodes[0].firstChild.innerText
}
if (document.getElementById('gallery')){
  meny.childNodes[1].classList.add('aktiv')
  meny.childNodes[1].innerText = meny.childNodes[1].firstChild.innerText
}
if (document.getElementById('bliMed')){
  meny.childNodes[2].classList.add('aktiv')
  meny.childNodes[2].innerText = meny.childNodes[2].firstChild.innerText
}
