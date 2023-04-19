var title=document.getElementById("main-header");
title.style.borderBottom='solid 5px black';
var item=document.getElementById("add");
item.style.fontWeight='bold';
item.style.color="green";
var a=document.getElementsByClassName('list-group-item');
a[2].style.backgroundColor='green';
for(var i=0;i<a.length;i++)
{
    a[i].style.fontWeight='bold';
}
var b=document.getElementsByTagName("li");
b[4].textContent='Fifth item';

// var c=document.querySelector('.list-group-item:nth-child(2)');
// c.style.backgroundColor="green";

// var d=document.querySelector('.list-group-item:nth-child(3)');
// d.style.display='none';

var e=document.querySelectorAll('.list-group-item');
e[1].style.color="green";
for(let i=0;i<e.length;i=i+2)
{
e[i].style.backgroundColor="green";
}
//Create a div
var newdiv= document.createElement('div')
//create text node
var newdivtext=document.createTextNode('Hello world');
//add test to div
newdiv.appendChild(newdivtext);
var container= document.querySelector('header .container')
var h1= document.querySelector('header h1')
container.insertBefore(newdiv,h1);


var list=document.createElement('li')
console.log(list)
//create text node
var listtext=document.createTextNode('hello world');
list.appendChild(listtext);

var insert= document.querySelector('#items li:first-child');
insert.before(list);