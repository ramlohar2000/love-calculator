// my javaScript code

var yourName = document.querySelector("#yourName");

var yourCrushName = document.querySelector("#yourCrushName");

var loveBetweenYou = Math.floor((Math.random()*100));

var showResult = document.querySelector("#showResult");
var resultText = document.querySelector("#resultText");

function printResult(){
    showResult.innerHTML = "<em>Love between </em>"+yourName.value+"<em> and </em>"+yourCrushName.value+" <em>is</em> "+loveBetweenYou+"%.";

    if(loveBetweenYou > 70){
        resultText.innerHTML = "ð Amazing Couple. ð";
    }else if(loveBetweenYou > 50){
        resultText.innerHTML = "ð Each loves equal-equal. ð";
    }else if(loveBetweenYou > 33){
        resultText.innerHTML = "You have passed the ð test.";
    }else{
        resultText.innerHTML = "Sorry!! You have failed in the ðLoveð test.";
    }
}

document.querySelector("#btn").addEventListener("click",printResult);