function AttackAction(user, target) {
  this.init = function() {
    this.user = user;
    this.target = target;
  };
  this.init();

  this.applyEffects = function() {
    const attackPower = 100;
    const attackDefenseRatio = this.user.currentPhysicalAttack / this.target.currentPhysicalDefense;
    var damageDealt = Math.ceil(attackPower * attackDefenseRatio);
    this.target.dealDamage(damageDealt);
    // TODO: delete debugging log
    var debugText = this.user.name + " attacks " + this.target.name + " for " + damageDealt + " damage.";
    console.log(debugText);
  }
}
