function TurnManagerDisplay(turnManager) {
  this.turnManager = turnManager;

  this.draw = function() {
    var currentCombatant = this.turnManager.currentCombatant;
    var currentDescription = currentCombatant ? currentCombatant.name + "'s Turn" : "";
    drawText(currentDescription, GAME_WIDTH/2, 410, 'black', 'center', 'top');

    var turnQueueX = 32;
    var turnQueueY = 440;
    var turnQueueWidth = 32;
    var turnQueueHeight = 32;
    var turnQueueStepX = 64;
    var combatantColor;
    // Handle case where currentCombatant is undefined
    if (!currentCombatant) {
      combatantColor = 'white';
    }
    else if (currentCombatant.isEnemy) {
      combatantColor = '#FA8072';
    }
    else {
      combatantColor = '#90ee90';
    }
    drawRect(turnQueueX, turnQueueY, turnQueueWidth, turnQueueHeight, combatantColor);

    turnQueueX += turnQueueStepX;

    var turnTimes = Object.keys(this.turnManager.turnQueue);

    for (var i = 0; i < turnTimes.length; i++) {
      var turnTime = turnTimes[i];
      var combatantAtTime = this.turnManager.turnQueue[turnTime];
      var combatantColor = combatantAtTime.isEnemy ? '#FA8072' : '#90ee90';
      drawRect(turnQueueX, turnQueueY, turnQueueWidth, turnQueueHeight, combatantColor);
      turnQueueX += turnQueueStepX;
    }
  }
}
