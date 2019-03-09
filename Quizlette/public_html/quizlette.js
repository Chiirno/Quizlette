/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var x = 0;
var round = 1;
var score = 0;
var curRound = "";
var answerSheet = [];


function fadeOut() {
    sleep();

    var leftBut = document.getElementById("buttonLeft");
    var midBut = document.getElementById("buttonMid");
    var rightBut = document.getElementById("buttonRight");

    if (round === 5) {
        document.getElementById("round").innerHTML = "that's all folks" + answerSheet;
        leftBut.style.visibility = "hidden";
        midBut.style.visibility = "hidden";
        rightBut.style.visibility = "hidden";
    } else {
        setTimeout(nextQuestion, 700);
    }
    setTimeout(awaken, 700);
    round++;
}

function sleep() {
    fade(document.getElementById("Qtip"));
}
function awaken() {
    fadeIn(document.getElementById("Qtip"));
}


function leftChoice() {
    answerSheet.push(["left", curRound]);
}

function middleChoice() {
    answerSheet.push(["middle", curRound]);
}

function rightChoice() {
    answerSheet.push(["right", curRound]);
}

function nextQuestion() {
    var leftBut = document.getElementById("buttonLeft");
    var midBut = document.getElementById("buttonMid");
    var rightBut = document.getElementById("buttonRight");

    var r = Math.floor((Math.random() * 3) + 1);

    switch (r) {

        case 1: //Hydrogen
            curRound = "Hydrogen";
            document.getElementById("round").innerHTML = "How many protons does a Hydrogen atom have?";
            leftBut.innerHTML = "One";
            midBut.innerHTML = "Zero";
            rightBut.innerHTML = "Two";
            break;

        case 2://Helium
            curRound = "Helium";
            document.getElementById("round").innerHTML = "How many protons does a Helium atom have?";
            leftBut.innerHTML = "Twenty";
            midBut.innerHTML = "Two";
            rightBut.innerHTML = "Two";
            break;

        case 3: //Oxygen
            curRound = "Oxygen";
            document.getElementById("round").innerHTML = "How many protons does a Oxygen atom have?";
            leftBut.innerHTML = "Four";
            midBut.innerHTML = "Nine";
            rightBut.innerHTML = "Eight";
            break;

        case 4: //Carbon
            curRound = "Carbon";
            document.getElementById("round").innerHTML = "How many protons does a Carbon atom have?";
            leftBut.innerHTML = "Two";
            midBut.innerHTML = "Three";
            rightBut.innerHTML = "Four";
            break;

        default:
            document.getElementById("round").innerHTML = r;
            leftBut.innerHTML = "Zero";
            midBut.innerHTML = "Zero";
            rightBut.innerHTML = "Zero";

    }
}



function newRound() {
    document.getElementById("buttonLeft").innerHTML = "";
    document.getElementById("buttonMiddle").innerHTML = "";
    document.getElementById("ButtonRight").innerHTML = "";
}


function displayScore() {
    document.getElementById("tally").innerHTML = score;
    // document.getElementById("cat").src = "kitty.jpg";
    hide(document.getElementById("score"));
}

function imageReload() {
    document.getElementById("kitty").innerHTML = location.reload();
}




function fade(element) {
    var op = 1;  // initial opacity
    var timer = setInterval(function () {
        if (op <= 0.01) {
            clearInterval(timer);
            element.style.visibility = 'hidden';
        }
        element.style.opacity = op;
        element.style.filter = 'alpha(opacity=' + op * 1 + ")";
        op -= 0.5;
    }, 100);
}

function fadeIn(element) {
    var op = 0.1;  // initial opacity
    element.style.visibility = 'visible';
    var timer = setInterval(function () {
        if (op >= 1) {
            clearInterval(timer);
        }
        element.style.opacity = op;
        element.style.filter = 'alpha(opacity=' + op * 100 + ")";
        op += op * 0.1;
    }, 10);
}