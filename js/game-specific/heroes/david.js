function David(level) {
  Hero.call(this, level);
}

David.prototype = Object.create(Hero.prototype);
David.prototype.constructor = David;

David.prototype.name = "David";

David.prototype.ticksToNextTurn = 40;

David.prototype.baseHPAtLevel = function(level) {
  const level1HP = 100;
  const perLevelHP = 90;
  return level1HP + perLevelHP * (level - 1);
}

David.prototype.basePhysicalAttackAtLevel = function(level) {
  const valueAtLevel1 = 10;
  const valuePerLevel = 50;
  return valueAtLevel1 + valuePerLevel * (level - 1);
}

David.prototype.basePhysicalDefenseAtLevel = function(level) {
  const valueAtLevel1 = 10;
  const valuePerLevel = 90;
  return valueAtLevel1 + valuePerLevel * (level - 1);
}
