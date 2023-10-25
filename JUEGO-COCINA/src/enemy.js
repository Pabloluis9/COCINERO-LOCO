class Enemy {
    constructor(container) {
        this.container = container;
        this.width = 100;
        this.height = 100;
        this.x = 700;
        this.y = 390;
        this.vx = -10;
        this.isMovingRight = true;

        this.element = document.createElement("img");
        this.element.src = "./assets/enemy.png";

        this.element.style.position = "absolute";
        this.element.style.width = `${this.width}px`;
        this.element.style.height = `${this.height}px`;
        this.element.style.left = `${this.x}px`;
        this.element.style.top = `${this.y}px`;

        this.container.appendChild(this.element);

        
    }

    move() {
        this.x += this.vx;

        // Verifica si el enemigo ha llegado al borde derecho o izquierdo
        const leftBoundary = 0;  // Límite izquierdo de movimiento
        const rightBoundary = this.container.clientWidth - this.width;  // Límite derecho de movimiento

        if (this.x <= leftBoundary) {
            this.x = leftBoundary; // Establece la posición en el límite izquierdo
            this.vx = Math.abs(this.vx); // Cambia la dirección a la derecha
        } else if (this.x >= rightBoundary) {
            this.x = rightBoundary; // Establece la posición en el límite derecho
            this.vx = -Math.abs(this.vx); // Cambia la dirección a la izquierda
        }

        // Actualiza la posición en la pantalla
        this.element.style.left = `${this.x}px`;
    }
}

