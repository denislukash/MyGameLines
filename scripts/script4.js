"use strict";

function findOneColorBalls() {

    var sameColorBallsArray = [];

    var coordinatesOneColorBallsObject = {};

    for (var i = 0; i < matrix.length; i++){

        for (var j = 0; j < matrix[i].length; j++){

            for (var colorOfBall = 1; colorOfBall < allBalls.length + 1; colorOfBall++){

                if ( matrix[i][j].ball.color == colorOfBall){

                    if (sameColorBallsArray.length == 0){

                        sameColorBallsArray.unshift(colorOfBall);
                        coordinatesOneColorBallsObject[j] = {y: i, x: j};

                    }else{

                        if (sameColorBallsArray[0] == colorOfBall) {

                            sameColorBallsArray.unshift(colorOfBall);
                            coordinatesOneColorBallsObject[j] = {y: i, x: j};

                            if(sameColorBallsArray.length >= 4){
                                info.textContent = "Удаление шаров";
                                setTimeout(deleteSameColorBall, 700, coordinatesOneColorBallsObject, sameColorBallsArray );
                                return true;
                            }

                        }else{

                            sameColorBallsArray.splice(0, sameColorBallsArray.length);

                            deleteAllKeysInObj(coordinatesOneColorBallsObject);

                            sameColorBallsArray.unshift(colorOfBall);
                            coordinatesOneColorBallsObject[j] = {y: i, x: j};

                        }
                    }


                }else if(matrix[i][j].ball == "empty"){
                    sameColorBallsArray.splice(0, sameColorBallsArray.length);

                    deleteAllKeysInObj(coordinatesOneColorBallsObject);
                }
            }



        }
    }

}

function findOneColorBalls1() {

    var sameColorBallsArray = [];

    var coordinatesOneColorBallsObject = {};

    for (var i = 0; i < matrix.length; i++) {

        for (var j = 0; j < matrix[i].length; j++) {

            for (var colorOfBall = 1; colorOfBall < allBalls.length + 1; colorOfBall++) {

                if (matrix[j][i].ball.color == colorOfBall) {

                    if (sameColorBallsArray.length == 0) {

                        sameColorBallsArray.unshift(colorOfBall);
                        coordinatesOneColorBallsObject[j] = {y: j, x: i};

                    } else {

                        if (sameColorBallsArray[0] == colorOfBall) {

                            sameColorBallsArray.unshift(colorOfBall);
                            coordinatesOneColorBallsObject[j] = {y: j, x: i};

                            if (sameColorBallsArray.length >= 4) {
                                info.textContent = "Удаление шаров";
                                setTimeout(deleteSameColorBall, 700, coordinatesOneColorBallsObject, sameColorBallsArray);
                                return true;

                            }

                        } else {

                            sameColorBallsArray.splice(0, sameColorBallsArray.length);

                            deleteAllKeysInObj(coordinatesOneColorBallsObject);

                            sameColorBallsArray.unshift(colorOfBall);
                            coordinatesOneColorBallsObject[j] = {y: j, x: i};

                        }
                    }


                } else if (matrix[j][i].ball == "empty") {
                    sameColorBallsArray.splice(0, sameColorBallsArray.length);

                    deleteAllKeysInObj(coordinatesOneColorBallsObject);
                }
            }


        }
    }

}

function deleteSameColorBall(obj, array) {

    for (var key in obj){

        var y = obj[key].y;
        var x = obj[key].x;

        matrix[y][x].ball = "empty";

        AddBallToFieldFromMatrix(y, x);
    }

    points.innerText = counterForPoints(array.length);
    deleteAllKeysInObj(obj);
    array.splice(0, array.length);

    info.textContent = "Ваш ход";
}


function deleteAllKeysInObj(obj) {

    for( var key in obj){

        delete obj[key];
    }
}
