"use strict";

var field_height = 9;
var field_width = 9;

function getMatrix(height, width) {
    var arr=[];

    for (var row = 0; row < height; row++){
        arr[row] = [];

        for (var column = 0; column < width; column++){
            arr[row][column] = {};
        }
    }
    return arr;
}

function createFieldOnHTML(matrix) {
    var table = document.createElement("table");
    table.setAttribute("id", "game-matrix");

    matrix.forEach((row, rowIndex) => {
        let tr = document.createElement("tr");
        table.appendChild(tr);

        row.forEach((cell, cellIndex) => {
            let td = document.createElement("td");
            let ball = document.createElement("div");
            td.appendChild(ball);
            tr.appendChild(td);
            ball.classList.add("ball");
            dataAtribute.setY(rowIndex)(ball);
            dataAtribute.setX(cellIndex)(ball);
        })
    });
    return table;
}

let dataAtribute = {
    getY: (elem) => {return elem.getAttribute("data-y")},
    setY: (value) => {return (elem) => {elem.dataset.y = value}},
    setX: (value) => {return (elem) => {elem.dataset.x = value}},
    getX: (elem) => {return elem.getAttribute("data-x")}
};

Object.prototype.toString = () => {return ""};

let matrix = getMatrix(field_height, field_width);

let parentOfGame_matrix = document.getElementById("game-field");
parentOfGame_matrix.appendChild( createFieldOnHTML(matrix) );
document.getElementById("game-area").classList.add("field9x9");
let table = document.getElementById("game-matrix");

