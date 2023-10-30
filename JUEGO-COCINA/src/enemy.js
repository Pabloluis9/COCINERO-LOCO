class Enemy {
    constructor(container) {
      this.container = container;
      this.width = 100;
      this.height = 100;
      this.x = 700;
      this.y = 400;
      this.floor = 400;
      this.vx = 3;
      this.element = document.createElement("img");
      this.element.src = "./assets/enemy.png";
      this.isMovingRight = true;
      this.draw();
    }
  
    draw() {
        if (this.element) {
            this.element.remove();
          }
      this.element.style.width = `${this.width}px`;
      this.element.style.height = `${this.height}px`;
      this.element.style.left = `${this.x}px`;
      this.element.style.top = `${this.y}px`;
      this.container.appendChild(this.element);
      this.element.style.position = "absolute";
    }
  
    move() {
        if (this.isMovingRight) {
            this.x += this.vx;
        } else {
            this.x -= this.vx;
        }

        // Agrega una probabilidad aleatoria de cambio de dirección
        if (Math.random() < 0.01) {
            this.isMovingRight = !this.isMovingRight;
        }

        // Limita el movimiento dentro de la ventana
        if (this.x <= 0) {
            this.isMovingRight = true;
          } else if (this.x + this.width >= this.container.offsetWidth) {
            this.isMovingRight = false;
            this.x = this.container.offsetWidth - this.width;
          }
          this.element.style.left = `${this.x}px`;
        }

        didCollide(obstacle) {
            const enemyRect = this.element.getBoundingClientRect();
            const obstacleRect = obstacle.element.getBoundingClientRect();
        
            if (
              enemyRect.left < obstacleRect.right &&
              enemyRect.right > obstacleRect.left &&
              enemyRect.top < obstacleRect.bottom &&
              enemyRect.bottom > obstacleRect.top
            ) {
              return true;
            } else {
              return false;
            }
          }

  }
   
      
      
      
      
      
      
 



