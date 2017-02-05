"use strict";

let quantityOfDeleteBalls = 4;
let quantityOfRandomBalls = 3;
let firstRandom;
let nextRandom;

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
        arr[i] = new CreateBallObject( random.getColor() );
    }
    return arr;
}

function addRandomBallToField(array) {

    for (var i = 0; i < array.length; i++){
        var randomForMatrixRow =  random.getInteger(0, matrix.length);
        var randomForMatrixColumn = random.getInteger(0, matrix.length);

        if( check.cellIsEmpty(randomForMatrixRow, randomForMatrixColumn) ){
            matrix[randomForMatrixRow][randomForMatrixColumn] = array[i];
            addBallToFieldFromMatrix(randomForMatrixRow, randomForMatrixColumn);
        }else{
            --i;
        }
    }
     findSameColorBallsInRow(quantityOfDeleteBalls);
     findSameColorBallsInColumn(quantityOfDeleteBalls);
     setTimeout(deleteSameColorBall,500);
}

var check = {
    cellIsEmpty: (y, x) => {return !matrix[y][x].hasOwnProperty("color")},
    ballIsPicked: (y, x) => {return matrix[y][x].status === picked},
    thereIsPickedBallsOnField: () => {
        let result = false;
        matrix.forEach((row, rowIndex) => {

            matrix[rowIndex].forEach((cell, cellIndex) => {
                if(check.ballIsPicked(rowIndex, cellIndex)){
                    result = true;
                }
            })
        });
        return result
    }
};

var random = {
    getColor: () => {
        var color = ["red", "yellow", "green", "dark_blue", "pink", "blue", "dark"];
        var index = random.getInteger(0, color.length);
        return color[index];
    },
    getInteger: (min, max) => {return parseInt(Math.random() * (max - min) + min)}
};

var nextBalls = {
    get_element_collection: () => {
        return document.querySelectorAll(".next_ball");
    },
    set_delete: (array) => {
        array.forEach((element, index) => {
            nextBalls.get_element_collection()[index].classList.toggle(array[index].color);
        })
    }
};

setRandomBallsSettings();




