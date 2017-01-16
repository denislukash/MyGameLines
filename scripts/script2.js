"use strict";

function AddBallToFieldFromMatrix(y, x) {
    var rows = table.rows[y];
    var cell = rows.cells[x];
    if( cellIsEmpty(y, x) ){
        cell.innerHTML = matrix[y][x];
    }else{
        cell.innerHTML = matrix[y][x].ball.outerHTML;
    }
}

function addRandomBallToField() {

    for (var i = 0; i < 3; i++){
        var randomForMatrixRow =  getRandomInteger(0, matrix.length);
        var randomForMatrixColumn = getRandomInteger(0, matrix.length);
        var randomForBall =  getRandomInteger(0, 7);

        if( cellIsEmpty(randomForMatrixRow, randomForMatrixColumn) ){
            matrix[randomForMatrixRow][randomForMatrixColumn].ball = allBalls[randomForBall];
            AddBallToFieldFromMatrix(randomForMatrixRow, randomForMatrixColumn);
        }else{
            --i;
        }
    }
    findOneColorBalls();
    findOneColorBalls1();

    if(info.textContent == "Выберите шар для начала игры") return;
    info.textContent = "Ваш ход";
}

function createBall(index) {

    var ball = document.createElement("img");
    ball.setAttribute("src", getURLofBall(index));
    ball.color = index;
    return ball;

}

function cellIsEmpty(y, x) {
    return matrix[y][x].ball == "empty";
}

function addAllBallToArray(array, index) {

    for( var i = 1; i < 8; i++){
        array.push( createBall(i + index) );
    }
}

function getRandomInteger(min, max) {
    return parseInt(Math.random() * (max - min) + min);
}

function getURLofBall(index) {
    return './image/' + index + '.gif';
}

var allBalls = [];
var pickedBalls = [];

addAllBallToArray(allBalls, "");
addAllBallToArray(pickedBalls, "a");

addRandomBallToField();