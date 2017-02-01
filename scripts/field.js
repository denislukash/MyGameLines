"use strict";

function getMatrix(height, width) {
    var arr=[];

    for (var row = 0; row < height; row++){
        arr[row] = [];

        for (var column = 0; column < width; column++){
            arr[row][column] = getObjForEmptyCell(); //each cell - it's empty object
        }
    }
    return arr;
}

function createFieldOnHTML(matrix) {
    var table = document.createElement("table");
    table.setAttribute("id", "game-matrix");

    for (var row = 0; row < matrix.length; row++){
        var tr = document.createElement("tr");
        table.appendChild(tr);

        for (var column = 0; column < matrix[row].length; column++){
            var cell = document.createElement("td");
            var ball = document.createElement("div");
            cell.appendChild(ball);
            tr.appendChild(cell);
            ball.classList.add("ball");
            ball.dataset.y = row;
            ball.dataset.x = column;
        }
    }
    return table;
}

function getObjForEmptyCell() {
    return {
        toString: function () { //for normal display object on field
            return "";
        }
    };
}

var defineHeight = 9;
var defineWidth = 9;

var matrix = getMatrix(defineHeight, defineWidth);
var parentOfGame_matrix = document.getElementById("game-field");
parentOfGame_matrix.appendChild( createFieldOnHTML(matrix) );
document.getElementById("game-area").classList.add("field9x9");
var table = document.getElementById("game-matrix");

