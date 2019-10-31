const meny = document.getElementById('meny')
const ikon = document.getElementById('menyikon')

let open = false

ikon.addEventListener('click', function(){
  if (open){
    meny.style.display = null
    open = false
  }
  else{
  meny.style.display = 'block'
  open = true
  }
})

// fjern hvis det klikkes uterfor menyen
window.onclick = function(e) {
  if (!e.target.closest('#menyikon')) {
    if (open){
      meny.style.display = null
      open = false
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
