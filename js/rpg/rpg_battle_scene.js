function RPGBattleScene() {
  this.init = function() {
    var turnManager = new TurnManager();
    turnManager.addCombatantsToQueue(partyMembers);
    turnManager.addCombatantsToQueue(enemies);
    this.turnManager = turnManager;
    this.turnManagerDisplay = new TurnManagerDisplay(turnManager);

    this.currentTurnCombatant = null;
    this.currentMenu = null;
    this.currentAI = null;
    this.currentAnimation = null;

    this.currentDescription = "";
  };
  this.init();

  this.victoryMenu = null;
  this.defeatMenu = null;

  this.update = function() {
    if (this.victoryMenu) {
      this.victoryMenu.update();
      if (this.victoryMenu.done) {
        nextScene = new MainMenuScene();
      }
      return;
    }
    else if (this.defeatMenu) {
      this.defeatMenu.update();
      if (this.defeatMenu.done) {
        makeSureOnePartyMemberIsAlive();
        nextScene = new MainMenuScene();
      }
      return;
    }

    if (this.currentTurnCombatant) {
      if (this.currentMenu) {
        this.currentMenu.update();
        if (this.currentMenu.done) {
          var currentAction = this.currentMenu.selectedAction;
          currentAction.applyEffects();
          this.currentMenu = null;
        }
      }
      else if (this.currentAI) {
        var currentAction = this.currentAI.getSelectedAction();
        currentAction.applyEffects();
        this.currentAI = null;
      }
      else if (this.currentAnimation) {
        if (this.currentAnimation.done) {
          this.currentAnimation = null;
        }
      }
      else {
        this.turnManager.removeDeadCombatants();
        this.turnManager.addCombatantToQueue(this.currentTurnCombatant);
        this.currentTurnCombatant = null;
        this.turnManager.currentCombatant = null;
      }
    }
    else if (youWonTheBattle()) {
      this.victoryMenu = new VictoryMenu();
    }
    else if (youLostTheBattle()) {
      this.defeatMenu = new DefeatMenu();
    }
    else {
      // Wait for the next character to make a move
      var currentTurnCombatant = this.turnManager.popCombatant();
      if (currentTurnCombatant) {
        this.currentTurnCombatant = currentTurnCombatant;
        if (currentTurnCombatant.canControl) {
          this.currentMenu = new MainBattleMenu(currentTurnCombatant);
        }
        else {
          this.currentAI = new EnemyAI(currentTurnCombatant);
        }
      }
      else {
        this.turnManager.tick();
      }
    }
  };

  this.draw = function() {
    drawRect(0, 0, GAME_WIDTH, GAME_HEIGHT, '#f8f8f8');
    canvasContext.drawImage(placeholderBackgroundImage, 0, 0);

    var textX = 20;
    var textY = 20;
    for (var i = 0; i < partyMembers.length; i++) {
      var partyMember = partyMembers[i];
      canvasContext.font = '20px Times';
      drawText(partyMember.name, textX, textY, 'black', 'left', 'top');
      var HPText = 'HP: ' + partyMember.currentHP + ' / ' + partyMember.maxHP;
      drawText(HPText, textX + 200, textY, 'black', 'right', 'top');
      textY += 30;
    }

    textX = 320;
    textY = 20;
    for (var i = 0; i < enemies.length; i++) {
      var enemy = enemies[i];
      canvasContext.font = '20px Times';
      var enemyText = enemy.name + " Lv. " + enemy.level;
      drawText(enemyText, textX, textY, 'black', 'left', 'top');
      var HPText = 'HP: ' + enemy.currentHP + ' / ' + enemy.maxHP;
      drawText(HPText, textX + 300, textY, 'black', 'right', 'top');
      textY += 30;
    }

    this.turnManagerDisplay.draw();

    var heroX = 80;
    var heroY = 160;
    var heroStepX = -20;
    var heroStepY = 60;

    for (var i = 0; i < partyMembers.length; i++) {
      var partyMember = partyMembers[i];
      if (partyMember.currentHP > 0) {
        canvasContext.drawImage(placeholderHeroImage, heroX, heroY, 64, 96);
      }
      heroX += heroStepX;
      heroY += heroStepY;
    }

    var enemyX = 496;
    var enemyY = 160;
    var enemyStepX = 20;
    var enemyStepY = 60;

    for (var i = 0; i < enemies.length; i++) {
      var enemy = enemies[i];
      if (enemy.currentHP > 0) {
        canvasContext.drawImage(placeholderEnemyImage, enemyX, enemyY, 64, 96);
      }
      enemyX += enemyStepX;
      enemyY += enemyStepY;
    }

    this.currentMenu && this.currentMenu.draw();

    this.victoryMenu && this.victoryMenu.draw();
    this.defeatMenu && this.defeatMenu.draw();
  };
}
