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

function nextRound(){
    if (round===1){
        document.getElementById("choice1").innerHTML = "Four";
        document.getElementById("choice2").innerHTML = "Five";
        document.getElementById("choice3").innerHTML = "Six";
        document.getElementById("round").innerHTML = "Pick your second number!";
        round = 2;
    } else if (round===2){
        document.getElementById("choice1").innerHTML = "Seven";
        document.getElementById("choice2").innerHTML = "Eight";
        document.getElementById("choice3").innerHTML = "Nine";
        document.getElementById("round").innerHTML = "Pick your third number!";
        round = 3;
    } else if (round===3){
        document.getElementById("choice1").innerHTML = "Game";
        document.getElementById("choice2").innerHTML = "is";
        document.getElementById("choice3").innerHTML = "done!";
        document.getElementById("round").innerHTML = "Thats all folks";
        round = 0;
    }
}

function displayScore(){
    document.getElementById("tally").innerHTML = score;
    // document.getElementById("cat").src = "kitty.jpg";
    hide(document.getElementById("score"));
}


/*

$(document).ready(function(){
    $("p").click(function(){
        $(this).hide();
    });
});         

 */