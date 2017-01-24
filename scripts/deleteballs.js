"use strict";

function findOneColorBalls(deleteBallsValue) {
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

            if ( !cellIsEmpty(j, i) ){

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
                matrix[i][j] = getObjForEmptyCell();
                AddBallToFieldFromMatrix(i, j);
                points.innerText = counterForPoints(1);
            }
        }
    }
    info.textContent = "Ваш ход";
}

function deleteAllKeysInObj(obj) {

    for( var key in obj){
        delete obj[key];
    }
}

function markBallsForDelete(obj) {
    for(var key in obj){
        var i = obj[key].y;
        var j = obj[key].x;
        matrix[i][j].delete = "ok";
    }
}
