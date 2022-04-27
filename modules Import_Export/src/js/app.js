import Game, {
    GameSavingData,
    writeGameSaving as saveGame,
    readGameSaving as loadGame
  } from "./game.js";
  
  const game = new Game();
  game.start();

