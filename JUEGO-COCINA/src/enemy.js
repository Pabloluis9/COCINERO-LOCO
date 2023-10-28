class Enemy {
    constructor(container) {
        this.container = container;
        this.width = 100;
        this.height = 100;
        this.x = 700;
        this.y = 390;
        this.vx = 2;
        this.element = document.createElement("img");
        this.element.style.position = "absolute";
        this.element.style.width = `${this.width}px`;
        this.element.style.height = `${this.height}px`;
        this.element.style.left = `${this.x}px`;
        this.element.style.top = `${this.y}px`;
        this.container.appendChild(this.element);

        this.isMovingRight = true;

        this.startMoving();
    }

    moveRandomly() {
        if (this.isMovingRight) {
            this.x += this.vx;
        } else {
            this.x -= this.vx;
        }

        // Cambiar la imagen cuando cambie la dirección
        if (this.isMovingRight) {
            this.element.src = "./assets/enemy.png"; // Ruta de la imagen original
        } else {
            this.element.src = "./assets/enemy-2.png"; // Ruta de la nueva imagen
        }

        // Agrega una probabilidad aleatoria de cambio de dirección
        if (Math.random() < 0.01) {
            this.isMovingRight = !this.isMovingRight;
        }

        // Limita el movimiento dentro de la ventana
        if (this.x <= 0) {
            this.isMovingRight = true;
        } else if (this.x + this.width >= window.innerWidth) {
          
            this.isMovingRight = false;
        }

        this.element.style.left = `${this.x}px`;

        requestAnimationFrame(this.moveRandomly.bind(this));
    }

    startMoving() {
        requestAnimationFrame(this.moveRandomly.bind(this));
    }

    stopMoving() {
        // Detener la animación si es necesario
    }
}

const container = document.getElementById("container");

// Crear una instancia del enemigo
const enemy = new Enemy(container);