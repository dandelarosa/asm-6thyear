function Enemy(level) {
  Combatant.call(this, level);
}

Enemy.prototype = Object.create(Combatant.prototype);
Enemy.prototype.constructor = Enemy;

Enemy.prototype.isEnemy = true;
Enemy.prototype.canControl = false;

// These properties should be customized per enemy

Enemy.prototype.name = "Badder Guy";

Enemy.prototype.ticksToNextTurn = 100;
