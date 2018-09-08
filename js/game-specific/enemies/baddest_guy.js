function BaddestGuy(level) {
  Enemy.call(this, level);
}

BaddestGuy.prototype = Object.create(Enemy.prototype);
BaddestGuy.prototype.constructor = BaddestGuy;

BaddestGuy.prototype.name = "Baddest Guy";

BaddestGuy.prototype.ticksToNextTurn = 100;

BaddestGuy.prototype.baseHPAtLevel = function(level) {
  const level1HP = 100;
  const perLevelHP = 25;
  return level1HP + perLevelHP * (level - 1);
}

BaddestGuy.prototype.basePhysicalAttackAtLevel = function(level) {
  const valueAtLevel1 = 10;
  const valuePerLevel = 100;
  return valueAtLevel1 + valuePerLevel * (level - 1);
}
BaddestGuy.prototype.basePhysicalDefenseAtLevel = function(level) {
  const valueAtLevel1 = 10;
  const valuePerLevel = 50;
  return valueAtLevel1 + valuePerLevel * (level - 1);
}
