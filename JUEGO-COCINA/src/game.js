class Game {
    constructor(container) {
        console.log(container)
        this.container = container;
        this.background = new Background(this.container);
        this.player = new Player(this.container); 
        this.enemy = new Enemy(this.container);
    }
}