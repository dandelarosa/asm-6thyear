function Bulbmon(level) {
  Enemy.call(this, level);
}

Bulbmon.prototype = Object.create(Enemy.prototype);
Bulbmon.prototype.constructor = Bulbmon;

Bulbmon.prototype.name = "Bulbmon";

Bulbmon.prototype.ticksToNextTurn = 100;

Bulbmon.prototype.baseHPAtLevel = function(level) {
  const level1HP = 100;
  const perLevelHP = 25;
  return level1HP + perLevelHP * (level - 1);
}

Bulbmon.prototype.basePhysicalAttackAtLevel = function(level) {
  const valueAtLevel1 = 10;
  const valuePerLevel = 100;
  return valueAtLevel1 + valuePerLevel * (level - 1);
}

Bulbmon.prototype.basePhysicalDefenseAtLevel = function(level) {
  const valueAtLevel1 = 10;
  const valuePerLevel = 50;
  return valueAtLevel1 + valuePerLevel * (level - 1);
}
