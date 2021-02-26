/////////////////////////////////////////////////////#2 завд
function newYear (){
    var today = new Date();
    var nextDate = new Date("January 1, 2022");
    var msPerDay = 24*60*60*1000;
    var daysLeft = Math.round((nextDate.getTime() - today.getTime()) / msPerDay);
    var dayname = "";
    var ds = "" + daysLeft;
    var dd = parseInt(ds.substr(ds.length-1));
    if(daysLeft > 4 && daysLeft < 21) 
        dayname = " днів"
    else if(dd==1) 
        dayname=" днів"
     else if(dd == 2 || dd == 3 || dd == 4) 
        dayname=" днів"
      else 
        dayname=" днів"
 
    document.write ("До нового року залишилося <br>"
    +daysLeft+dayname+"!");

}

function button(){
    newYear();
}
///////////////////////////////////////////////////////////#3 завд
var gg = document.getElementById("gip"); 
var aa = document.getElementById("gip2");

function button2(){
var array1 = gg.value;
var array2 = aa.value;
k = Math.cos(array1);
c = array2 / k;
  if(c >= 0){
      document.getElementById("answer").innerHTML = "Гіпотенуза: " + c;
    }
  else{
      document.getElementById("answer").innerHTML = "Ошибка";
    }
}
//////////////////////////////////////////////////////#1 завд
var button = document.getElementById('but');
var in1 = document.getElementById('tex');

button.onclick = function change_register() {
    var tex = document.getElementById('tex').value; 
    var new_tex = "";
    var len = tex.length;
      for (var i = 0; i < len; i++) {
        if (tex[i] === tex[i].toLowerCase()) {
          new_tex += tex[i].toUpperCase();
        } else {
          new_tex += tex[i].toLowerCase();
        }
    }
    document.getElementById("tex").value = new_tex;
    console.log(new_tex);
}

