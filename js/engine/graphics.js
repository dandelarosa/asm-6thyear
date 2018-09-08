var canvas, canvasContext;

function setupGraphics(canvasWidth, canvasHeight) {
  canvas = document.createElement('canvas');
  canvas.width = canvasWidth;
  canvas.height = canvasHeight;
  document.body.appendChild(canvas);
  canvasContext = canvas.getContext('2d');
  canvasContext.imageSmoothingEnabled = false;
}

function drawRect(topLeftX, topLeftY, boxWidth, boxHeight, fillStyle) {
  canvasContext.fillStyle = fillStyle;
  canvasContext.fillRect(topLeftX, topLeftY, boxWidth, boxHeight);
}

function drawText(text, textX, textY, fillStyle, textAlign, textBaseline) {
  canvasContext.fillStyle = fillStyle;
  canvasContext.textAlign = textAlign;
  canvasContext.textBaseline = textBaseline;
  canvasContext.fillText(text, textX, textY);
}
