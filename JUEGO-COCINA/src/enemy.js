class Enemy {
    constructor(container) {
        this.container = container;
        this.width = 100;
        this.height = 100;
        this.x = 700;
        this.y = 390;
        this.vx = 2; 
        this.element = document.createElement("img");
        this.element.src = "./assets/enemy.png";
        this.element.style.position = "absolute";
        this.element.style.width = `${this.width}px`;
        this.element.style.height = `${this.height}px`;
        this.element.style.left = `${this.x}px`;
        this.element.style.top = `${this.y}px`;
        this.container.appendChild(this.element);

        this.isMovingRight = true;

        setInterval(() => {
            this.isMovingRight = Math.random() < 0.5; 
        }, 2000);
        
        this.startMoving();
    }

    moveRandomly() {
        if (this.isMovingRight) {
            this.x += this.vx;
        } else {
            this.x -= this.vx;
        }

        if (this.x <= 0) {
            this.isMovingRight = true;
        } else if (this.x >= window.innerWidth - this.width) {
            this.isMovingRight = false;
        }

        this.element.style.left = `${this.x}px`;

        requestAnimationFrame(this.moveRandomly.bind(this));
    }

    startMoving() {
        requestAnimationFrame(this.moveRandomly.bind(this));
    }

    stopMoving() {
        
    }
}

const container = document.getElementById("container"); 
