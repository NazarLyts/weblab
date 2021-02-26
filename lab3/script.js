let a = "Screen-colorDepth: " + screen.colorDepth;
alert(a);

let h = "History-length: " + history.length;
alert(h);

let n = "Navigator: " + navigator.appName + " " + navigator.appVersion;
alert(n);


var myWindow;
function openWindow(){
    myWindow = window.open("https://lpnu.ua/","","width=500px,height=200px");
}
function closeWindow(){
    myWindow.close();
}


if(confirm("Надрукувати вміст вікна ?")){
    window.print();
}
else{
    alert("Друк відмінено!");
}

let b = prompt('Напишіть назву тегу:');
let tag = document.getElementsByTagName(b)[0];

if(tag){
    alert(tag.innerHTML);
}
else{
    alert("Цього тегу немає!!")
}