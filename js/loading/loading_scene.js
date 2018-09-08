function LoadingScene() {
  this.init = function() {
    this.loaded = false;
    loadImages();
  };
  this.init();

  this.update = function() {
    if (this.loaded) {
      if (leftClicked) {
        nextScene = new TitleMenuScene();
      }
    }

    if (imagesLoaded === imagesToLoad.length) {
      this.loaded = true;
    }
  };

  this.draw = function() {
    canvasContext.drawImage(splashScreenImage, 0, 0);

    if (this.loaded) {
      canvasContext.font = '24px Times';
      drawText('Click here to start', GAME_WIDTH/2, 400, 'black', 'center', 'middle');
    }
  };
}
