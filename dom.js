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

