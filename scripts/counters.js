"use strict";

function stepCounter() {

    var count = 0;

    return function (step) {
        return count += step;
    }

}

function calculatePoints(quantity) {

    if(quantity === 4)return quantity*2;
    if(quantity === 5)return quantity*3;
    if(quantity === 6)return quantity*3;
    if(quantity === 7)return quantity*3;
    if(quantity === 8)return quantity*4;
    if(quantity === 9)return quantity*4;
    if(quantity === 10)return quantity*5;
    if(quantity === 11)return quantity*5;

}

var info = document.getElementById("comment");

var counterForSteps = stepCounter();

var counterForPoints = stepCounter();

var steps = document.getElementById("step");

var points = document.getElementById("score");