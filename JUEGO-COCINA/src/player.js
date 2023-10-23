class Player {
    constructor(container) {
        this.container = container;
        this.width = 100;
        this.height = 100;
        this.x = 10;
        this.y = 400;
        
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

}