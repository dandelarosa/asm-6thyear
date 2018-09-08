function Combatant(level) {
  // These properties are calculated using the combatant's level
  this.maxHP = 0;

  // Transient stats
  this.currentHP = 0;
  this.currentPhysicalAttack = 0;
  this.currentPhysicalDefense = 0;

  this.setLevel = function(level) {
    this.level = level;
    this.maxHP = this.baseHPAtLevel(level);

    // Note that this calculation doesn't take equipment, status effects, etc. into account.
    this.currentPhysicalAttack = this.basePhysicalAttackAtLevel(level);
    this.currentPhysicalDefense = this.basePhysicalDefenseAtLevel(level);
  }
  this.setLevel(level);

  // Don't heal on level up (for now)
  this.currentHP = this.maxHP;

  /**
   * Use this function to deal damage to a combatant.
   * @param {number} amountDealt The amount of damage dealt to the combatant.
   */
  this.dealDamage = function(amountDealt) {
    this.currentHP -= amountDealt;
    if (this.currentHP < 0) {
      this.currentHP = 0;
    }
  }
}

// Below are properties to be overridden for each combatant subclass
Combatant.prototype.canControl = false;

Combatant.prototype.baseHPAtLevel = function(level) {
  // Subclasses should implement
  return 100;
}

Combatant.prototype.basePhysicalAttackAtLevel = function(level) {
  // Subclasses should implement
  return 10;
}

Combatant.prototype.basePhysicalDefenseAtLevel = function(level) {
  // Subclasses should implement
  return 10;
}
