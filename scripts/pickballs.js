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
    }
};
//эту функцию мув болл тоже нужно раздедить по логике,но я еще не совсем догнал как именно разделить ее
function moveBall(event) {
    var target = event.target;
    var x = dataAtribute.getX(target);
    var y = dataAtribute.getY(target);
    if( check.cellIsEmpty(y, x) ) {
        for (var row = 0; row < matrix.length; row++){
            for (var column = 0; column < matrix[row].length; column++){
                if (check.ballIsPicked(row, column)) {
                    
                    info.textContent = "Шар перемещается";

                    matrix[y][x] = new CreateBallObject(matrix[row][column].color);
                    addBallToFieldFromMatrix(y, x);

                    deleteBallFromField(row, column);
                    matrix[row][column] = getObjForEmptyCell();

                    steps.textContent = counterForSteps(1);
                    //здесь сделаю условие,что бы после удаления шаров, рандомные не добавлялись
                    //пока что условие не работает
                    if(findOneColorBalls(quantityOfDeleteBalls) || findOneColorBalls1(quantityOfDeleteBalls)){
                        return;
                    }else {
                        setTimeout(addRandomBallToField, 1000, nextRandom);
                        setTimeout((function () {
                            displayNextBall.delete(nextRandom);
                            nextRandom = getNextRandomBallArray(quantityOfRandomBalls);
                            displayNextBall.set(nextRandom);
                        }),1000);

                    }
                }
            }
        }
    }
}

var dataAtribute = {
    getY: function (elem) {
        return elem.getAttribute("data-y");
    },
    getX: function (elem) {
        return elem.getAttribute("data-x");
    }
};

var quantityOfDeleteBalls = 4;

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

tableParent.addEventListener("click", moveBall);