function LoadMenu(x, y, width, height) {
  this.x = x;
  this.y = y;
  this.width = width;
  this.height = height;
  this.inputDelay = 5;
  this.inputDelayTimer = this.inputDelay;
  this.callback = null;

  var margin = 20;
  var menuItemWidth = width - margin * 2;
  var menuItemHeight = 50;
  this.menuItem1 = new LoadMenuItem(20, 20, menuItemWidth, menuItemHeight);
  this.menuItem2 = new LoadMenuItem(20, 90, menuItemWidth, menuItemHeight);
  this.menuItem3 = new LoadMenuItem(20, 160, menuItemWidth, menuItemHeight);

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

    this.menuItem1.update();
    this.menuItem2.update();
    this.menuItem3.update();
  }

  this.draw = function(ctx) {
    ctx.save();
    ctx.translate(this.x, this.y);

    ctx.fillStyle = '#6dbdff';
    ctx.fillRect(0, 0, this.width, this.height);

    this.menuItem1.draw(ctx);
    this.menuItem2.draw(ctx);
    this.menuItem3.draw(ctx);

    ctx.restore();
  }
}
