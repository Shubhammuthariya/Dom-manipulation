console.log(document.h1);
document.title = 123
document.h2= "ram"
console.log(document.forms);

let temp = document.getElementById("header-title")
let temp2 = document.getElementById("main-header")
console.log(document.getElementById("main-header"))
temp2.style.borderBottom = 'solid 5px #000';
temp.style.color = "grey"
let c = document.getElementsByClassName("list-group-item")
c[2].style.backgroundColor = "green"
console.log(c[2])
for(let i=0; i<c.length; i++){
c[i].style.fontWeight = 'bold'}

