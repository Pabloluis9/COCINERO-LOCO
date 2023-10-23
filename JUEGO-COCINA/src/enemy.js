class Enemy {
    constructor(container) {
    this.container = container;
    this.width = 100;
    this.height = 100;
    this.x = 700;
    this.y = 390;

    this.element = document.createElement("img");
    this.element.src = "./assets/enemy.png";
    
    this.element.style.position = "absolute";
    this.element.style.width = `${this.width}px`;
    this.element.style.height = `${this.height}px`;
    this.element.style.left = `${this.x}px`;
    this.element.style.top = `${this.y}px`;



    this.container.appendChild(this.element);

}
}