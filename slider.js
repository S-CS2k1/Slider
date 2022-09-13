const slider = document.querySelector(".slider");
const thrid = document.querySelector(".three");
const second = document.querySelector(".two");
const first = document.querySelector(".one");
const left = document.querySelector(".button--left");
const right = document.querySelector(".button--right");
let flag = 1;

right.addEventListener("click",()=>{
    if(flag === 1){
        thrid.style.transform = "translateX(100vw)";
        flag = 2;
    }
    else if(flag === 2){
        second.style.transform = "translateX(100vw)";
        flag = 3;
    }
    
});
left.addEventListener("click",()=>{
    if(flag === 3){
        second.style.transform = "translateX(0vw)";
        flag = 2;
    }else if(flag === 2){
        thrid.style.transform = "translateX(0vw)";
        flag = 1;
    }
    
});