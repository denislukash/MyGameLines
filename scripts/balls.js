"use strict";

function addBallToFieldFromMatrix(y, x) {
    getBallElement(y, x).classList.add(matrix[y][x].color);
}

function deleteBallFromField(y, x) {
    getBallElement(y, x).classList.remove("animation");
    getBallElement(y, x).classList.remove(matrix[y][x].color);
}

function getBallElement(row, column) {
    var rows = table.rows[row];
    var cell = rows.cells[column];
    return cell.firstChild;
}

function getNextRandomBallArray(count) {
    var arr = [];

    for(var i = 0; i < count; i++){
        arr[i] = new CreateBallObject( getRandom.color() );
    }
    return arr;
}

function addRandomBallToField(array) {

    for (var i = 0; i < array.length; i++){
        var randomForMatrixRow =  getRandom.integer(0, matrix.length);
        var randomForMatrixColumn = getRandom.integer(0, matrix.length);

        if( check.cellIsEmpty(randomForMatrixRow, randomForMatrixColumn) ){
            matrix[randomForMatrixRow][randomForMatrixColumn] = array[i];
            addBallToFieldFromMatrix(randomForMatrixRow, randomForMatrixColumn);
        }else{
            --i;
        }
    }
     findSameColorBallsInRow(quantityOfDeleteBalls);
     findSameColorBallsInColumn(quantityOfDeleteBalls);
     setTimeout(deleteSameColorBall,500);
}

//@vm: todo: хорошее название для фабрики, но не для конструктора/класса
//@vm: todo: лучше пусть просто будет класс Болл, и вынеси его в отдельный файл
//@vm: todo: там будет только структура самого шарика
function CreateBallObject(color) {
    this.color = color;
    this.status = "unpicked";//@vm: todo: своего рода хардкодженое значение, т.к. это примитив-строка, и она у тебя дублируется
    //@vm: todo:  по коду еще несколько раз, лучше сделай под это например список констант с допустимыми значениями и юзай их
    //@vm: todo: это не критично, но можно где-то в одной из строк ошибиться и встрять потом
}

CreateBallObject.prototype.pick_ball = function (elem) {
    elem.classList.add("animation");
    this.status = "picked";
};

CreateBallObject.prototype.unpick_ball = function (elem) {
    console.log(elem.classList);
    elem.classList.remove("animation");
    this.status = "unpicked";
};

var check = {
    cellIsEmpty: function (y, x) {
        return !matrix[y][x].hasOwnProperty("color");
    },
    ballIsPicked: function (y, x) {
        return matrix[y][x].status === "picked";
    }
};

var quantityOfRandomBalls = 3;

//@vm: todo: лушче уже отдельные методы, оно то хорошо что ты по смыслу обьединил
//@vm: todo: но получается обьект называется как метод, а метод как свойство
//@vm: todo: т.е. в названии метода нет намерения, а в названии обьекта есть
//@vm: todo: лучше тогда уже Рандом.РетКолор, Рандом.гетИнтежер
var getRandom = {
    color: function () {
        //@vm: todo: список цветов разве только тут используется?
        var color = ["red", "yellow", "green", "dark_blue", "pink", "blue", "dark"];
        var index = this.integer(0, color.length);
        return color[index];
    },
    integer: function (min, max) {
        return parseInt(Math.random() * (max - min) + min);
    }
};

//@vm: todo: некстБоллс
var displayNextBall = {
    //@vm: todo: снейк_кейс
    //@vm: todo: вообще метод же не отображает коллекцию а получает, т.е. гет
    display_element_collection: function () {
        return document.querySelectorAll(".next_ball");
    },

    set: function (array) {
        //@vm: todo: форыч
        for(var i = 0; i < array.length; i++){
            displayNextBall.display_element_collection()[i].classList.add(array[i].color);
        }
    },

    delete: function (array) {
        //@vm: todo: дублирование с сетом, можно через класслист.тоггл(тру/фолс) оба метода сделать
        for(var i = 0; i < array.length; i++){
            displayNextBall.display_element_collection()[i].classList.remove(array[i].color);
        }
    }
};

//@vm: todo: это константа? лучшее ее наверх тогда поднять
var quantityOfDeleteBalls = 4;



//@vm: todo: эти вызовы похожи на первую игровую итерацию инициализацию.
//@vm: todo: я так понимаю где-то есть такие же но уже в рамках игрового цикла?
//@vm: todo: может эти можно перенести туда же?
var firstRandom = getNextRandomBallArray(quantityOfRandomBalls);

addRandomBallToField(firstRandom);

var nextRandom = getNextRandomBallArray(quantityOfRandomBalls);

displayNextBall.set(nextRandom);