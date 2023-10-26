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
    }
}