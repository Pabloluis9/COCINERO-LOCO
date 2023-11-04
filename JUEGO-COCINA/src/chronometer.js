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
            this.currentTime--;
            this.chronometerTextEl.textContent = `Time: ${this.currentTime}`;
            if (this.currentTime <= 10) {
                this.chronometerTextEl.style.color = "red"; 
                this.element.style.animation = "blink 1s linear infinite";
                const countdownSound = document.getElementById("countdown");
                countdownSound.play();
                const musicPause = document.getElementById("music");
                musicPause.pause();
            } else {
                this.chronometerTextEl.style.color = "black"; 
                this.element.style.animation = "none"; // Detener la animación
                const countdownSound = document.getElementById("countdown");
                countdownSound.pause(); // Pausar la música de cuenta regresiva
                const music = document.getElementById("music");
                if (music.paused) {
                  music.play(); // Reproducir la música de fondo si aún no ha comenzado
                }
            }
            if (this.currentTime <= 0) {
                this.stop();
            }
            if (printTimeCallback) {
                printTimeCallback(this.currentTime);
            }
        }, 1000);
    }


    stop() {
        clearInterval(this.intervalId);
        this.currentTime = 0;
        this.chronometerTextEl.style.color = ""; // Restablecer el color del texto
        this.element.style.animation = "";
        const countdownSound = document.getElementById("countdown");
        countdownSound.pause();
    }
}
const styles = document.createElement("style");
styles.innerHTML = `
@keyframes blink {
    0% { opacity: 1; }
    50% { opacity: 0; }
    100% { opacity: 1; }
}`;
document.head.appendChild(styles);