function domen(){
    var reg = document.getElementById('t1').value;
    var new_str = reg.replace('http://','');
    document.getElementById('p1').innerHTML = new_str;
}

function domen2(){
    var reg = /\s/g;
    var reg1 = document.getElementById('t2').value;
    var new_str = reg1.replace(reg,'!');m,  
    document.getElementById('a2').innerHTML = new_str;
}

function domen3(){
    var reg = /aaa$/g;
    var array1 = document.getElementById('t3').value; 
    var new_str = array1.replace(reg,'!');
    document.getElementById('a3').innerHTML = new_str;
}

function domen4(){
    var reg = /a\\a/g;
    var str = document.getElementById('t4').value;
    var new_str = str.replace(reg, '!');
    document.getElementById('a4').innerHTML= new_str;
  }

function domen5(){
    var reg = /[0-9A-Fa-f]{6}/g;
    var str = document.getElementById('t5').value;
    if(reg.test(str)) {
        alert('GOOD');
    } 
    else {
        alert('BAD:(');
    }
     reg.str = 0;
}