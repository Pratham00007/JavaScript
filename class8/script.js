let bt1=document.querySelector("#btn-1");

bt1.onclick=()=>{
    alert("Button Clicked")
}

let bd=document.querySelector("div");
bd.onmouseover=()=>{
    alert("you are in div");
}
let mode=document.querySelector("#bg-changer");
let togle="light";
mode.addEventListener("click",()=>{
    let body=document.querySelector("body");
    if(togle=="light"){
    body.style.backgroundColor=("black");
    togle="black"
    }else{
    body.style.backgroundColor=("white");
    togle="light"
        
    }
})