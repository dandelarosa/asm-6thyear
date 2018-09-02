function TurnManager() {
  this.init = function() {
    this.battleTimer = 0;
    this.turnQueue = {};
    this.currentCombatant = null;
  };
  this.init();

  this.addCombatantsToQueue = function(combatants) {
    for (var i = 0; i < combatants.length; i++) {
      var combatant = combatants[i];
      this.addCombatantToQueue(combatant);
    }
  }

  this.addCombatantToQueue = function (combatant) {
    var turnTime = this.battleTimer + combatant.ticksToNextTurn;
      // Make sure you don't accidentally override anyone who's already in the queue
      var possibleConflict = this.turnQueue[turnTime];
      while (this.turnQueue[turnTime]) {
        turnTime++;
        possibleConflict = this.turnQueue[turnTime];
      }
      this.turnQueue[turnTime] = combatant;
  }

  this.popCombatant = function() {
    var combatant = this.turnQueue[this.battleTimer];
    delete this.turnQueue[this.battleTimer];
    this.currentCombatant = combatant;
    return combatant;
  }

  this.tick = function() {
    while (!this.getCombatantForTime(this.battleTimer)) {
      this.battleTimer++;
    }
  }

  this.getCombatantForTime = function(time) {
    var nextCombatant = this.turnQueue[this.battleTimer];
    if (!nextCombatant) {
      return null;
    }
    else if (nextCombatant.currentHP <= 0) {
      console.log("Oh no! " + nextCombatant.name + " is dead. Removing from queue.");
      return null;
    }
    return nextCombatant;
  }

  this.removeDeadCombatants = function() {
    var turnTimes = Object.keys(this.turnQueue);

    for (var i = 0; i < turnTimes.length; i++) {
      var turnTime = turnTimes[i];
      var combatantAtTime = this.turnQueue[turnTime];
      if (combatantAtTime.currentHP <= 0) {
        console.log("Oh no! " + combatantAtTime.name + " is dead. Removing from queue.");
        delete this.turnQueue[turnTime];
      }
    }
  }
}
