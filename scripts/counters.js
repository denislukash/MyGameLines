"use strict";

function stepCounter() {

    var count = 0;

    return function (step) {
        return count += step;
    }

}


var info = document.getElementById("comment");

var counterForSteps = stepCounter();

var counterForPoints = stepCounter();

var steps = document.getElementById("step");

var points = document.getElementById("score");