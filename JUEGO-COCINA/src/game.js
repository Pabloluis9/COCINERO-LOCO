class Game {
    constructor(container) {
        this.container = container;
        this.background = new Background(this.container);
        this.player = new Player(this.container);
        this.enemy = new Enemy(this.container);
        this.score = new Score(this.container, this.player.hits);
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
        
        collidedItem.element.style.display = "none";
      }
      
}

}
