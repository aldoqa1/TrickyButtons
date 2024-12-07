const goodBtn = document.getElementById("good");
const cheapBtn = document.getElementById("cheap");
const fastBtn = document.getElementById("fast");

let good = false;
let cheap = false;
let fast = false;

goodBtn.addEventListener("click", (e)=>{ updatingState(e); });
fastBtn.addEventListener("click", (e)=>{ updatingState(e); });
cheapBtn.addEventListener("click", (e)=>{ updatingState(e); });

function updatingState(event){
    const target = event.target;
    const ball = target.querySelector(".ball");
    ball.classList.toggle("checked");

    if(target.id==="cheap")cheap=!cheap;
    if(target.id==="good")good=!good;
    if(target.id==="fast")fast=!fast;

    if(good && fast && cheap){
        if(target.id==="cheap"){
            good=!good;
            document.querySelector("#good .ball").classList.toggle("checked");
        };
        if(target.id==="good"){
            fast=!fast;
            document.querySelector("#fast .ball").classList.toggle("checked");
        };
        if(target.id==="fast"){
            cheap=!cheap;
            document.querySelector("#cheap .ball").classList.toggle("checked");
        };
    }
}