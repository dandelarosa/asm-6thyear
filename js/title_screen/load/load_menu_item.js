function LoadMenuItem(x, y, width, height) {
  this.x = x;
  this.y = y;
  this.width = width;
  this.height = height;

  this.update = function() {
  };

  this.draw = function(ctx) {
    ctx.save();
    ctx.translate(this.x, this.y);

    // FIXME: implement for real
    ctx.fillStyle = '#FF91A4';
    ctx.fillRect(0, 0, this.width, this.height);

    ctx.restore();
  }
}
