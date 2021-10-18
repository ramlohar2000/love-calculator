// my javaScript code

var yourName = document.querySelector("#yourName");

var yourCrushName = document.querySelector("#yourCrushName");

var loveBetweenYou = Math.floor((Math.random()*100));

var showResult = document.querySelector("#showResult");
var resultText = document.querySelector("#resultText");

function printResult(){
    showResult.innerHTML = "<em>Love between </em>"+yourName.value+"<em> and </em>"+yourCrushName.value+" <em>is</em> "+loveBetweenYou+"%.";

    if(loveBetweenYou > 70){
        resultText.innerHTML = "💖 Amazing Couple. 💖";
    }else if(loveBetweenYou > 50){
        resultText.innerHTML = "💖 Each loves equal-equal. 💖";
    }else if(loveBetweenYou > 33){
        resultText.innerHTML = "You have passed the 💓 test.";
    }else{
        resultText.innerHTML = "Sorry!! You have failed in the 💔Love💔 test.";
    }
}

document.querySelector("#btn").addEventListener("click",printResult);