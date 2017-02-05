"use strict";

var ball = {
    pick: (elem, y, x) => {matrix[y][x].pick_ball(elem)},
    unpickAllPicked: function () {
        matrix.forEach((row, rowIndex) => {

            row.forEach((cell, cellIndex) => {
                if(check.ballIsPicked(rowIndex, cellIndex)){
                    cell.unpick_ball(getBallElement(rowIndex, cellIndex))
                }
            })
        })},
    findAndDeletePicked: function () {
        let color;

        matrix.forEach((row, rowIndex) => {

            row.forEach((cell, cellIndex) => {
                if (check.ballIsPicked(rowIndex, cellIndex)){
                    color = cell.color;
                    deleteBallFromField(rowIndex, cellIndex);
                    matrix[rowIndex][cellIndex] = {};
                }
            })
        });
        return color;
    }
};

var tableParent = document.getElementById("game-field");

tableParent.addEventListener("click", function (event) {
    var target = event.target;

    var x = dataAtribute.getX(target);
    var y = dataAtribute.getY(target);

    if(!check.cellIsEmpty(y, x) && !check.ballIsPicked(y, x)){
        ball.unpickAllPicked();
        ball.pick(target, y, x);
    }
});

tableParent.addEventListener("click", function (event) {
    var target = event.target;

    var x = dataAtribute.getX(target);
    var y = dataAtribute.getY(target);

    if( check.cellIsEmpty(y, x) && check.thereIsPickedBallsOnField()) {
        var color = ball.findAndDeletePicked();

        matrix[y][x] = new CreateBallObject(color);
        addBallToFieldFromMatrix(y, x);

        steps.textContent = counterForSteps(1);

        findSameColorBallsInRow(quantityOfDeleteBalls);
        findSameColorBallsInColumn(quantityOfDeleteBalls);

        setTimeout(function () {
            if (deleteSameColorBall())return;
            addRandomBallToField(nextRandom);
            nextBalls.set_delete(nextRandom);
            nextRandom = getNextRandomBallArray(quantityOfRandomBalls);
            nextBalls.set_delete(nextRandom);
        }, 500);
    }
});

