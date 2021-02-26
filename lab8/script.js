var ky = document.getElementById('ky');

function showKeyPress(event){
    ky.innerHTML = ("Символ: " + String.fromCharCode(event.which));
} 


var change = document.querySelector(".change")

change.addEventListener("mouseout",{
    handleEvent(event){
        change.style = "color: #0000FF; font-Size: 12pt";
        change.offsetParent.style = "background: white";
    }
});

change.addEventListener("mouseover",{
    handleEvent(event){
        change.style = "color: red; font-Size: 18pt";
        change.offsetParent.style = "background: #FFFF00";
    }
});

