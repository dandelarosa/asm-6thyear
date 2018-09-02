function Aquarius(level) {
  Enemy.call(this, level);
}

Aquarius.prototype = Object.create(Enemy.prototype);
Aquarius.prototype.constructor = Aquarius;

Aquarius.prototype.name = "Aquarius";

Aquarius.prototype.ticksToNextTurn = 100;

Aquarius.prototype.baseHPAtLevel = function(level) {
  const level1HP = 100;
  const perLevelHP = 25;
  return level1HP + perLevelHP * (level - 1);
}

Aquarius.prototype.basePhysicalAttackAtLevel = function(level) {
  const valueAtLevel1 = 10;
  const valuePerLevel = 100;
  return valueAtLevel1 + valuePerLevel * (level - 1);
}
Aquarius.prototype.basePhysicalDefenseAtLevel = function(level) {
  const valueAtLevel1 = 10;
  const valuePerLevel = 50;
  return valueAtLevel1 + valuePerLevel * (level - 1);
}
