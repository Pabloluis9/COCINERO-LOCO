class Item {
  constructor(container) {
    this.container = container;
    this.width = 30;
    this.height = 20;
    this.left = Math.floor(Math.random() * (container.offsetWidth - this.width));
    this.top = 0;
    this.speed = 3;

    // Define los tipos de elementos disponibles
    const itemTypes = ['apple', 'banana', 'burger', 'poison'];
    
    // Selecciona aleatoriamente un tipo de elemento
    this.type = itemTypes[Math.floor(Math.random() * itemTypes.length)];

    this.element = document.createElement("div");
    this.element.style.position = "absolute";
    this.element.style.background = `url(./assets/${this.type}.png)`;
    this.element.style.backgroundSize = "cover";
    this.element.style.backgroundPosition = "bottom";

    this.element.style.position = "absolute";
    this.element.style.width = `${this.width}px`;
    this.element.style.height = `${this.height}px`;
    this.element.style.left = `${this.left}px`;
    this.element.style.top = `${this.top}px`;

    this.container.appendChild(this.element);
  }

  updatePosition() {
    // Actualiza la posición del elemento basado en left y top
    this.element.style.left = `${this.left}px`;
    this.element.style.top = `${this.top}px`;
  }

  move() {
    // Mueve el elemento hacia abajo a una velocidad constante
    this.top += this.speed;
    // Actualiza la posición del elemento en la pantalla
    this.updatePosition();

    // Si el elemento se sale de la pantalla, elimínalo para evitar acumulación de elementos
    if (this.top > this.container.offsetHeight) {
      this.element.remove();
    }
  }
  didCollide(obstacle) {
    const itemRect = this.element.getBoundingClientRect();
    const obstacleRect = obstacle.element.getBoundingClientRect();

    if (
      itemRect.left < obstacleRect.right &&
      itemRect.right > obstacleRect.left &&
      itemRect.top < obstacleRect.bottom &&
      itemRect.bottom > obstacleRect.top
    ) {
      return true;
    } else {
      return false;
    }
  }
}



