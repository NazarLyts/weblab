///////////////////////////////////////////////////////////////#1
var InputIn1 = document.querySelector('.input-in1');
var InputIn2 = document.querySelector('.input-in2');
var button = document.querySelector('button');
var p = document.getElementById('demo');

button.onclick = function () {
    console.log(InputIn1);
    var array1 = (InputIn1.value.split(' ')).map(x => parseInt(x));
    var array2 = (InputIn2.value.split(' ')).map(x => parseInt(x));
    var cache;
    console.log(array1);
    console.log(array2);

    single = true;
    for(let i = 0; i < array1.length; i++){
        cache = array1[i];
        for(let j = 0; j < array2.length; ++j){
            if(cache == array2[j]){
                single = false;
                console.log("Так:" + array1[i]); 
                p.innerHTML = 'YES';
            }
        } 
        
    }
    if(single){
        console.log("Немає");
        p.innerHTML = 'NO';
    }
       
}
//////////////////////////////////////////////////////////////////#16
function Form2(value){
    document.write("<input type='text' value='Enter'><p>")
    for (var i = 1; i <= value; i++){
        document.write(i);
        document.write("<p>");
    }
}
///////////////////////////////////////////////////////////////////#12
let mas;
let ind;

function Form1(value){
    mas = value.split(',');
    ind = mas.length;
    if(ind % 2 === 0){
        ind /= 2;
    }
    else{
        ind /= 2;
        ind -= 0.5;
    }
}

function oneClick1(){
    if(isFinite(mas[ind])){
        let num = mas[ind];
        let sum = 0;
        while(num != 0){
          sum = sum + num % 10;
          num = Math.floor(num / 10);
          console.log(num);
        }
        alert(sum);
    }
    else{
      alert(mas[ind]);
    }
}
///////////////////////////////////////////////////////////////////////#20
var p2 = document.getElementById('arr5');
var InputIn3 = document.querySelector('.input-in3');
var InputIn4 = document.querySelector('.input-in4');

function oneClick(){
    var array3 = (InputIn3.value.split(',')).map(x => parseInt(x));
    var array4 = (InputIn4.value.split(',')).map(x => parseInt(x));
    var arr5 = [];
    console.log(array3);
    console.log(array4);
    var i = 0;
    var j = 0;

    while(i < array3.length && j <array4.length){
        while(array3[i] < array4[j]){
            ++i;
        }
        while(array3[i] > array4[j]){
            ++j;
        }
        if(array3[i] == array4[j]){
            arr5.push(array3[i]);
            p2.innerHTML = '[' + arr5 + ']';
            ++i;
            ++j;
        }
    }
}
////////////////////////////////////////////////////////////////////#11
var InputIn3 = document.getElementById('input-in4');
var button1 = document.getElementById('button1');
var array6 = [];

var cells = document.getElementsByClassName('cell');

button1.onclick = (ev) => {
    number();
    ev.preventDefault();
}

function number(){
    array6 = InputIn3.value.split(',');
    array6 = array6.filter((v) => v == +v);
    if (array6.length > cells.length) {
        alert("Вийшло за межі комірок!!")
    } else {
        for (let i = 0; i < array6.length; i++) {
            cells[i].children[0].textContent= array6[i];
            cells[i].children[1].textContent=factorial(array6[i]);
        }
    }
}
function factorial(num) {
    if (num === 0 || num === 1) {
        return 1;
    }
    return num * factorial(num - 1);
}