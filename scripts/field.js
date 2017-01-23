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
            cell.innerHTML = matrix[row][column];
            tr.appendChild(cell);
            cell.className = "cell";
            cell.dataset.y = row;
            cell.dataset.x = column;
        }
    }
    return table;
}

function getObjForEmptyCell() {
    return {
        toString: function () {
            return "";
        }
    };
}

var matrix = getMatrix(9, 9);

var parentOfGame_matrix = document.getElementById("game-field");

parentOfGame_matrix.appendChild( createFieldOnHTML(matrix) );

var table = document.getElementById("game-matrix");