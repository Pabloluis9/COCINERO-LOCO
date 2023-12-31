class Player {
  constructor(container) {
    this.container = container;
    this.width = 80;
    this.height = 150;
    this.x = 10; 
    this.y = 330;
    this.floor = 330;
    this.vx = 0;
    this.jumpingSpeed = 0;
    this.element = document.createElement("img");
    this.element.src = "./assets/cocinero.png";
    this.movements = {
      right: false,
      left: false,
    };
    this.jumping = false;
    this.gravity = 0.98;
    this.hits = 3;

    this.draw();
    this.setListeners();

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

  jump() {
    if (!this.jumping) {
      this.jumpingSpeed = 22;
      this.jumping = true;
    }
  }

 
  move() {
    this.x += this.vx;
    if (this.x <= 0) {
        this.x = 0;
    }
    if (this.x + this.width >= this.container.offsetWidth) {
        this.x = this.container.offsetWidth - this.width;
    }
    this.element.style.left = `${this.x}px`;
  
    if (this.jumping) {
      this.y -= this.jumpingSpeed;
      this.element.style.top = `${this.y}px`;
      this.jumpingSpeed -= this.gravity;
  
      const isFloor = this.y >= this.floor;
  
      if (isFloor) {
        this.jumpingSpeed = 0;
        this.jumping = false;
        this.y = this.floor;
        this.element.style.top = `${this.y}px`;
      }
    }
    
    this.draw();
  }

  setListeners() {
    window.addEventListener("keydown", (e) => {
      switch (e.code) {
        case "ArrowRight":
          this.vx = 10;
          break;
        case "ArrowLeft":
          this.vx = -10;
          break;
        case "Space":
          this.jump();
          break; 
        default:
          return;
      }
    });

    window.addEventListener("keyup", (e) => {
      switch (e.code) {
        case "ArrowRight":
        case "ArrowLeft":
          this.vx = 0;
          break;
        default:
          return;
      }
    });
  }
}
