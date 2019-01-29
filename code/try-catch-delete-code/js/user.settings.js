/*
* setGame() - первоначальные настройки игры
* startGame() - начало игры
* changeLane() - автомобиль меняет полосу движения
* isConeOutsideOfGameField() - конус находится за пределами поля
* isConeInsideCarBox() - конус касается автомобиля
* game.speed - скорость автомобиля
* game.start_speed - начальная скорость автомобиля
* */

window.onload = function () {
  game.init({
    roadCell: 200,
    conesChance: 75,
    startSpeed: 7,
    strikeLength: 50,
    strikeColor: '#ffcc2f',
    car: document.getElementById('car'),
    distanceBox: document.getElementById('distance_box'),
    gameField: document.getElementById('game_field'),
    gameOverDiv: document.getElementById('game_over'),
    startButtonDiv: document.getElementById('start_button'),
  });
  game.start();
};

window.onkeypress = function () {
  game.changeLane();
};
