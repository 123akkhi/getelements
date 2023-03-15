var items = document.getElementsByClassName(li);
console.log(li);
console.log(li[2]);
li[2].textContent = "hello 2";
li[2].getElementsByClassName.fontweight = "bold";
li[2].getElementsByClassName.backgroundColor = "green";

for(var i=0; i<li.length; i++)
{
    li[i].getElementsByClassName.backgroundColor = 'green';
}