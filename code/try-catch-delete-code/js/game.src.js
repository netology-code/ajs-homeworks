const game = {
  POS_LEFT: 0,
  POS_RIGHT: 1,
  POS_UNDEFINED: 0.5,
  cones: {},
  carPos: 0,


  init(options) {
    try {
      this.roadCell = options.roadCell || 200;
      this.conesChance = options.conesChance || 75;
      this.startSpeed = options.startSpeed || 7;
      this.strikeLength = options.strikeLength || 50;
      this.strikeColor = options.strikeColor || '#ffcc2f';
      this.gameField = options.gameField;
      this.car = options.car;
      this.distanceBox = options.distanceBox;
      this.gameOverDiv = options.gameOverDiv;
      this.startButtonDiv = options.startButtonDiv;
    } catch (e) {
      console.error(e);
    }
  },

  setField() {
    this.ctx = this.gameField.getContext('2d');

    this.width = this.gameField.offsetWidth;
    this.height = this.gameField.offsetHeight;

    this.laneLength = Math.ceil(this.height / this.strikeLength / 2) + 1;
    this.laneSeparator = (this.width - 10 * 3) / 2;

    this.gameField.width = this.width;
    this.gameField.height = this.height;

    this.ctx.beginPath();
    this.ctx.rect(0, 0, 10, this.height);
    this.ctx.rect(this.width - 10, 0, 10, this.height);
    this.ctx.fillStyle = '#D0D0D0';
    this.ctx.fill();
    this.ctx.closePath();
  },

  start() {
    try {
      this.startButtonDiv.classList.add('fade');
    } catch (e) {
      console.info(e);
    }
    Object.keys(this.cones).forEach((key) => {
      this.removeCone(key);
    });

    this.runStatus = true;
    this.speed = this.startSpeed;
    this.distance = 0;
    this.conesCount = 0;
    this.conesProbability = 0;
    this.roadCellDistance = 0;

    this.setField();

    this.run();
  },

  run() {
    this.distance += this.speed;

    if (this.roadCellDistance < this.roadCell) {
      this.roadCellDistance += this.speed;
    } else {
      this.roadCellDistance -= this.roadCell;
      this.conesProbability += Math.random() * this.conesChance;
      if (this.conesProbability > 100) {
        this.conesProbability = 0;
        this.addCone();
      }
    }

    this.calculateConePosition();
    this.drawDividingStrip(this.distance % (2 * this.strikeLength));

    this.distanceBox.innerText = Math.ceil(this.distance / 30);

    setTimeout(() => {
      if (this.runStatus) {
        this.run();
      } else {
        this.stopGame();
      }
    }, 20);
  },

  stopGame() {
    this.gameOverDiv.classList.remove('fade');
  },


  addCone() {
    this.conesCount += 1;
    this.cones[this.conesCount] = document.createElement('div');
    this.cones[this.conesCount].className = 'cone';
    this.cones[this.conesCount].topPosition = 0;
    this.cones[this.conesCount].number = this.conesCount;

    if (Math.random() * 2 > 1) {
      this.cones[this.conesCount].classList.add('cone_right');
      this.cones[this.conesCount].pos = 1;
    } else {
      this.cones[this.conesCount].pos = 0;
    }

    this.cones[this.conesCount].id = `cone_${this.conesCount}`;
    this.gameField.parentNode.appendChild(this.cones[this.conesCount]);
  },

  calculateConePosition() {
    Object.keys(this.cones).forEach((key) => {
      if (this.isConeOutsideOfGameField(key)) {
        this.removeCone(key);
      } else {
        this.cones[key].topPosition += this.speed;
        this.cones[key].style.top = `${this.cones[key].topPosition}px`;

        if (this.isConeInsideCarBox(key)) {
          this.crash(key);
        }
      }
    });
  },

  removeCone(key) {
    this.cones[key].remove();
  },

  isConeOutsideOfGameField(key) {
    return this.cones[key].topPosition >= this.height + 60;
  },

  isConeInsideCarBox(key) {
    return (this.cones[key].topPosition > this.height - 150)
      && (this.cones[key].topPosition < this.height)
      && (this.carPos === this.cones[key].pos);
  },

  drawDividingStrip(p) {
    this.ctx.clearRect(this.laneSeparator + 10, 0, 10, this.height);
    this.ctx.beginPath();
    for (let strikeNumber = 0; strikeNumber < this.laneLength; strikeNumber += 1) {
      this.ctx.rect(
        this.laneSeparator + 10,
        strikeNumber * this.strikeLength * 2 + p - 50,
        10,
        this.strikeLength,
      );
    }
    this.ctx.fillStyle = this.strikeColor;
    this.ctx.fill();
    this.ctx.closePath();
  },

  changeLane() {
    this.car.classList.toggle('car_right');
    this.changeCarPos(this.carPos === this.POS_RIGHT ? this.POS_LEFT : this.POS_RIGHT);
  },

  changeCarPos(pos) {
    this.carPos = this.POS_UNDEFINED;
    setTimeout(function () {
      this.carPos = pos;
    }, 500 / this.speed);
  },

  crash(key) {
    this.runStatus = false;
    this.cones[key].classList.add('cone_bang');
  },

  fadeGameOver() {
    this.gameOverDiv.classList.add('fade');
    this.startButtonDiv.classList.remove('fade');
  },
};
