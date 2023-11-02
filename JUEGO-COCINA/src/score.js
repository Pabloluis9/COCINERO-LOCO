class Score {
    constructor(container) {
      this.container = container;
      this.items = 0;
      this.width = 150;
      this.height = 100;
      this.x = 10;
      this.y = 10;
  
      this.element = document.createElement("div");
      this.element.id = "score";
  
      this.scoreTextEl = document.createElement("h2");
      this.scoreTextEl.id = "score-text";
      this.scoreTextEl.textContent = `Score: ${this.items}`;

      this.element.appendChild(this.scoreTextEl);
  
      this.element.style.position = "absolute";
  
      this.element.style.width = `${this.width}px`;
      this.element.style.height = `${this.height}px`;
      this.element.style.left = `${this.x}px`;
      this.element.style.top = `${this.y}px`;
  
      this.container.appendChild(this.element);
    }
  
  
    scorePoints(points) {
      this.items += points;
  
      const scoreText = document.getElementById("score-text");
      scoreText.textContent = `Score: ${this.items}`;
    }
  
  
  }
  