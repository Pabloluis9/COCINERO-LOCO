class Game {
  constructor(container) {
      this.container = container;
      this.background = new Background(this.container);
      this.player = new Player(this.container);
      this.enemy = new Enemy(this.container);
      this.score = new Score(this.container);
      this.chronometer = new Chronometer(this.container);
      this.items = [];
      this.milestones = [];
      this.intervalId = null;
  }
  start() {
    this.intervalId = setInterval(() => {
      this.update();
    }, 1000 / 36);
    this.chronometer.start()
    const musicSound = document.getElementById("music");
    musicSound.play()
  }
  update() {
    this.player.move();
    this.enemy.move();
    this.checkTime();
  
    this.items.forEach((item) => {
      item.move();
    });
    this.checkCollisions();
   
    const randomValue = Math.random();

  

    if (randomValue > 0.99) {
       
        this.items.push(new Item(this.container));
    } else if (randomValue > 0.985) {
        
        this.items.push(new Item(this.container, "hielo"));
    }
    this.cleanup();
  }
  cleanup() {
    this.items.forEach((item) => {
      const inBoard = item.top + item.height > 0;
      if (!inBoard) {
        item.element.remove();
      }
    });
    const filteredItems = this.items.filter((item) => {
      return item.top + item.height > 0;
    });
    this.items = filteredItems;
  }
  mostrarValorElemento(elemento, valor) {
    elemento.innerText = valor;
    elemento.style.display = "block";
    setTimeout(function() {
        elemento.style.display = "none";
    }, 250); 
}
  checkCollisions() {
    const getItem = document.getElementById("get-item");
    const iceSound = document.getElementById("ice");
    const burgerSound = document.getElementById("burger");
    const poisonSound = document.getElementById("poison");
    
    const collidedItem = this.items.find((item) => {
      return item.didCollide(this.player);
    });
    if (collidedItem) {
      let valorElemento = document.getElementById("valorElemento");
      if (collidedItem.type === "poison") {
        poisonSound.play()
        this.enemy.vx += 2;
      }
      if (collidedItem.type === "apple") {
        getItem.play();
        this.score.scorePoints(100);
        this.mostrarValorElemento(valorElemento, "+100");
      }
      if (collidedItem.type === "banana") {
        getItem.play();
        this.score.scorePoints(100);
        this.mostrarValorElemento(valorElemento, "+100");
      }
      if (collidedItem.type === "burger") {
        burgerSound.play();
        this.score.scorePoints(200);
        this.mostrarValorElemento(valorElemento, "+200");
      }
      if (collidedItem.type === "hielo") {
        iceSound.play();
        this.enemy.vx = 0;
      this.enemy.iced("./assets/enemy-ice.png");
    
      
        setTimeout(() => {
          this.enemy.vx = 3;
          this.enemy.iced("./assets/enemy.png");
     
        }, 3000);
      }
      
      
      collidedItem.element.style.display = "none";
    }
    this.checkCollisionEnemy()
  }
checkCollisionEnemy() {
  if (this.enemy.didCollide(this.player)){
    this.gameOver();
  }
}
checkTime () {
  const INCREMENT_BLOCK = 1000
  const lastMilestone = this.milestones[this.milestones.length - 1] || 0
  const nextMilestone = lastMilestone + INCREMENT_BLOCK

  if (this.score.items >= nextMilestone) {
    this.milestones.push(nextMilestone);
    this.chronometer.currentTime += 30;
    const timeSound = document.getElementById("more-time");
    timeSound.play();
  }
  if (this.chronometer.currentTime === 0)
  this.gameOver();
}

gameOver() {
  const gameOverBoard = document.getElementById("game-over-board");
  const scoreElement = document.createElement("div");
  scoreElement.id = "final-score";
  scoreElement.textContent = `Final Score: ${this.score.items}`;
  gameOverBoard.appendChild(scoreElement);
  gameOverBoard.style.display = "flex";
  const musicStop = document.getElementById("music");
  musicStop.pause()
  clearInterval(this.intervalId);
  this.chronometer.stop();
}
}
