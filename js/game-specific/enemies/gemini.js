function Gemini(level) {
  Enemy.call(this, level);
}

Gemini.prototype = Object.create(Enemy.prototype);
Gemini.prototype.constructor = Gemini;

Gemini.prototype.name = "Gemini";

Gemini.prototype.ticksToNextTurn = 100;

Gemini.prototype.baseHPAtLevel = function(level) {
  const level1HP = 200;
  const perLevelHP = 200;
  return level1HP + perLevelHP * (level - 1);
}

Gemini.prototype.basePhysicalAttackAtLevel = function(level) {
  const valueAtLevel1 = 10;
  const valuePerLevel = 100;
  return valueAtLevel1 + valuePerLevel * (level - 1);
}
Gemini.prototype.basePhysicalDefenseAtLevel = function(level) {
  const valueAtLevel1 = 10;
  const valuePerLevel = 200;
  return valueAtLevel1 + valuePerLevel * (level - 1);
}
