"use strict";

function addBallToFieldFromMatrix(y, x) {
    getBallElement(y, x).classList.add(matrix[y][x].color);
}

function deleteBallFromField(y, x) {
    getBallElement(y, x).classList.remove("animation");
    getBallElement(y, x).classList.remove(matrix[y][x].color);
}

function getBallElement(row, column) {
    var rows = table.rows[row];
    var cell = rows.cells[column];
    return cell.firstChild;
}

function getNextRandomBallArray(count) {
    var arr = [];

    for(var i = 0; i < count; i++){
        arr[i] = new CreateBallObject( getRandom.color() );
    }
    return arr;
}

function addRandomBallToField(array) {

    for (var i = 0; i < array.length; i++){
        var randomForMatrixRow =  getRandom.integer(0, matrix.length);
        var randomForMatrixColumn = getRandom.integer(0, matrix.length);

        if( check.cellIsEmpty(randomForMatrixRow, randomForMatrixColumn) ){
            matrix[randomForMatrixRow][randomForMatrixColumn] = array[i];
            addBallToFieldFromMatrix(randomForMatrixRow, randomForMatrixColumn);
        }else{
            --i;
        }
    }
     findOneColorBalls();
     findOneColorBalls1();
}

function CreateBallObject(color) {
    this.color = color;
    this.status = "unpicked";
    this.toString = function () {
        return "";
    };
    this.pick_ball = function (elem) {
        elem.classList.add("animation");
        this.status = "picked";
    };
    this.unpick_ball = function (elem) {
        console.log(elem.classList);
        elem.classList.remove("animation");
        this.status = "unpicked";
    }
}

var check = {
    cellIsEmpty: function (y, x) {
        return !matrix[y][x].hasOwnProperty("color");
    },
    ballIsPicked: function (y, x) {
        return matrix[y][x].status === "picked";
    }
};

var quantityOfRandomBalls = 3;

var getRandom = {
    color: function () {
        var color = ["red", "yellow", "green", "dark_blue", "pink", "blue", "dark"];
        var index = this.integer(0, color.length);
        return color[index];
    },
    integer: function (min, max) {
        return parseInt(Math.random() * (max - min) + min);
    }
};

var displayNextBall = {
    display_element_collection: function () {
        return document.querySelectorAll(".next_ball");
    },

    set: function (array) {
        for(var i = 0; i < array.length; i++){
            displayNextBall.display_element_collection()[i].classList.add(array[i].color);
        }
    },

    delete: function (array) {
        for(var i = 0; i < array.length; i++){
            displayNextBall.display_element_collection()[i].classList.remove(array[i].color);
        }
    }
};


var firstRandom = getNextRandomBallArray(quantityOfRandomBalls);

addRandomBallToField(firstRandom);

var nextRandom = getNextRandomBallArray(quantityOfRandomBalls);

displayNextBall.set(nextRandom);