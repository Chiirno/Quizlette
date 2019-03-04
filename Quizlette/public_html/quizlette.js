/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var x = 0;

var round = 1;
var score = 0;



function addFirst(){
    if (round===1){score += 1;}
    if (round===2){score += 4;}
    if (round===3){score += 7;}
}

function addSecond(){
    if (round===1){score += 2;}
    if (round===2){score += 5;}
    if (round===3){score += 8;}
}

function addThird(){
    if (round===1){score += 3;}
    if (round===2){score += 6;}
    if (round===3){score += 9;}
}

function fadeOut(){
    
    sleep();
    setTimeout(nextRound, 700);
    setTimeout(awaken, 700);
    
}

function sleep(){
    var leftBut = document.getElementById("buttonLeft");
    var midBut = document.getElementById("buttonMid");
    var rightBut = document.getElementById("buttonRight");
        
    fade(leftBut);
    fade(midBut);
    fade(rightBut);
}
function awaken(){
    var leftBut = document.getElementById("buttonLeft");
    var midBut = document.getElementById("buttonMid");
    var rightBut = document.getElementById("buttonRight");
        
    fadeIn(leftBut);
    fadeIn(midBut);
    fadeIn(rightBut);
}

function nextRound(){
    
    var leftBut = document.getElementById("buttonLeft");
    var midBut = document.getElementById("buttonMid");
    var rightBut = document.getElementById("buttonRight");

    if (round===1){
        leftBut.innerHTML = "Four";
        midBut.innerHTML = "Five";
        rightBut.innerHTML = "Six";
        document.getElementById("round").innerHTML = "Pick your second number!";
        round = 2;
    } else if (round===2){
        leftBut.innerHTML = "Seven";
        midBut.innerHTML = "Eight";
        rightBut.innerHTML = "Nine";
        document.getElementById("round").innerHTML = "Pick your third number!";
        round = 3;
    } else if (round===3){
        leftBut.innerHTML = "Game";
        midBut.innerHTML = "is";
        rightBut.innerHTML = "done!";
        document.getElementById("round").innerHTML = "Thats all folks";
        round = 0;
    }
}



function newRound(){
    document.getElementById("buttonLeft").innerHTML = "";
    document.getElementById("buttonMiddle").innerHTML = "";
    document.getElementById("ButtonRight").innerHTML = "";
}


function displayScore(){
    document.getElementById("tally").innerHTML = score;
    // document.getElementById("cat").src = "kitty.jpg";
    hide(document.getElementById("score"));
}

function imageReload() {
    document.getElementById("kitty").innerHTML = location.reload();
}


/*

$(document).ready(function(){
    $("p").click(function(){
        $(this).hide();
    });
});         

 */



function fade(element) {
    var op = 1;  // initial opacity
    var timer = setInterval(function () {
        if (op <= 0.01){
            clearInterval(timer);
            element.style.visibility = 'hidden';
        }
        element.style.opacity = op;
        element.style.filter = 'alpha(opacity=' + op * 1 + ")";
        op -= 0.5;
    }, 10);
}

function fadeIn(element) {
    var op = 0.1;  // initial opacity
    element.style.visibility = 'visible';
    var timer = setInterval(function () {
        if (op >= 1){
            clearInterval(timer);
        }
        element.style.opacity = op;
        element.style.filter = 'alpha(opacity=' + op * 100 + ")";
        op += op * 0.1;
    }, 10);
}