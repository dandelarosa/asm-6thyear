function Wesley(level) {
  Hero.call(this, level);
}

Wesley.prototype = Object.create(Hero.prototype);
Wesley.prototype.constructor = Wesley;

Wesley.prototype.name = "Wesley";

Wesley.prototype.ticksToNextTurn = 60;

Wesley.prototype.baseHPAtLevel = function(level) {
  const level1HP = 100;
  const perLevelHP = 100;
  return level1HP + perLevelHP * (level - 1);
}

Wesley.prototype.basePhysicalAttackAtLevel = function(level) {
  const valueAtLevel1 = 10;
  const valuePerLevel = 80;
  return valueAtLevel1 + valuePerLevel * (level - 1);
}

Wesley.prototype.basePhysicalDefenseAtLevel = function(level) {
  const valueAtLevel1 = 10;
  const valuePerLevel = 100;
  return valueAtLevel1 + valuePerLevel * (level - 1);
}
