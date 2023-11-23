
let boxes = document.querySelectorAll(".box");

let turn ="X";

let isGameOver =false;

boxes.forEach(e =>{
        e.innerHTML=""
        e.addEventListener("click",()=>{
            if(!isGameOve && e.innerHTML ===""){
                e.innerHTML= turn;
                cheakWin();
                cheakDraw();
                changecturn();
                  
            }
        })
})

function changeturn(){
if(turn ==="X"){
    turn ="O";
    document.querySelector("bg").computedStyleMap.left ="85px";
}else{
    turn ="O";
    document.querySelector("bg").computedStyleMap.left ="0";

}
}
function cheakWin(){

}
function cheakDraw(){

}