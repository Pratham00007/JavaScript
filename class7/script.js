let para=document.getElementById("h2-para")
console.dir(para)

let li=document.querySelectorAll("li");
console.dir(li[1].innerText="Gidra")

let before=document.getElementById("h3-tag")
console.dir(before.innerText=before.innerText+" from students")

let div_box=document.getElementsByClassName("box")
for(let j=0;j<div_box.length;j++){
    console.dir(div_box[j].innerText=div_box[j].innerText+j)
}