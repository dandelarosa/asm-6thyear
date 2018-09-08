function saveGameToSlot(slotName) {
  var saveState = getSaveState();
  localStorageHelper.setObject(slotName, saveState);
}

function loadGameFromSlot(slotName) {
  var saveState = localStorageHelper.getObject(slotName);
  if (!saveState) {
    console.log("Error: save state not found.");
    return;
  }
  loadSaveState(saveState);
}

function getSaveState() {
  var saveState = {
    partyMembers: getPartyMembersSaveState(),
  };
  return saveState;
}

function loadSaveState(saveState) {
  var partyMembersSaveState = saveState.partyMembers;
  loadPartyMembersSaveState(partyMembersSaveState);
}
