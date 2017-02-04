"use strict";

function stepCounter() {

    var count = 0;

    return function (step) {
        return count += step;
    }

}

function calculatePoints(quantity) {

    //todo @vm: дублирование, можно собрать в виде массива обьектов вида:
    var arr = [{q: 4, points: 8}]; //где поинтс это результат
    var arr = [{q: 4, modifier: 2}];//где модифайр это то на что надо домножить квонтити
    var arr = [{from: 4, to: 7, modifier: 2}]; // аналогично но с диапазонами


    if(quantity === 4)return quantity*2;
    if(quantity === 5)return quantity*3;
    if(quantity === 6)return quantity*3;
    if(quantity === 7)return quantity*3;

    if(quantity === 8)return quantity*4;
    if(quantity === 9)return quantity*4;

    if(quantity === 10)return quantity*5;
    if(quantity === 11)return quantity*5;

}

//todo @vm: вот эти все переменные здесь создаются но неясно где будут использоваться
//todo @vm: лучше создать их ближе к месту использования
var counterForSteps = stepCounter();

var counterForPoints = stepCounter();

var steps = document.getElementById("step");

var points = document.getElementById("score");