function BattleSelectionScene() {
  this.options = [
    "Fight Formation 1",
    "Fight Formation 2",
    "Fight Formation 3",
    "Fight Formation 4",
    "Fight Formation 5",
    "Fight Formation 6",
    "Fight Formation 7",
    "Back",
  ];
  this.selectedIndex = 0;
  this.inputDelay = 5;
  this.inputDelayTimer = this.inputDelay;

  this.update = function() {
    if (this.inputDelayTimer === 0) {
      var didPressButton = false;

      if (upPressed) {
        this.selectedIndex--;
        if (this.selectedIndex < 0) {
          this.selectedIndex = this.options.length - 1;
        }
        didPressButton = true;
      }
      else if (downPressed) {
        this.selectedIndex++;
        if (this.selectedIndex > this.options.length - 1) {
          this.selectedIndex = 0;
        }
        didPressButton = true;
      }
      else if (confirmPressed()) {
        var selectedOption = this.options[this.selectedIndex];
        if (selectedOption === "Back") {
          nextScene = new MainMenuScene();
        }
        else {
          setupBattleFormationForSelectedOption(selectedOption);
          nextScene = new RPGBattleScene();
        }
        didPressButton = true;
      }

      if (didPressButton) {
        this.inputDelayTimer = this.inputDelay;
      }
    }
    else {
      this.inputDelayTimer--;
    }
  }

  this.draw = function() {
    drawRect(0, 0, GAME_WIDTH, GAME_HEIGHT, '#f8f8f8');

    canvasContext.font = '48px Times';
    drawText('Dexternites', GAME_WIDTH/2, 40, 'black', 'center', 'middle');
    canvasContext.font = '30px Times';
    drawText('The Prototype 2000', GAME_WIDTH/2, 80, 'black', 'center', 'middle');

    canvasContext.font = '20px Times';

    var menuOptionX = 10;
    var menuOptionY = 150;
    for (var i = 0; i < this.options.length; i++) {
      var option = this.options[i];
      var optionText, optionColor;
      if (i === this.selectedIndex) {
        optionText = "> " + option;
        optionColor = "#777777";
      }
      else {
        optionText = "  " + option;
        optionColor = "black";
      }

      drawText(optionText, menuOptionX, menuOptionY, optionColor, 'left', 'top');

      menuOptionY += 40;
    }

    var heroTextX = 300;
    var heroTextY = 150;

    drawText("Your Heroes", heroTextX, heroTextY, 'black', 'left', 'top');
    heroTextY += 40;

    for (var i = 0; i < partyMembers.length; i++) {
      var hero = partyMembers[i];
      drawText(hero.name, heroTextX, heroTextY, 'black', 'left', 'top');

      heroTextY += 30; 
      var heroStatsText = "Level " + hero.level + " HP: " + hero.currentHP + "/" + hero.maxHP;
      drawText(heroStatsText, heroTextX, heroTextY, 'black', 'left', 'top');

      heroTextY += 40;
    }
  }
}
