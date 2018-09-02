function Larry(level) {
  Hero.call(this, level);
}

Larry.prototype = Object.create(Hero.prototype);
Larry.prototype.constructor = Larry;

Larry.prototype.name = "Larry";

Larry.prototype.ticksToNextTurn = 40;

Larry.prototype.baseHPAtLevel = function(level) {
  const level1HP = 100;
  const perLevelHP = 60;
  return level1HP + perLevelHP * (level - 1);
}

Larry.prototype.basePhysicalAttackAtLevel = function(level) {
  const valueAtLevel1 = 10;
  const valuePerLevel = 90;
  return valueAtLevel1 + valuePerLevel * (level - 1);
}

Larry.prototype.basePhysicalDefenseAtLevel = function(level) {
  const valueAtLevel1 = 10;
  const valuePerLevel = 60;
  return valueAtLevel1 + valuePerLevel * (level - 1);
}
