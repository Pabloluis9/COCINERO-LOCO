/*

class Item {
    constructor(container, x, y, type) {
        this.container = container;
        this.x = x;
        this.y = y;
        this.width = 30;
        this.height = 30;
        this.type = type;

        this.element = document.createElement("div");
        this.element.style.position = "absolute";
        this.element.style.background = `url(./assets/${this.type}.png)`;
        this.element.style.backgroundSize = "cover";
        this.element.style.backgroundPosition = "bottom";


        this.element.style.width = `${this.width}px`;
    this.element.style.height = `${this.height}px`;
    this.element.style.backgroundColor = this.color;
    this.element.style.left = `${this.x}px`;
    this.element.style.top = `${this.y}px`;

    this.container.appendChild(this.element);
    }
}

*/
const gameBoardContainer = document.getElementById("game-board");

// Lista de imágenes para los objetos
const objectImages = [
  'url("./assets/apple.png")',
  'url("./assets/banana.png")',
  'url("./assets/burger.png")',
  // Agrega más rutas de imágenes según sea necesario
];

const objectWidth = 30; // Ancho de los objetos
const objectHeight = 30; // Alto de los objetos
const minTimeBetweenObjects = 2000; // Tiempo mínimo entre objetos en milisegundos

const objectXPositions = []; // Almacenar las posiciones X de los objetos creados

function createAndFallObject() {
  const fallingObject = document.createElement("div");
  fallingObject.style.width = `${objectWidth}px`;
  fallingObject.style.height = `${objectHeight}px`;

  const randomImage = objectImages[Math.floor(Math.random() * objectImages.length)];
  fallingObject.style.background = randomImage;
  fallingObject.style.backgroundSize = "cover";
  fallingObject.style.position = "absolute";
  fallingObject.style.bottom = "0";

  gameBoardContainer.appendChild(fallingObject);

  let randomX;
  do {
    randomX = Math.random() * (gameBoardContainer.offsetWidth - objectWidth);
  } while (objectXPositions.some(x => Math.abs(randomX - x) < objectWidth));
  objectXPositions.push(randomX);

  fallingObject.style.left = randomX + "px";

  let y = 0;
  const speed = 2;

  function fall() {
    y += speed;
    fallingObject.style.top = y + "px";

    if (y < gameBoardContainer.offsetHeight - objectHeight) {
      requestAnimationFrame(fall);
    } else {
      // El objeto ha llegado al suelo
      gameBoardContainer.removeChild(fallingObject);
      objectXPositions.splice(objectXPositions.indexOf(randomX), 1);
    }
  }
  
  fall();
}

setInterval(createAndFallObject, minTimeBetweenObjects);