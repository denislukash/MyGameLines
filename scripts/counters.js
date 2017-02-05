"use strict";

function stepCounter() {
    var count = 0;

    return function (step) {
        return count += step;
    }
}

function setCountersToZero() {
    counterForPoints = stepCounter();
    counterForSteps = stepCounter();
    points.innerText = 0;
    steps.innerText = 0;
}

function calculatePoints(quantity) {
    let arr = [
        {from: 4,to: 5, modifier: 2},
        {from: 6, to: 7, modifier: 3},
        {from: 8, to: 9, modifier: 4},
        {from: 10, to: 11, modifier: 5}
    ];

    for(let i = 0; i < arr.length; i++){
        if(quantity == arr[i].from || quantity == arr[i].to){
            return quantity*arr[i].modifier;
        }
    }

    return 0;
}

var counterForSteps = stepCounter();

var counterForPoints = stepCounter();

var steps = document.getElementById("step");

var points = document.getElementById("score");