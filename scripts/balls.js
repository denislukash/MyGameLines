"use strict";

function AddBallToFieldFromMatrix(y, x, status_of_ball) {
    var rows = table.rows[y];
    var cell = rows.cells[x];
    
    if(status_of_ball == undefined){
        cell.innerHTML = matrix[y][x];// if call fn without argument status, it's mean we want delete ball
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
            matrix[randomForMatrixRow][randomForMatrixColumn] = new CreateBallObject( getRandomColor() );
            AddBallToFieldFromMatrix(randomForMatrixRow, randomForMatrixColumn, "unpicked");
        }else{
            --i; //if cell is not empty, iteration beck for one step
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

function CreateBallObject(color) {//constructor
    // ball - object with properties unpicked and picked(element img with jump or permanent ball)
    this.color = color;
    this.unpicked = createHTMLelementForBall(color);
    this.picked = createHTMLelementForBall(getColorForPickedBall(color));
    this.toString = function () {
        return "";
    };
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

function getColorForPickedBall(color) {
    return color + "_picked";
}

var quantityOfRandomBalls = 3;

addRandomBallToField(quantityOfRandomBalls);