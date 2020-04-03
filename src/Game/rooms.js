export 
const isUnlocked =
  ({ room, itemsUsed }) => {
      const { unlockRequirements } = room;

      const unlockRequirementsMet =
        !unlockRequirements
            ? true
            : unlockRequirements.every(
                x =>
                    itemsUsed.includes(x)
            );

      return unlockRequirementsMet;
  };
    

const rooms = {
    START: { 
        name: 'Start'
        , intro: 'It\'s dark, and cold. You\'re soaked through. You struggle to remember where you are, let alone how you ended up here. What were you doing again?'
        , surroundings: 'There\'s a large door in front of you.'
        , surroundingsWhenItemPickedUp: null
        , surroundingsWhenItemUsed: null
        , item: null
        , availableDirections: 
          [ { 
              text: 'Enter'
              , room: 'TEST'
              , itemsThatCanBeUsed: ['TEST_ITEM']
          } 
          ]
        , descriptionWhenExamined : 'It\'s really cold out here.'
        , unlockRequirements: null
        , messageOnUnsuccessfulEntryAttempt: null
    }
    , TEST: {
        intro: 'Does this work?'
        , surroundings: 'Test room'
        , availableDirections: 
          [ { 
              text: 'Go back'
              , room: 'START'
              , itemsThatCanBeUsed: null
          }
          ]
        , unlockRequirements: ['TEST_ITEM']
        , messageOnUnsuccessfulEntryAttempt: 'What is the magic word?'
    }
};


export default rooms;