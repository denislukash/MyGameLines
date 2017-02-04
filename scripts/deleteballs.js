"use strict";

//@vm: функция сравнения двух шариков по цвету из матрицы, вместо шариков могут прилететь пустые обьекты,
//@vm: поэтому сначала проверяется тип обьекта а только потом берется цвет
//@vm: для пустых обьектов берется NaN в качестве цвета, чтобы при их сравнении всегда получать фолс
function ballCompare(ball1, ball2) {
    const color1 = (ball1 instanceof CreateBallObject) ? ball1.color : NaN;
    const color2 = (ball2 instanceof CreateBallObject) ? ball2.color : NaN;

    return color1 === color2;
}


function findSameColorBallsInRow(minBallsCount) {
    matrix.forEach(function (row, rowIndex) {//todo @vm: общее
        let similarBallsInRowChain = new SimilarChain(minBallsCount, ballCompare, markBallsForDelete);

        row.forEach(function (cell, cellIndex) {//todo @vm: общее
            similarBallsInRowChain.push(matrix[rowIndex][cellIndex]);
        });
    });
}


function findSameColorBallsInColumn(minBallsCount) {
    matrix.forEach(function (row, rowIndex) {//todo @vm: общее
        let similarBallsInRowChain = new SimilarChain(minBallsCount, ballCompare, markBallsForDelete);

        row.forEach(function (cell, cellIndex) {//todo @vm: общее
            similarBallsInRowChain.push(matrix[cellIndex][rowIndex]);
        });
    });
}


function deleteSameColorBall() {
    var del = false;
    var deletedBallsCount = 0;
    for (var i = 0; i < matrix.length; i++) {
        for (var j = 0; j < matrix[i].length; j++) {

            if (matrix[i][j].hasOwnProperty("delete")) {
                deleteBallFromField(i, j);
                matrix[i][j] = {};
                del = true;
                deletedBallsCount++;
            }
        }
    }

    points.innerText = counterForPoints(calculatePoints(deletedBallsCount));

    return del;
}


function markBallsForDelete(ballsArray) {
    ballsArray.forEach((ball) => {
        ball.delete = "ok"
    });
}
