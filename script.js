let box = document.getElementById("box")
box.style.display = 'none'
let downarrow = document.getElementById("down-arrow")
downarrow.addEventListener("click" , () => {
  if(box.style.display === 'none'){
    box.style.display = 'block'
  }
  else{
    box.style.display = 'none'
  }
} )
