"use strict";

function findOneColorBalls() {
    var coordinatesOneColorBallsObject = {};
    var sameColorBalls = [];

   for(var i = 0; i < matrix.length; i++){

       for(var j = 0; j < matrix[i].length; j++){

           if ( !cellIsEmpty(i, j) ){

               if (sameColorBalls.length === 0){
                   coordinatesOneColorBallsObject[j] = {y: i, x: j};
                   sameColorBalls.unshift(matrix[i][j].color);
               }else{

                   if (sameColorBalls[0] === matrix[i][j].color) {
                       coordinatesOneColorBallsObject[j] = {y: i, x: j};
                       sameColorBalls.unshift(matrix[i][j].color);

                       if(sameColorBalls.length >= 4){
                           info.textContent = "Удаление шаров";
                           setTimeout(deleteSameColorBall, 700, coordinatesOneColorBallsObject, sameColorBalls);
                           return true;
                       }

                   }else{
                       deleteAllKeysInObj(coordinatesOneColorBallsObject);
                       sameColorBalls.splice(0, sameColorBalls.length);
                       coordinatesOneColorBallsObject[j] = {y: i, x: j};
                       sameColorBalls.unshift(matrix[i][j].color);
                   }
               }
           }else {
               sameColorBalls.splice(0, sameColorBalls.length);
               deleteAllKeysInObj(coordinatesOneColorBallsObject);
           }
       }
   }
}

function findOneColorBalls1() {
    var coordinatesOneColorBallsObject = {};
    var sameColorBalls = [];

    for(var i = 0; i < matrix.length; i++){

        for(var j = 0; j < matrix[i].length; j++){

            if ( !cellIsEmpty(j, i) ){

                if (sameColorBalls.length === 0){
                    coordinatesOneColorBallsObject[j] = {y: j, x: i};
                    sameColorBalls.unshift(matrix[j][i].color);
                }else{

                    if (sameColorBalls[0] === matrix[j][i].color) {
                        coordinatesOneColorBallsObject[j] = {y: j, x: i};
                        sameColorBalls.unshift(matrix[j][i].color);

                        if(sameColorBalls.length >= 4){
                            info.textContent = "Удаление шаров";
                            setTimeout(deleteSameColorBall, 700, coordinatesOneColorBallsObject, sameColorBalls);
                            return true;
                        }
                    }else{
                        deleteAllKeysInObj(coordinatesOneColorBallsObject);
                        sameColorBalls.splice(0, sameColorBalls.length);
                        coordinatesOneColorBallsObject[j] = {y: j, x: i};
                        sameColorBalls.unshift(matrix[j][i].color);
                    }
                }
            }else {
                sameColorBalls.splice(0, sameColorBalls.length);
                deleteAllKeysInObj(coordinatesOneColorBallsObject);
            }
        }
    }
}

function deleteSameColorBall(obj, array) {

    for (var key in obj){
        var y = obj[key].y;
        var x = obj[key].x;
        matrix[y][x] = getObjForEmptyCell();
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

