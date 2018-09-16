function LoadMenuScene() {
  this.menu = new LoadMenu(20, 200, 600, 250);
  this.menu.callback = function() {
    loadGameFromSlot(SAVE_STATE_SLOT_PREFIX + 1);
    nextScene = new MainMenuScene();
  }

  this.update = function() {
    this.menu.update();
  }

  this.draw = function(ctx) {
    drawRect(0, 0, GAME_WIDTH, GAME_HEIGHT, '#f8f8f8');

    canvasContext.font = '48px Times';
    drawText('Dexternites', GAME_WIDTH/2, 40, 'black', 'center', 'middle');
    canvasContext.font = '30px Times';
    drawText('3: The Prototype', GAME_WIDTH/2, 80, 'black', 'center', 'middle');

    canvasContext.font = '20px Times';
    drawText('Not implemented yet. Press confirm to load Slot 1.', 20, 160, 'black', 'left', 'middle');

    this.menu.draw(ctx);
  }
}
