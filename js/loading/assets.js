// List these in alphabetical order
var placeholderEnemyImage = document.createElement('img');
var placeholderHeroImage = document.createElement('img');

var imagesToLoad = [
  {
    imgPointer: placeholderEnemyImage,
    path: 'assets/placeholder_enemy.png',
  },
  {
    imgPointer: placeholderHeroImage,
    path: 'assets/placeholder_hero.png',
  },
];
var imagesLoaded = 0;

function onImageLoad() {
  imagesLoaded++;
}

function loadImage(imgPointer, path) {
  imgPointer.onload = onImageLoad;
  imgPointer.src = path;
}

function loadImages() {
  imagesToLoad.forEach((imageToLoad) => {
    loadImage(imageToLoad.imgPointer, imageToLoad.path);
  });
}
