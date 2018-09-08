function FlyingBook(level) {
  Enemy.call(this, level);
}

FlyingBook.prototype = Object.create(Enemy.prototype);
FlyingBook.prototype.constructor = FlyingBook;

FlyingBook.prototype.name = "Flying Book";

FlyingBook.prototype.ticksToNextTurn = 100;

FlyingBook.prototype.baseHPAtLevel = function(level) {
  const level1HP = 100;
  const perLevelHP = 25;
  return level1HP + perLevelHP * (level - 1);
}

FlyingBook.prototype.basePhysicalAttackAtLevel = function(level) {
  const valueAtLevel1 = 10;
  const valuePerLevel = 100;
  return valueAtLevel1 + valuePerLevel * (level - 1);
}

FlyingBook.prototype.basePhysicalDefenseAtLevel = function(level) {
  const valueAtLevel1 = 10;
  const valuePerLevel = 50;
  return valueAtLevel1 + valuePerLevel * (level - 1);
}
