class Chronometer {
    constructor(container) {
      this.container = container;
      this.width = 150;
      this.height = 100;
      this.x = 10;
      this.y = 10;
      this.currentTime = 60;
  
      this.element = document.createElement("div");
      this.element.id = "chronometer";
  
      this.chronometerTextEl = document.createElement("h2");
      this.chronometerTextEl.id = "chronometer-text";
      this.chronometerTextEl.textContent = `Time: ${this.currentTime}`;

      this.element.appendChild(this.chronometerTextEl);
  
      this.element.style.position = "absolute";
  
      this.element.style.width = `${this.width}px`;
      this.element.style.height = `${this.height}px`;
      this.element.style.left = `${this.x}px`;
      this.element.style.top = `${this.y}px`;
  
      this.container.appendChild(this.element);
    }

    start(printTimeCallback) {
        this.intervalId = setInterval(() => {
            console.log(this.currentTime)
            this.currentTime--; // Restar 1 al tiempo
            this.chronometerTextEl.textContent = `Time: ${this.currentTime}`;
            if (this.currentTime < 0) {
                this.stop(); // Detener el intervalo cuando llega a 0
            }
            if (printTimeCallback) {
                printTimeCallback(this.currentTime);
            }
        }, 1000);
    

}
}