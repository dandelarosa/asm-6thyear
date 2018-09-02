function Hero(level) {
  Combatant.call(this, level);

  this.getSaveState = function() {
    var saveState = {
      // Name is used to determine which hero class to load
      name: this.name,
      level: this.level,
      currentHP: this.currentHP,
    };
    return saveState;
  }

  this.loadSaveState = function(saveState) {
    // All stats should've been calculated previously
    this.currentHP = saveState.currentHP;
  }
}

Hero.prototype = Object.create(Combatant.prototype);
Hero.prototype.constructor = Hero;

/**
 * Call this instead of Hero.loadSaveState to ensure that the correct hero subclass gets loaded.
 */
function heroFromSaveState(saveState) {
  var heroName = saveState.name;
  var heroLevel = saveState.level;
  var hero = new window[heroName](heroLevel);
  if (hero) {
    hero.loadSaveState(saveState);
  }

  return hero;
}

Hero.prototype.isEnemy = false;
Hero.prototype.canControl = true;

// These properties should be customized per hero

Hero.prototype.name = "Hero";

Hero.prototype.ticksToNextTurn = 40;
