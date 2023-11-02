class Game {
    constructor(container) {
        this.container = container;
        this.background = new Background(this.container);
        this.player = new Player(this.container);
        this.enemy = new Enemy(this.container);
        this.score = new Score(this.container);
        this.items = [];
        this.intervalId = null;
    }

    start() {
      this.intervalId = setInterval(() => {
        this.update();
      }, 1000 / 36);
    }
   
    
    update() {
      this.player.move();
      this.enemy.move();
  
      // Mueve y verifica colisiones para los elementos existentes
      this.items.forEach((item) => {
        item.move();
      });
      this.checkCollisions();
  
      // Agrega nuevos elementos si corresponde
      if (Math.random() > 0.98) {
        this.items.push(new Item(this.container));
      }
  
      // Ejecuta la función cleanup para eliminar elementos fuera del tablero
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
    checkCollisions() {
  
  
      // Item - player collision
      const collidedItem = this.items.find((item) => {
        return item.didCollide(this.player);
      });
  
      if (collidedItem) {

        if (collidedItem.type === "poison") {
          this.enemy.vx += 2;
        }

        if (collidedItem.type === "apple") {
          this.score.scorePoints(100);
        }

        if (collidedItem.type === "banana") {
          this.score.scorePoints(100);
        }

        if (collidedItem.type === "burger") {
          this.score.scorePoints(200);
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

  gameOver() {
    const gameOverBoard = document.getElementById("game-over-board");
    const scoreElement = document.createElement("div");
    scoreElement.id = "final-score";
    scoreElement.textContent = `Final Score: ${this.score.items}`;
    gameOverBoard.appendChild(scoreElement);
    gameOverBoard.style.display = "flex";
  
    clearInterval(this.intervalId);
  }
}


