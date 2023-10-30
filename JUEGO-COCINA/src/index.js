window.addEventListener("load", () => {
    const container = document.getElementById("game-board");   
    const btnStart = document.getElementById("intro-game-btn");
    const introBoard = document.getElementById("intro-game");
    let game;


    btnStart.addEventListener("click", () => {
        introBoard.remove();
        game = new Game(container);
        game.start();
      });
});