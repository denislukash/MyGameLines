"use strict";

function stepCounter() {

    var count = 0;

    return function (step) {
        return count += step;
    }

}

/*здесь будет функция считающаяя время,когда я разберусь как ее делать)))*/
// var date = new Date();
//
//  date.setHours(0, 0, 0);
//
//  var hours = date.getHours();
//  var minutes = date.getMinutes();
//  var seconds = date.getSeconds();
//
//  var fieldForTimer = document.getElementById("time");
//  fieldForTimer.innerText = hours + ":" + minutes + ":" + seconds;

var info = document.getElementById("comment");

var counterForSteps = stepCounter();

var counterForPoints = stepCounter();

var steps = document.getElementById("step");

var points = document.getElementById("score");