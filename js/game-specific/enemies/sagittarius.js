function Sagittarius(level) {
  Enemy.call(this, level);
}

Sagittarius.prototype = Object.create(Enemy.prototype);
Sagittarius.prototype.constructor = Sagittarius;

Sagittarius.prototype.name = "Sagittarius";

Sagittarius.prototype.ticksToNextTurn = 100;

Sagittarius.prototype.baseHPAtLevel = function(level) {
  const level1HP = 100;
  const perLevelHP = 25;
  return level1HP + perLevelHP * (level - 1);
}

Sagittarius.prototype.basePhysicalAttackAtLevel = function(level) {
  const valueAtLevel1 = 10;
  const valuePerLevel = 100;
  return valueAtLevel1 + valuePerLevel * (level - 1);
}
Sagittarius.prototype.basePhysicalDefenseAtLevel = function(level) {
  const valueAtLevel1 = 10;
  const valuePerLevel = 50;
  return valueAtLevel1 + valuePerLevel * (level - 1);
}
