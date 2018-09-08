function Luke(level) {
  Hero.call(this, level);
}

Luke.prototype = Object.create(Hero.prototype);
Luke.prototype.constructor = Luke;

Luke.prototype.name = "Luke";

Luke.prototype.ticksToNextTurn = 60;

Luke.prototype.baseHPAtLevel = function(level) {
  const level1HP = 100;
  const perLevelHP = 100;
  return level1HP + perLevelHP * (level - 1);
}

Luke.prototype.basePhysicalAttackAtLevel = function(level) {
  const valueAtLevel1 = 10;
  const valuePerLevel = 80;
  return valueAtLevel1 + valuePerLevel * (level - 1);
}

Luke.prototype.basePhysicalDefenseAtLevel = function(level) {
  const valueAtLevel1 = 10;
  const valuePerLevel = 100;
  return valueAtLevel1 + valuePerLevel * (level - 1);
}
