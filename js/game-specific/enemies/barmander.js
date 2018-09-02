function Barmander(level) {
  Enemy.call(this, level);
}

Barmander.prototype = Object.create(Enemy.prototype);
Barmander.prototype.constructor = Barmander;

Barmander.prototype.name = "Barmander";

Barmander.prototype.ticksToNextTurn = 100;

Barmander.prototype.baseHPAtLevel = function(level) {
  const level1HP = 100;
  const perLevelHP = 25;
  return level1HP + perLevelHP * (level - 1);
}

Barmander.prototype.basePhysicalAttackAtLevel = function(level) {
  const valueAtLevel1 = 10;
  const valuePerLevel = 100;
  return valueAtLevel1 + valuePerLevel * (level - 1);
}
Barmander.prototype.basePhysicalDefenseAtLevel = function(level) {
  const valueAtLevel1 = 10;
  const valuePerLevel = 50;
  return valueAtLevel1 + valuePerLevel * (level - 1);
}
