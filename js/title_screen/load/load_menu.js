function LoadMenu(x, y, width, height) {
  this.x = x;
  this.y = y;
  this.width = width;
  this.height = height;
  this.inputDelay = 5;
  this.inputDelayTimer = this.inputDelay;
  this.callback = null;

  this.update = function() {
    if (this.inputDelayTimer === 0) {
      var didPressButton = false;

      if (confirmPressed()) {
        if (this.callback) {
          this.callback();
        }
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
    ctx.save();
    ctx.translate(this.x, this.y);

    ctx.fillStyle = '#6dbdff';
    ctx.fillRect(0, 0, this.width, this.height);

    ctx.restore();
  }
}
