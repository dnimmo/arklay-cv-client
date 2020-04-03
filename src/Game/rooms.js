const rooms = {
    START: { 
        name : 'Start'
        , intro : 'It\'s dark, and cold. You\'re soaked through. You struggle to remember where you are, let alone how you ended up here. What were you doing again?'
        , surroundings : 'There\'s a large door in front of you.'
        , surroundingsWhenItemPickedUp : null
        , surroundingsWhenItemUsed : null
        , item : null
        , availableDirections : 
          [ { 
              text: 'Enter'
              , room: 'TEST' 
          } 
          ]
        , descriptionWhenExamined : ''
    }
    , TEST: {
        intro: 'Does this work?'
        , surroundings: 'Test room'
        , availableDirections : 
          [ { 
              text: 'Go back'
              , room: 'START' 
          }
          ]
    }
};


export default rooms;