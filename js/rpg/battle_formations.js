function setupBattleFormationForSelectedOption(selectedOption) {
  if (selectedOption === "Fight Formation 1") {
    enemies = [
      new Sproutmon(3),
      new Sproutmon(3),
      new Sproutmon(3),
    ];
  }
  else if (selectedOption === "Fight Formation 2") {
    enemies = [
      new Sproutmon(3),
      new FlyingBook(5),
      new Sproutmon(3),
    ];
  }
  else if (selectedOption === "Fight Formation 3") {
    enemies = [
      new Sproutmon(5),
      new Sproutmon(5),
      new Sproutmon(5),
      new Sproutmon(5),
    ];
  }
  else if (selectedOption === "Fight Formation 4") {
    enemies = [
      new Sproutmon(5),
      new Bulbmon(7),
      new Sproutmon(5),
      new Bulbmon(7),
    ];
  }
  else if (selectedOption === "Fight Formation 5") {
    enemies = [
      new Bulbmon(7),
      new BeeWarrior(7),
      new Bulbmon(7),
    ];
  }
  else if (selectedOption === "Fight Formation 6") {
    enemies = [
      new BeeWarrior(9),
      new DarkLilyQueen(12),
      new BeeWarrior(9),
    ];
  }
  else if (selectedOption === "Fight Formation 7") {
    enemies = [
      new BaddestGuy(15),
      new BaddestGuy(15),
      new BaddestGuy(15),
      new BaddestGuy(15),
    ];
  }
  else {
    // Use as a fallback in case the other formations haven't been defined
    enemies = [
      new BadderGuy(30),
    ];
  }
}
