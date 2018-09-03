function BeeWarrior(level) {
  Enemy.call(this, level);
}

BeeWarrior.prototype = Object.create(Enemy.prototype);
BeeWarrior.prototype.constructor = BeeWarrior;

BeeWarrior.prototype.name = "BeeWarrior";

BeeWarrior.prototype.ticksToNextTurn = 100;

BeeWarrior.prototype.baseHPAtLevel = function(level) {
  const level1HP = 100;
  const perLevelHP = 25;
  return level1HP + perLevelHP * (level - 1);
}

BeeWarrior.prototype.basePhysicalAttackAtLevel = function(level) {
  const valueAtLevel1 = 10;
  const valuePerLevel = 100;
  return valueAtLevel1 + valuePerLevel * (level - 1);
}

BeeWarrior.prototype.basePhysicalDefenseAtLevel = function(level) {
  const valueAtLevel1 = 10;
  const valuePerLevel = 50;
  return valueAtLevel1 + valuePerLevel * (level - 1);
}
