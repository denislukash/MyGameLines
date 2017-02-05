"use strict";

let picked = "picked";
let unpicked = "unpicked";

function CreateBallObject(color) {
    this.color = color;
    this.status = unpicked;
}

CreateBallObject.prototype.pick_ball = function (elem) {
    elem.classList.add("animation");
    this.status = picked;
};

CreateBallObject.prototype.unpick_ball = function (elem) {
    elem.classList.remove("animation");
    this.status = unpicked;
};