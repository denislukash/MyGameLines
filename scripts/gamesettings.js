"use strict";
function openWinSettings(){
    var gameParamWindow = document.getElementById("game_parameters");
    gameParamWindow.style.display = "table";
}

function closeWinSettings() {
    var gameParamWindow = document.getElementById("game_parameters");
    gameParamWindow.style.display = "none";
}

function swapField(height, width) {
    matrix = getMatrix(height, width);
    table.remove();
    parentOfGame_matrix.appendChild( createFieldOnHTML(matrix) );
    table = document.getElementById("game-matrix");
    setsCountersToZero();
    fieldAndGameSettings(height, width);
    addRandomBallToField(quantityOfRandomBalls);
}

function fieldAndGameSettings(height, width) {
    //some hardcore
    game_area.clearClassList();
    if(height === 7 && width === 7){
        game_area.classList.add("field7x7");
        quantityOfDeleteBalls = 3;
        quantityOfRandomBalls = 2;
    }else if(height === 9 && width === 9){
        game_area.classList.add("field9x9");
        quantityOfDeleteBalls = 4;
        quantityOfRandomBalls = 3;
    }else if(height === 11 && width === 11){
        game_area.classList.add("field11x11");
        quantityOfDeleteBalls = 5;
        quantityOfRandomBalls = 4;
    }
}

function setsCountersToZero() {
    counterForPoints = stepCounter();
    counterForSteps = stepCounter();
    points.innerText = 0;
    steps.innerText = 0;
}

var button7x7 = document.getElementById("field_7x7");
var button9x9 = document.getElementById("field_9x9");
var button11x11 = document.getElementById("field_11x11");
var confirmButton = document.getElementById("confirm_button");
var settingsButton = document.getElementById("settings_button");
var game_area = document.getElementById("game-area");




game_area.clearClassList = function(elem) {
    var classList = game_area.classList;
    var classListAsArray = new Array(classList.length);
    for (var i = 0, len = classList.length; i < len; i++) {
        classListAsArray[i] = classList[i];
    }
    game_area.removeClassList(elem, classListAsArray);
};

game_area.removeClassList = function(elem, classArray) {
    var classList = game_area.classList;
    classList.remove.apply(classList, classArray);
};

settingsButton.addEventListener("click", openWinSettings);
confirmButton.addEventListener("click", closeWinSettings);

button7x7.addEventListener("click", function () {
    swapField(7, 7)
});
button9x9.addEventListener("click", function () {
    swapField(9, 9)
});
button11x11.addEventListener("click", function () {
    swapField(11, 11)
});