"use strict";

function ballCompare(ball1, ball2) {
    const color1 = (ball1 instanceof CreateBallObject) ? ball1.color : NaN;
    const color2 = (ball2 instanceof CreateBallObject) ? ball2.color : NaN;

    return color1 === color2;
}

function findSameColorBallsInRow(minBallsCount) {
    matrix.forEach(function (row, rowIndex) {
        let similarBallsInRowChain = new SimilarChain(minBallsCount, ballCompare, markBallsForDelete);

        row.forEach(function (cell, cellIndex) {
            similarBallsInRowChain.push(matrix[rowIndex][cellIndex]);
        });
    });
}

function findSameColorBallsInColumn(minBallsCount) {
    matrix.forEach(function (row, rowIndex) {
        let similarBallsInRowChain = new SimilarChain(minBallsCount, ballCompare, markBallsForDelete);

        row.forEach(function (cell, cellIndex) {
            similarBallsInRowChain.push(matrix[cellIndex][rowIndex]);
        });
    });
}

function deleteSameColorBall() {
    var del = false;
    var deletedBallsCount = 0;
    matrix.forEach((row, rowIndex) => {

        row.forEach((cell, cellIndex) => {
            if (matrix[rowIndex][cellIndex].hasOwnProperty("delete")) {
                deleteBallFromField(rowIndex, cellIndex);
                matrix[rowIndex][cellIndex] = {};
                del = true;
                deletedBallsCount++;
            }
        })
    });
    points.innerText = counterForPoints(calculatePoints(deletedBallsCount));

    return del;
}

function markBallsForDelete(ballsArray) {
    ballsArray.forEach((ball) => {
        ball.delete = "ok"
    });
}
