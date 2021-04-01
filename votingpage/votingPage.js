"use strict";
let prepComplete = false;

function prepBallot(){
    document.getElementById('arrow').style["transition"] = "2s";
    document.getElementById('arrow').style["border-top"] = "30px solid #00ca00";
    setTimeout(function(){document.getElementById('ballot').classList.remove('hide');}, 1900);
    setTimeout(function(){
        document.getElementById("ballotChoice").style["top"] = "-35vh";
        document.getElementById('arrow').style['display'] = 'none';
        document.getElementById('ballot').style['top'] = "17vh"
    }, 2900);
    setTimeout(function(){
        prepComplete = true;
        alert("Click on Ballot Box to submit vote.");
    }, 4500)
    voteForGeorge.removeEventListener('click', makeBadBallot);
    voteForRichard.removeEventListener('click', makeGoodBallot);
}

function getCords(){

}

    let screenWidth = window.screen.width;
    let screenHeight = window.screen.height;
    console.log(screenWidth, screenHeight);
    let yBallotBox = screenHeight*.6;
    let xBallotBox = screenWidth*.50;

    console.log(xBallotBox, yBallotBox);


let makeBadBallot = function(){
    prepBallot();
    let xMouse, yMouse;
    setTimeout(function(){
        wholeScreen.addEventListener('mousemove', function(){
        xMouse = event.clientX;     // Get the horizontal coordinate
        yMouse = event.clientY;     // Get the vertical coordinate

        // console.log(`the x cordinates of the mouse are ${xMouse}`);
        // console.log(`the y cordinates of the mouse are ${yMouse}`);
        
        if((yMouse - 40) <= yBallotBox ){

        };
    })}, 4600)


}

let makeGoodBallot = function(){
    prepBallot();
}

let changeCursor = function(){
    document.getElementById("body").style.cursor = "pointer";
}

ballot.addEventListener('click', changeCursor);
voteForGeorge.addEventListener('click', makeBadBallot);
voteForRichard.addEventListener('click', makeGoodBallot);




/////////////////////////////////////////////////////


