"use strict";

var ball = {
    pick: function (elem, y, x) {
        matrix[y][x].pick_ball(elem);
    },
    unpickAllPicked: function () {
        for (var y = 0; y < matrix.length; y++){
            for (var x = 0; x < matrix[y].length; x++){
                if( check.ballIsPicked(y, x) ){
                    matrix[y][x].unpick_ball(getBallElement(y, x));
                }
            }
        }
    },
    findAndDeletePicked: function () {
        for (var row = 0; row < matrix.length; row++) {
            for (var column = 0; column < matrix[row].length; column++) {
                if (check.ballIsPicked(row, column)){
                    var color = matrix[row][column].color;
                    deleteBallFromField(row, column);
                    matrix[row][column] = {};
                    return color;
                }
            }
            }
        }
};

var dataAtribute = {
    getY: function (elem) {
        return elem.getAttribute("data-y");
    },
    getX: function (elem) {
        return elem.getAttribute("data-x");
    }
};

var tableParent = document.getElementById("game-field");

tableParent.addEventListener("click", function (event) {
    var target = event.target;
    var x = dataAtribute.getX(target);
    var y = dataAtribute.getY(target);
    if(!check.cellIsEmpty(y, x)){
        ball.unpickAllPicked();
        ball.pick(target, y, x);
    }
});

tableParent.addEventListener("click", function (event) {
    var target = event.target;
    var x = dataAtribute.getX(target);
    var y = dataAtribute.getY(target);
    if( check.cellIsEmpty(y, x) ) {
        var color = ball.findAndDeletePicked();

        matrix[y][x] = new CreateBallObject(color);
        addBallToFieldFromMatrix(y, x);

        steps.textContent = counterForSteps(1);

        findSameColorBallsInRow(quantityOfDeleteBalls);
        findSameColorBallsInColumn(quantityOfDeleteBalls);

        setTimeout(function () {
            if (deleteSameColorBall())return;
            addRandomBallToField(nextRandom);
            displayNextBall.delete(nextRandom);
            nextRandom = getNextRandomBallArray(quantityOfRandomBalls);
            displayNextBall.set(nextRandom);
        }, 500);
    }
});

