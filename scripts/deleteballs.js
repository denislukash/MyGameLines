"use strict";

//так я и не придумал как эти огромные функции упростить, буду еще думать
function findOneColorBalls(deleteBallsValue) {
    var coordinatesOneColorBallsObject = {};
    var sameColorBalls = [];

   for(var i = 0; i < matrix.length; i++){

       for(var j = 0; j < matrix[i].length; j++){

           if ( !check.cellIsEmpty(i, j) ){

               if (sameColorBalls.length === 0){
                   coordinatesOneColorBallsObject[j] = {y: i, x: j};
                   sameColorBalls.unshift(matrix[i][j].color);
               }else{

                   if (sameColorBalls[0] === matrix[i][j].color) {
                       coordinatesOneColorBallsObject[j] = {y: i, x: j};
                       sameColorBalls.unshift(matrix[i][j].color);
                   }else{
                       if(sameColorBalls.length >= deleteBallsValue)markBallsForDelete(coordinatesOneColorBallsObject);
                       deleteAllKeysInObj(coordinatesOneColorBallsObject);
                       sameColorBalls.splice(0, sameColorBalls.length);
                       coordinatesOneColorBallsObject[j] = {y: i, x: j};
                       sameColorBalls.unshift(matrix[i][j].color);
                   }
               }
           }else {
               if(sameColorBalls.length >= deleteBallsValue)markBallsForDelete(coordinatesOneColorBallsObject);
               sameColorBalls.splice(0, sameColorBalls.length);
               deleteAllKeysInObj(coordinatesOneColorBallsObject);
           }
       }
   }
}

function findOneColorBalls1(deleteBallsValue) {
    var coordinatesOneColorBallsObject = {};
    var sameColorBalls = [];

    for(var i = 0; i < matrix.length; i++){

        for(var j = 0; j < matrix[i].length; j++){

            if ( !check.cellIsEmpty(j, i) ){

                if (sameColorBalls.length === 0){
                    coordinatesOneColorBallsObject[j] = {y: j, x: i};
                    sameColorBalls.unshift(matrix[j][i].color);
                }else{

                    if (sameColorBalls[0] === matrix[j][i].color) {
                        coordinatesOneColorBallsObject[j] = {y: j, x: i};
                        sameColorBalls.unshift(matrix[j][i].color);
                    }else{
                        if(sameColorBalls.length >= deleteBallsValue)markBallsForDelete(coordinatesOneColorBallsObject);
                        deleteAllKeysInObj(coordinatesOneColorBallsObject);
                        sameColorBalls.splice(0, sameColorBalls.length);
                        coordinatesOneColorBallsObject[j] = {y: j, x: i};
                        sameColorBalls.unshift(matrix[j][i].color);
                    }
                }
            }else {
                if(sameColorBalls.length >= deleteBallsValue)markBallsForDelete(coordinatesOneColorBallsObject);
                sameColorBalls.splice(0, sameColorBalls.length);
                deleteAllKeysInObj(coordinatesOneColorBallsObject);
            }
        }
    }
    setTimeout(deleteSameColorBall, 700);
}

function deleteSameColorBall() {
    for(var i = 0; i < matrix.length; i++) {

        for (var j = 0; j < matrix[i].length; j++) {

            if(matrix[i][j].hasOwnProperty("delete")){
                deleteBallFromField(i, j);
                matrix[i][j] = getObjForEmptyCell();

            }
        }
    }
}

function deleteAllKeysInObj(obj) {

    for( var key in obj){
        delete obj[key];
    }
}

function calculateKeyInObj(obj) {
    var result = 0;
    for(var key in obj){
        result++
    }
    return result;
}

function markBallsForDelete(obj) {
    points.innerText = counterForPoints(calculatePoints(calculateKeyInObj(obj)));
    for(var key in obj){
        var i = obj[key].y;
        var j = obj[key].x;
        matrix[i][j].delete = "ok";
    }
}
