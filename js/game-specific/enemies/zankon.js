function Zankon(level) {
  Enemy.call(this, level);
}

Zankon.prototype = Object.create(Enemy.prototype);
Zankon.prototype.constructor = Zankon;

Zankon.prototype.name = "Zankon";

Zankon.prototype.ticksToNextTurn = 100;

Zankon.prototype.baseHPAtLevel = function(level) {
  const level1HP = 500;
  const perLevelHP = 500;
  return level1HP + perLevelHP * (level - 1);
}

Zankon.prototype.basePhysicalAttackAtLevel = function(level) {
  const valueAtLevel1 = 10;
  const valuePerLevel = 100;
  return valueAtLevel1 + valuePerLevel * (level - 1);
}
Zankon.prototype.basePhysicalDefenseAtLevel = function(level) {
  const valueAtLevel1 = 10;
  const valuePerLevel = 100;
  return valueAtLevel1 + valuePerLevel * (level - 1);
}
