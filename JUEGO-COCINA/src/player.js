class Player {
  constructor(container) {
    this.container = container;
    this.width = 100;
    this.height = 100;
    this.x = 10; 
    this.y = 400;
    this.floor = 400;
    this.vx = 0;
    this.jumpingSpeed = 0;
    this.element = document.createElement("img");
    this.element.src = "./assets/cocinero.png";
    this.movements = {
      right: false,
      left: false,
    };
    this.draw();
    this.jumping = false;
    this.gravity = 0.98;

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
      this.jumpingSpeed = 15;
      this.jumping = true;
    }
  }

  move() {
    if (this.vx > 0) {

    this.draw();
  } else if (this.vx < 0) {
    if (this.x > 0) {
      this.movements.left = true;
    } else {
      this.x = 0; 
    }
  } else {
    this.movements.right = false;
    this.movements.left = false;
    this.imgSrc = this.imgStaticSrc;
    this.animationTick = 0;
    this.draw();
  }
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
