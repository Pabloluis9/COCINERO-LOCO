class Player {
    constructor(container) {
        this.container = container;
        this.width = 100;
        this.height = 100;
        this.x = 10;
        this.y = 400;
        this.directionX = 0;
        this.directionY = 0;
        
        this.element = document.createElement("img");
        this.element.src = "./assets/cocinero.png";
        this.draw();

    }

    draw() {
        this.element.style.width = `${this.width}px`;
        this.element.style.height = `${this.height}px`;
        this.element.style.left = `${this.x}px`;
        this.element.style.top = `${this.y}px`;
        this.container.appendChild(this.element)
        this.element.style.position = "absolute";
    }

    jump() {
        if (!this.jumping) {
          this.jumpingSpeed = 15;
          this.jumping = true;
        }
      }

      move() {
        // Update player's car position based on directionX and directionY
        this.left += this.directionX;
        this.top += this.directionY;
    
        // Ensure the player's car stays within the game screen
        // handles left hand side
        if (this.left < 10) {
          this.left = 10;
        }
    
        // handles top side
        if (this.top < 10) {
          this.top = 10;
        }
    
        // handles right hand side
        if (this.left > this.gameScreen.offsetWidth - this.width - 10) {
          this.left = this.gameScreen.offsetWidth - this.width - 10;
        }
    
        // handles bottom side
        if (this.top > this.gameScreen.offsetHeight - this.height - 10) {
          this.top = this.gameScreen.offsetHeight - this.height - 10;
        }
    
        // Update the player's car position on the screen
        this.updatePosition();
      }
    
      updatePosition() {
        this.element.style.left = `${this.left}px`;
        this.element.style.top = `${this.top}px`;
      }

}