class Score {
    constructor(container, lifes) {
      this.container = container;
      this.lifes = lifes;
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
  
      this.heartsContainer = document.createElement("div");
      this.heartsContainer.id = "hearts-container";
  
      new Array(this.lifes).fill("").forEach((_) => {
        const heart = document.createElement("img");
        heart.src = "./assets/heart.png";
        heart.style.width = "30px";
        heart.style.height = "30px";
  
        this.heartsContainer.appendChild(heart);
      });
  
      this.element.appendChild(this.scoreTextEl);
      this.element.appendChild(this.heartsContainer);
  
      this.element.style.position = "absolute";
  
      this.element.style.width = `${this.width}px`;
      this.element.style.height = `${this.height}px`;
      this.element.style.left = `${this.x}px`;
      this.element.style.top = `${this.y}px`;
  
      this.container.appendChild(this.element);
    }
  
    update(lifes, collisionType) {
      this.lifes = lifes;
      this.updateHearts(collisionType);
    }
  
    scorePoints(points) {
      this.coins += points;
  
      const scoreText = document.getElementById("score-text");
      scoreText.textContent = `Score: ${this.items}`;
    }
  
    updateHearts(collisionType) {
      const heartsNodes = this.element.getElementsByTagName("img");
      const heartsContainer = document.getElementById("hearts-container");
  
      if (collisionType === "enemy") {
        const lastHeart = heartsNodes[heartsNodes.length - 1];
        lastHeart.remove();
      }
  
      if (collisionType === "potion") {
        if (heartsNodes.length < 3) {
          const heart = document.createElement("img");
          heart.src = "./assets/heart.png";
          heart.style.width = "30px";
          heart.style.height = "30px";
  
          heartsContainer.appendChild(heart);
        }
      }
    }
  }
  