"use strict";

const FIELD_7X7 = "field7x7";
const FIELD_9X9 = "field9x9";
const FIELD_11X11 = "field11x11";

function swapField() {
    matrix = getMatrix(field_height, field_width);
    table.remove();
    parentOfGame_matrix.appendChild( createFieldOnHTML(matrix) );
    table = document.getElementById("game-matrix");
}

function clearClassField() {
    game_area.classList.remove(FIELD_7X7);
    game_area.classList.remove(FIELD_9X9);
    game_area.classList.remove(FIELD_11X11);
}

function setRandomBallsSettings() {
    firstRandom = getNextRandomBallArray(quantityOfRandomBalls);
    addRandomBallToField(firstRandom);
    nextRandom = getNextRandomBallArray(quantityOfRandomBalls);
    nextBalls.set_delete(nextRandom);
}

function applySettings(obj) {
    if(obj.field !== ""){
        clearClassField();
        game_area.classList.add(obj.field);
        if(obj.field === FIELD_7X7)settings.f7x7();
        if(obj.field === FIELD_9X9)settings.f9x9();
        if(obj.field === FIELD_11X11)settings.f11x11();
        nextBalls.set_delete(nextRandom);
        setRandomBallsSettings();
    }
}

function displayNextBallArea() {
    document.getElementById("next_ball_area").classList.toggle("hidden");
}

let winSettings = {
    gameParamWindow: () => {return document.getElementById("game_parameters")},
    open: () => {winSettings.gameParamWindow().style.display = "table"},
    close: () => {winSettings.gameParamWindow().style.display = "none"}
};

let settings = {
    f7x7: () =>{
        field_height = 7;
        field_width = 7;
        swapField();
        quantityOfDeleteBalls = 3;
        quantityOfRandomBalls = 2;
    },
    f9x9: () =>{
        field_height = 9;
        field_width = 9;
        swapField();
        quantityOfDeleteBalls = 4;
        quantityOfRandomBalls = 3;
    },
    f11x11: () => {
        field_height = 11;
        field_width = 11;
        swapField();
        quantityOfDeleteBalls = 5;
        quantityOfRandomBalls = 4;
    }
};

let game_area = document.getElementById("game-area");

document.querySelector(".button_new").addEventListener("click", (event) => {
    swapField();
    nextBalls.set_delete(nextRandom);
    setRandomBallsSettings();
});

document.querySelector(".button_sett").addEventListener("click", winSettings.open);

document.querySelector(".confirm_button").addEventListener("click", (event) => {
    var form = document.forms["settings_form"];
    var settings_info = {};
    settings_info.field = form.elements["field_size"].value;

    event.preventDefault();
    winSettings.close();

    applySettings(settings_info);
    setCountersToZero();
});

document.querySelector(".cancel_button").addEventListener("click", (event) => {
    winSettings.close();
    event.preventDefault();
});




