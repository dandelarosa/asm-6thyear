function setupBattleFormationForSelectedOption(selectedOption) {
  if (selectedOption === "Fight Formation 1") {
    enemies = [
      new BadderGuy(30),
    ];
  }
  else if (selectedOption === "Fight Formation 2") {
    enemies = [
      new BadderGuy(32),
      new Barmander(32),
      new BadderGuy(32),
    ];
  }
  else if (selectedOption === "Fight Formation 3") {
    enemies = [
      new Barmander(40),
      new PizzaToto(40),
      new Barmander(40),
      new PizzaToto(40),
    ];
  }
  else if (selectedOption === "Fight Formation 4") {
    enemies = [
      new Aquarius(42),
      new Aquarius(42),
      new Aquarius(42),
      new Aquarius(42),
    ];
  }
  else if (selectedOption === "Fight Formation 5") {
    enemies = [
      new Sagittarius(45),
      new Sagittarius(45),
      new Sagittarius(45),
    ];
  }
  else if (selectedOption === "Fight Formation 6") {
    enemies = [
      new Gemini(50),
      new Gemini(50),
    ];
  }
  else if (selectedOption === "Fight Formation 7") {
    enemies = [
      new Zankon(60),
    ];
  }
  else {
    // Use as a fallback in case the other formations haven't been defined
    enemies = [
      new BadderGuy(30),
    ];
  }
}
