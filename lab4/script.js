var col = ["hotpink"]
function back () {
    document.querySelector("body").style.background = col[0];
}
setTimeout(back,3000);

let time = 0;
const countEl1 = document.getElementById("count1");
const countEl2 = document.getElementById("count2");
const countEl3 = document.getElementById("count3");
let interval;

function start(){
    interval = setInterval(updateCount, 1000);
}

function stop(){
    clearInterval(interval);
}

function updateCount(){
    let hours = Math.floor(time / 3600);
    let minutes = Math.floor(time / 60);
    let seconds = time % 60;
    hours = hours < 10 ? "0" + hours: hours;
    seconds = seconds < 10 ? "0" + seconds: seconds;
    minutes = minutes < 10 ? "0" + minutes: minutes;
    countEl1.innerHTML = hours + ":";
    countEl2.innerHTML = minutes + ":";
    countEl3.innerHTML = seconds;
    time++;
}

///////////////////////////////////////////////////////
function pressButtonOne(){
    document.getElementById("1").disabled = true;
    document.getElementById("2").disabled = false;
    start();
}
function pressButtonTwo(){
    document.getElementById("1").disabled = false;
    document.getElementById("2").disabled = true;
    stop();
}

function Button1(){
    pressButtonOne();

}
function Button2(){
    pressButtonTwo();
}
//////////////////////////////////////////////
function ff(){
    document.title = "Луцишин Назарій";
    alert("Луцишин Назарій");
}
function click(){
    setTimeout(ff,2000);
}
function press(){
    click();
}

///////////////////////////////////////////////////////
var img = ['01.jpg','2.jpg','3.jfif','fon.png'];
var tm;
var pos = 0;

function slide(){
    if(pos >= img.length)
    pos = 0;
    document.getElementById("TV").src = img[pos];
    pos++;
}

function mode(id){
    if (id == 1){
        tm = setInterval("slide()",1500);
    }
    else{
        clearInterval(tm);
    }
}
