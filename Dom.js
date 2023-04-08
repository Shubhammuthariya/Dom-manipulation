// console.log(document.h1);
// document.h2= "ram"
// console.log(document.forms);

// let temp = document.getElementById("header-title")
// let temp2 = document.getElementById("main-header")
// console.log(document.getElementById("main-header"))
// temp2.style.borderBottom = 'solid 5px #000';
// temp.style.color = "grey"

//getElementsByClassName
// let c = document.getElementsByClassName("list-group-item")
// c[3].style.backgroundColor = "green"
// console.log(c)
// for(let i=0; i<c.length; i++){
// c[i].style.fontWeight = 'bold'}

// GetElementsbyTAgName
// let t = document.getElementsByTagName("li")
// for(let i=0; i<t.length; i++){
//     t[i].style.fontWeight = 'bold'
// }

// queryselector 
// let temp3 = document.querySelector(".list-group-item")
// for(let i=0; i<temp3.clientHeight; i++){
// temp3.style.color = "red"
// console.log(temp3);}

// let temp4 = document.querySelector(".list-group-item:last-child")
// temp4.style.olor = "teal"
// console.log(temp4);

// let temp5 = document.querySelector(".list-group-item:nth-child(2)")
// temp5.style.backgroundColor = "green"
// console.log(temp5);

// let temp6 = document.querySelector(".list-group-item:nth-child(3)")
// temp6.style.display = "none"
// console.log(temp6);


// queryselectorall
// let find = document.querySelectorAll('.title')
// for(let i=0; i<find.length; i++){
// find[i].textContent = "red"}
// console.log(find)

// let odd = document.querySelectorAll('li:nth-child(odd)')
// for(let i = 0; i<odd.length; i++){
//     odd[i].style.backgroundColor = 'grey';}
// console.log(odd)

// parentNode
//let list = document.querySelector('#items')
// console.log(list.parentNode);
// console.log(list.parentNode.parentNode.parentNode)

// //childNodes
// console.log(list.childNodes);

// // children
// console.log(list.children);

// first elementchild & lastelementchild
// list.firstElementChild.style.backgroundColor = "red"
// list.lastElementChild.style.backgroundColor = "red"
// list.lastElementChild.textContent = 'hello 4'

// SIBLING
// console.log(list.nextSibling)
// console.log(list.nextElementSibling)

// console.log(list.previousSibling)
// console.log(list.previousElementSibling)

//create a Div
let newDiv = document.createElement('div');

// add class
newDiv.className = 'hello'
// add id
newDiv.id = "text"
// add attribute
newDiv.setAttribute('title' , 'hello world')

// create textNode 
let text = document.createTextNode('hello world')
// append textNode to div
newDiv.appendChild(text);
//console.log(newDiv)

// push newDiv to Dom 
// let tatto = document.querySelector('header .container')
// let h1 = document.querySelector('header h1')
// tatto.insertBefore(newDiv , h1)

let tatto2 = document.querySelector('.list-group')
let h2 = document.querySelector('.list-group-item')
tatto2.insertBefore(newDiv , h2)

