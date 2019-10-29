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
