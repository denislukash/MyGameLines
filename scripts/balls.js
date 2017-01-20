"use strict";

function AddBallToFieldFromMatrix(y, x, status_of_ball) {
    var rows = table.rows[y];
    var cell = rows.cells[x];
    
    if(status_of_ball == undefined){
        cell.innerHTML = matrix[y][x];
    }else{
        matrix[y][x].status = status_of_ball;
        cell.innerHTML = matrix[y][x][status_of_ball].outerHTML;
    }
}

function getRandomColor() {
    var color = ["red", "yellow", "green", "dark_blue", "pink", "blue", "dark"];
    var index = getRandomInteger(0, color.length);
    return color[index];
}

function addRandomBallToField(count) {

    for (var i = 0; i < count; i++){
        var randomForMatrixRow =  getRandomInteger(0, matrix.length);
        var randomForMatrixColumn = getRandomInteger(0, matrix.length);

        if( cellIsEmpty(randomForMatrixRow, randomForMatrixColumn) ){
            matrix[randomForMatrixRow][randomForMatrixColumn] = createBallObject( getRandomColor() );
            AddBallToFieldFromMatrix(randomForMatrixRow, randomForMatrixColumn, "unpicked");
        }else{
            --i;
        }
    }
     findOneColorBalls();
     findOneColorBalls1();

    if(info.textContent == "Выберите шар для начала игры") return;
    info.textContent = "Ваш ход";
}

function createHTMLelementForBall(color) {
    var img = document.createElement("img");
    img.setAttribute("src", getURLofBall(color));
    return img;
}

function getColorForPickedBall(color) {
    return color + "_picked";
}

function createBallObject(color) {
    var ball = {};
    ball.color = color;
    ball.unpicked = createHTMLelementForBall(color);
    ball.picked = createHTMLelementForBall(getColorForPickedBall(color));
    ball.toString = function () {
        return "";
    };
    return ball;
}

function cellIsEmpty(y, x) {
    return !matrix[y][x].hasOwnProperty("status");
}

function getRandomInteger(min, max) {
    return parseInt(Math.random() * (max - min) + min);
}

function getURLofBall(color) {
    return './image/' + color + '.gif';
}

addRandomBallToField(3);