"use strict";
//тут у меня прилично треша, только понаписывал это всё, нужно еще доводить до ума
var winSettings = {
    gameParamWindow: function () {
        return document.getElementById("game_parameters");
    },

    open: function () {
        winSettings.gameParamWindow().style.display = "table";
    },

    close: function () {
        winSettings.gameParamWindow().style.display = "none";
    }
};

function swapField(height, width) {
    matrix = getMatrix(height, width);
    table.remove();
    parentOfGame_matrix.appendChild( createFieldOnHTML(matrix) );
    table = document.getElementById("game-matrix");
}

function clearClassField() {
    game_area.classList.remove("field7x7");
    game_area.classList.remove("field9x9");
    game_area.classList.remove("field11x11");
}

function applySettings() {
    //эту функцию буду как то разделять по логике,пока не сообразил как
    if(this.field !== ""){
        clearClassField();
        game_area.classList.add(this.field);
        if(this.field === "field7x7"){
            swapField(7, 7);
            quantityOfDeleteBalls = 3;
            quantityOfRandomBalls = 2;
        }else if(this.field === "field9x9"){
            swapField(9, 9);
            quantityOfDeleteBalls = 4;
            quantityOfRandomBalls = 3;
        }else if(this.field === "field11x11"){
            swapField(11, 11);
            quantityOfDeleteBalls = 5;
            quantityOfRandomBalls = 4;
        }
        displayNextBall.delete(nextRandom);
        firstRandom = getNextRandomBallArray(quantityOfRandomBalls);
        addRandomBallToField(firstRandom);
        nextRandom = getNextRandomBallArray(quantityOfRandomBalls);
        displayNextBall.set(nextRandom);
    }
    //вот тут у меня получается с чекбокса всегда приходит ON, как правильно
    //считывать инфу с чекбокса?
    if(this.hint = "on")document.getElementById("next_ball_area").style.display = "table";
}

function setCountersToZero() {
    counterForPoints = stepCounter();
    counterForSteps = stepCounter();
    points.innerText = 0;
    steps.innerText = 0;
}

document.querySelector(".confirm_button").addEventListener("click", function (event) {
    var form = document.forms["settings_form"];
    var settings_info = {};
    settings_info.field = form.elements["field_size"].value;
    settings_info.hint = form.elements["checkbox"].value;
    console.log(settings_info.hint);

    event.preventDefault();
    winSettings.close();

    applySettings.call(settings_info);
    setCountersToZero();
});

var settingsButton = document.querySelector(".button_sett");
var game_area = document.getElementById("game-area");

settingsButton.addEventListener("click", winSettings.open);
