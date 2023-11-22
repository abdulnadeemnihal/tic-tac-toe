
let boxes = document.querySelectorAll(".box");

let turn ="X";

let gameActive =false;

boxes.forEach(e =>{
        e.innerHTML=""
        e.addEventListener("click",()=>{
            if(!gameActive && e.innerHTML ===""){
                e.innerHTML= turn;
                cheakWin();
                cheakDraw();
                changecurrentPlayer();
                  
            }
        })
})

function changeturn(){

}
function cheakWin(){

}
function cheakDraw(){

}