const colorbutton=document.querySelector("button");
const body=document.body;
const currentcolor=document.querySelector(".current-color")
const h1color=document.querySelector(".h1-tag");

function randomColorGenerator(){
    const red=Math.floor(Math.random()*255);
    const green=Math.floor(Math.random()*255);
    const blue=Math.floor(Math.random()*255);
    const randomcolor=`rgb(${red},${green},${blue})`;
    return randomcolor;
;}
console.log(randomColorGenerator());
colorbutton.addEventListener("click",(event)=>{
    const randomcolor=randomColorGenerator();
    currentcolor.textContent=randomcolor;
    body.style.background=randomcolor;
    console.log(randomcolor);
})
