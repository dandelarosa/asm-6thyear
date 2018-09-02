function PizzaToto(level) {
  Enemy.call(this, level);
}

PizzaToto.prototype = Object.create(Enemy.prototype);
PizzaToto.prototype.constructor = PizzaToto;

PizzaToto.prototype.name = "Pizza Toto";

PizzaToto.prototype.ticksToNextTurn = 100;

PizzaToto.prototype.baseHPAtLevel = function(level) {
  const level1HP = 100;
  const perLevelHP = 25;
  return level1HP + perLevelHP * (level - 1);
}

PizzaToto.prototype.basePhysicalAttackAtLevel = function(level) {
  const valueAtLevel1 = 10;
  const valuePerLevel = 100;
  return valueAtLevel1 + valuePerLevel * (level - 1);
}
PizzaToto.prototype.basePhysicalDefenseAtLevel = function(level) {
  const valueAtLevel1 = 10;
  const valuePerLevel = 50;
  return valueAtLevel1 + valuePerLevel * (level - 1);
}
