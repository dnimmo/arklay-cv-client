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
        , item: 'TEST_ITEM'
        , availableDirections: 
          [ { 
              text: 'Enter'
              , room: 'TEST'
              , itemsThatCanBeUsed: ['TEST_ITEM']
          } 
          ]
        , descriptionWhenExamined : 'This was where I found the test item'
        , unlockRequirements: null
        , messageOnUnsuccessfulEntryAttempt: null
    }
    , TEST: {
        name: 'Test'
        , intro: 'Now you\'re inside. Well done!'
        , surroundings: 'There\'s a large door behind you.'
        , surroundingsWhenItemPickedUp: null
        , surroundingsWhenItemUsed: null
        , item: null
        , availableDirections: 
          [ { 
              text: 'North'
              , room: 'START'
              , itemsThatCanBeUsed: []
          } 
          , { 
              text: 'West'
              , room: 'START'
              , itemsThatCanBeUsed: []
          } 
          , { 
              text: 'East'
              , room: 'START'
              , itemsThatCanBeUsed: []
          }, 
          { 
              text: 'South'
              , room: 'START'
              , itemsThatCanBeUsed: []
          }  
          ]
        , descriptionWhenExamined : 'This place is weird.'
        , unlockRequirements: ['TEST_ITEM']
        , messageOnUnsuccessfulEntryAttempt: 'The door is locked! Rude.'
    }
};


export default rooms;