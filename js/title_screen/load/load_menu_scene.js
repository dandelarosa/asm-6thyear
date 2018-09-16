function LoadMenuScene() {
  this.inputDelay = 5;
  this.inputDelayTimer = this.inputDelay;

  this.update = function() {
    if (this.inputDelayTimer === 0) {
      var didPressButton = false;

      if (confirmPressed()) {
        loadGameFromSlot(SAVE_STATE_SLOT_PREFIX + 1);
        nextScene = new MainMenuScene();
        didPressButton = true;
      }

      if (didPressButton) {
        this.inputDelayTimer = this.inputDelay;
      }
    }
    else {
      this.inputDelayTimer--;
    }
  }

  this.draw = function(ctx) {
    drawRect(0, 0, GAME_WIDTH, GAME_HEIGHT, '#f8f8f8');

    canvasContext.font = '48px Times';
    drawText('Dexternites', GAME_WIDTH/2, 40, 'black', 'center', 'middle');
    canvasContext.font = '30px Times';
    drawText('3: The Prototype', GAME_WIDTH/2, 80, 'black', 'center', 'middle');

    canvasContext.font = '20px Times';
    drawText('Not implemented yet. Press confirm to load Slot 1.', 20, 160, 'black', 'left', 'middle');

    // TODO: draw "Not Implemented" text
  }
}
