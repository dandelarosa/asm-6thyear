const GAME_WIDTH = 640;
const GAME_HEIGHT = 480;
const FPS = 30;

/**
 * IMPORTANT: This prefix must be unique to each game.
 */
const SAVE_STATE_SLOT_PREFIX = "dexternites_2_prototype_slot_";

window.addEventListener("load", function(event) {
  initGameState();
  var firstScene = new LoadingLoadingScene();

  // setupGraphics must be called before setting up input
  setupGraphics(GAME_WIDTH, GAME_HEIGHT);
  setupKeyboard();
  setupMouse();
  setupGameLoop(FPS, firstScene);
});
