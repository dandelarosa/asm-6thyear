function DarkLilyQueen(level) {
  Enemy.call(this, level);
}

DarkLilyQueen.prototype = Object.create(Enemy.prototype);
DarkLilyQueen.prototype.constructor = BeeWarrior;

DarkLilyQueen.prototype.name = "Dark Lily Queen";

DarkLilyQueen.prototype.ticksToNextTurn = 100;

DarkLilyQueen.prototype.baseHPAtLevel = function(level) {
  const level1HP = 100;
  const perLevelHP = 25;
  return level1HP + perLevelHP * (level - 1);
}

DarkLilyQueen.prototype.basePhysicalAttackAtLevel = function(level) {
  const valueAtLevel1 = 10;
  const valuePerLevel = 100;
  return valueAtLevel1 + valuePerLevel * (level - 1);
}

DarkLilyQueen.prototype.basePhysicalDefenseAtLevel = function(level) {
  const valueAtLevel1 = 10;
  const valuePerLevel = 50;
  return valueAtLevel1 + valuePerLevel * (level - 1);
}
