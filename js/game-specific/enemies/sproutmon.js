function Sproutmon(level) {
  Enemy.call(this, level);
}

Sproutmon.prototype = Object.create(Enemy.prototype);
Sproutmon.prototype.constructor = Sproutmon;

Sproutmon.prototype.name = "Sproutmon";

Sproutmon.prototype.ticksToNextTurn = 100;

Sproutmon.prototype.baseHPAtLevel = function(level) {
  const level1HP = 100;
  const perLevelHP = 25;
  return level1HP + perLevelHP * (level - 1);
}

Sproutmon.prototype.basePhysicalAttackAtLevel = function(level) {
  const valueAtLevel1 = 10;
  const valuePerLevel = 100;
  return valueAtLevel1 + valuePerLevel * (level - 1);
}

Sproutmon.prototype.basePhysicalDefenseAtLevel = function(level) {
  const valueAtLevel1 = 10;
  const valuePerLevel = 50;
  return valueAtLevel1 + valuePerLevel * (level - 1);
}
