export
const defaultUnsuccessfulEntryAttemptMessage =
  'Hm, it seems you can\'t go that way.';


export 
const isUnlocked =
  ({ room, itemsUsed } : { room : Room, itemsUsed : string[] }) : boolean => {
      const { unlockRequirements } = room;

      const unlockRequirementsMet =
        !unlockRequirements
            ? true
            : unlockRequirements.every(
                (x : string) =>
                    itemsUsed.includes(x)
            );

      return unlockRequirementsMet;
  };
 
  
export
const anItemCanBeUsed = 
  ({ availableDirections } : { availableDirections : Direction[] }) : boolean => 
      availableDirections
          .some(({itemsThatCanBeUsed}) => itemsThatCanBeUsed.length > 0);

          
type RoomKey = 
  'START' 
  | 'ENTRANCE'
  | 'UPSTAIRS_FOYER'
  | 'UPSTAIRS_HALLWAY_ONE'
  | 'UPSTAIRS_STUDY'
  | 'UPSTAIRS_SECRET_ROOM_THREE'
  | 'UPSTAIRS_STAIRWAY_THREE'
  | 'UPSTAIRS_MASTER_BEDROOM'
  | 'UPSTAIRS_MASTER_EN_SUITE'
  | 'UPSTAIRS_STAIRWAY_TWO'
  | 'UPSTAIRS_HALLWAY_TWO'
  | 'UPSTAIRS_ART_GALLERY'
  | 'UPSTAIRS_HALLWAY_THREE'
  | 'UPSTAIRS_AQUARIUM'
  | 'UPSTAIRS_LIBRARY'
  | 'UPSTAIRS_HALLWAY_FOUR'
  | 'UPSTAIRS_SECOND_BEDROOM'
  | 'UPSTAIRS_SECOND_BATHROOM'
  | 'UPSTAIRS_THIRD_BEDROOM'
  | 'UPSTAIRS_TROPHY_ROOM'
  | 'DINING_HALL'
  | 'HALLWAY_ONE'
  | 'HALLWAY_TWO'
  | 'UTILITY_ROOM'
  | 'KITCHEN'
  | 'FREEZER'
  | 'WASTE_DISPOSAL'
  | 'HALLWAY_FOUR'
  | 'STAIRWAY_THREE'
  | 'MUSIC_ROOM'
  | 'HALLWAY_FIVE'
  | 'GYM'
  | 'SWIMMING_POOL'
  | 'SHOWERS'
  | 'SECRET_ROOM_ONE'
  | 'STATUE_ROOM'
  | 'SECRET_ROOM_TWO'
  | 'HALLWAY_THREE'
  | 'GARAGE'
  | 'SERVANTS_QUARTERS'
  | 'SERVANTS_BATHROOM'
  | 'STAIRWAY_TWO'
  | 'BASEMENT_STAIRWAY'
  | 'BASEMENT_STORAGE'
  | 'BASEMENT_STORAGE_TWO'
  | 'BASEMENT_ITEM_ROOM'
  | 'BASEMENT_WASTE_DISPOSAL'
  | 'BASEMENT_WINE_CELLAR'
  | 'BASEMENT_LAB_ENTRANCE'
  | 'END'


type DirectionDisplayText = 
  'Enter' 
  | 'North' 
  | 'East' 
  | 'West' 
  | 'South' 
  | 'Upstairs' 
  | 'Downstairs' 
  | 'End'


type Direction = 
  { text: string, 
    room: string, 
    itemsThatCanBeUsed: string[] | never[]
  }


type Room = 
  { name: string,
    intro: string,
    surroundings: string,
    surroundingsWhenItemPickedUp: string | null,
    surroundingsWhenItemUsed: string | null,
    item: string | null,
    availableDirections: Direction[],
    descriptionWhenExamined: string,
    unlockRequirements: string[] | null,
    messageOnUnsuccessfulEntryAttempt: string | null
}


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
              , room: 'ENTRANCE'
              , itemsThatCanBeUsed: []
          } 
          ]
        , descriptionWhenExamined : 'You should probably go inside...'
        , unlockRequirements: null
        , messageOnUnsuccessfulEntryAttempt: null
    }
    , ENTRANCE: { 
        name: 'Entrance'
        , intro: 'You are in the dim foyer of what appears to be a mansion.'
        , surroundings: 'There is a grand staircase here, as well as a couple of doors.'
        , surroundingsWhenItemPickedUp: null
        , surroundingsWhenItemUsed: null
        , item: null
        , availableDirections: 
            [ 
                { 
                    text: 'Upstairs'
                    , room: 'UPSTAIRS_FOYER'
                    , itemsThatCanBeUsed: []
                } 
                , { text: 'West'
                    , room: 'DINING_HALL'
                    , itemsThatCanBeUsed: []
                }
                , { text: 'East'
                    , room: 'HALLWAY_ONE'
                    , itemsThatCanBeUsed: []
                }
            ]
        , descriptionWhenExamined : 'This room is enormous. There are a number of large paintings on the walls.'
        , unlockRequirements: null
        , messageOnUnsuccessfulEntryAttempt: null
    }
    , UPSTAIRS_FOYER: { 
        name: 'Upstairs foyer'
        , intro: 'You\'re at the top of a staircase.'
        , surroundings: 'The foyer looks huge from up here. You can\'t imagine anyone actually living here.'
        , surroundingsWhenItemPickedUp: null
        , surroundingsWhenItemUsed: null
        , item: null
        , availableDirections: 
            [ { 
                text: 'Downstairs'
                , room: 'ENTRANCE'
                , itemsThatCanBeUsed: []
            } 
            , { text: 'North'
                , room: 'UPSTAIRS_HALLWAY_ONE'
                , itemsThatCanBeUsed: []
            }
            ]
        , descriptionWhenExamined : 'There\'s a soft breeze coming in from a crack in one of the windows.'
        , unlockRequirements: null
        , messageOnUnsuccessfulEntryAttempt: null
    }
    , UPSTAIRS_HALLWAY_ONE: { 
        name: 'Upstairs hallway one'
        , intro: 'A hallway stretches out ahead. It\'s too dark to make out what the artwork lining the walls is depicting.'
        , surroundings: 'You can see three doors from here, though not especially well.'
        , surroundingsWhenItemPickedUp: null
        , surroundingsWhenItemUsed: null
        , item: null
        , availableDirections: 
            [ { 
                text: 'West'
                , room: 'UPSTAIRS_STUDY'
                , itemsThatCanBeUsed: []
            } 
            , { text: 'East'
                , room: 'UPSTAIRS_THIRD_BEDROOM'
                , itemsThatCanBeUsed: []
            }
            , { text: 'South'
                , room: 'UPSTAIRS_FOYER'
                , itemsThatCanBeUsed: []
            }
            ]
        , descriptionWhenExamined : 'There really isn\'t a lot to see here.'
        , unlockRequirements: null
        , messageOnUnsuccessfulEntryAttempt: null
    }
    , UPSTAIRS_STUDY: { 
        name: 'Upstairs study'
        , intro: 'A study. There are huge bookcases, that seem to be filled mostly with scientific journals, although there appear to be a few religious texts in here too.'
        , surroundings: 'An old computer terminal is on in the corner. Has someone been here recently?'
        , surroundingsWhenItemPickedUp: null
        , surroundingsWhenItemUsed: null
        , item: null
        , availableDirections: 
            [ { 
                text: 'West'
                , room: 'UPSTAIRS_SECRET_ROOM_THREE'
                , itemsThatCanBeUsed: ['KEY_CODE']
            } 
            , { text: 'East'
                , room: 'UPSTAIRS_HALLWAY_ONE'
                , itemsThatCanBeUsed: []
            }
            , { text: 'North'
                , room: 'UPSTAIRS_HALLWAY_TWO'
                , itemsThatCanBeUsed: []
            }
            ]
        , descriptionWhenExamined : 'The room is bathed in a soft glow from the terminal.'
        , unlockRequirements: null
        , messageOnUnsuccessfulEntryAttempt: null
    }
    , UPSTAIRS_SECRET_ROOM_THREE: { 
        name: 'Upstairs secret room'
        , intro: 'A small room with a podium in the center.'
        , surroundings: 'A crest depicting a lion sits neatly on the podium. It looks important.'
        , surroundingsWhenItemPickedUp: 'The room is completely empty. The podium stands bare.'
        , surroundingsWhenItemUsed: null
        , item: 'LION_CREST'
        , availableDirections: 
            [ { text: 'East'
                , room: 'UPSTAIRS_STUDY'
                , itemsThatCanBeUsed: []
            }
            ]
        , descriptionWhenExamined : 'This was where I found the Lion Crest.'
        , unlockRequirements: ['KEY_CODE']
        , messageOnUnsuccessfulEntryAttempt: null
    }
    , UPSTAIRS_STAIRWAY_THREE: { 
        name: 'Upstairs secret room'
        , intro: 'The top of a stairway. To the North is a fancy door with three indentations, and there is a much more plain door to the East'
        , surroundings: 'What could be behind the door?'
        , surroundingsWhenItemPickedUp: null
        , surroundingsWhenItemUsed: 'Looks like it needs three crests to open.'
        , item: null
        , availableDirections: 
            [ { text: 'North'
                , room: 'UPSTAIRS_MASTER_BEDROOM'
                , itemsThatCanBeUsed: ['LION_CREST', 'WOLF_CREST', 'EAGLE_CREST']
            }
            , { text: 'East'
                , room: 'UPSTAIRS_HALLWAY_TWO'
                , itemsThatCanBeUsed: []
            }
            , { text: 'Downstairs'
                , room: 'STAIRWAY_THREE'
                , itemsThatCanBeUsed: []
            }
            ]
        , descriptionWhenExamined : 'This door is something else. Where do you even get something like this?'
        , unlockRequirements: null
        , messageOnUnsuccessfulEntryAttempt: null
    }
    , UPSTAIRS_MASTER_BEDROOM: { 
        name: 'Upstairs master bedroom'
        , intro: 'A fantastically ostentatious master bedroom, with a roaring fireplace and a huge four-poster bed.'
        , surroundings: 'There are two doors here.'
        , surroundingsWhenItemPickedUp: null
        , surroundingsWhenItemUsed: null
        , item: null
        , availableDirections: 
            [ { text: 'West'
                , room: 'UPSTAIRS_MASTER_EN_SUITE'
                , itemsThatCanBeUsed: []
            }
            , { text: 'South'
                , room: 'UPSTAIRS_STAIRWAY_THREE'
                , itemsThatCanBeUsed: []
            }
            ]
        , descriptionWhenExamined : 'It\'s so much hotter in here than anywhere else. The fire must have been burning for a while now.'
        , unlockRequirements: ['LION_CREST', 'WOLF_CREST', 'EAGLE_CREST']
        , messageOnUnsuccessfulEntryAttempt: 'Hm, looks like it needs three crests to open.'
    }
    , UPSTAIRS_MASTER_EN_SUITE: { 
        name: 'Upstairs master en-suite'
        , intro: 'A large en-suite.'
        , surroundings: 'There\'s a very expensive, but sadly empty, bottle of wine sitting by the sink.'
        , surroundingsWhenItemPickedUp: 'Empty wine glasses stand on the floor by the bath.'
        , surroundingsWhenItemUsed: null
        , item: 'WINE_BOTTLE'
        , availableDirections: 
            [ { text: 'East'
                , room: 'UPSTAIRS_MASTER_BEDROOM'
                , itemsThatCanBeUsed: []
            }
            ]
        , descriptionWhenExamined : 'This en-suite is bigger than every room in my house. What a mansion!'
        , unlockRequirements: null
        , messageOnUnsuccessfulEntryAttempt: null
    }
    , UPSTAIRS_STAIRWAY_TWO: { 
        name: 'Upstairs stairway'
        , intro: 'The top of a small staircase. It\'s eerily quiet here.'
        , surroundings: 'There\'s a single door to the West.'
        , surroundingsWhenItemPickedUp: null
        , surroundingsWhenItemUsed: null
        , item: null
        , availableDirections: 
            [ { text: 'West'
                , room: 'UPSTAIRS_HALLWAY_FOUR'
                , itemsThatCanBeUsed: []
            }
            , { text: 'Downstairs'
                , room: 'STAIRWAY_TWO'
                , itemsThatCanBeUsed: []
            }
            ]
        , descriptionWhenExamined : 'This staircase doesn\'t seem to fit with the rest of the house, as if it was built much later.'
        , unlockRequirements: null
        , messageOnUnsuccessfulEntryAttempt: null
    }
    , UPSTAIRS_HALLWAY_TWO: { 
        name: 'Upstairs hallway'
        , intro: 'A hallway. How big is this place?'
        , surroundings: 'There are rooms in every direction here. No wonder everything\'s thick with dust.'
        , surroundingsWhenItemPickedUp: null
        , surroundingsWhenItemUsed: null
        , item: null
        , availableDirections: 
            [ 
                { text: 'West'
                    , room: 'UPSTAIRS_STAIRWAY_THREE'
                    , itemsThatCanBeUsed: []
                }
                , { text: 'North'
                    , room: 'UPSTAIRS_TROPHY_ROOM'
                    , itemsThatCanBeUsed: []
                }
                , { text: 'East'
                    , room: 'UPSTAIRS_ART_GALLERY'
                    , itemsThatCanBeUsed: []
                }
                , { text: 'South'
                    , room: 'UPSTAIRS_STUDY'
                    ,  itemsThatCanBeUsed: []
                }
            ]
        , descriptionWhenExamined : 'It\'s easy to feel lost here. Every door in this room looks the same.'
        , unlockRequirements: null
        , messageOnUnsuccessfulEntryAttempt: null
    }
    , UPSTAIRS_ART_GALLERY: { 
        name: 'Upstairs art gallery'
        , intro: 'An art gallery'
        , surroundings: 'This entire building is full of paintings, but the ones in this room are crazy. They all seem to depict demons and people being tortured. Guess they wanted to stick with a theme.'
        , surroundingsWhenItemPickedUp: null
        , surroundingsWhenItemUsed: null
        , item: null
        , availableDirections: 
            [ { text: 'West'
                , room: 'UPSTAIRS_HALLWAY_TWO'
                , itemsThatCanBeUsed: []
            }
            , { text: 'East'
                , room: 'UPSTAIRS_HALLWAY_THREE'
                , itemsThatCanBeUsed: []
            }
            ]
        , descriptionWhenExamined : 'It feels like there are a hundred pairs of eyes. Watching.'
        , unlockRequirements: null
        , messageOnUnsuccessfulEntryAttempt: null
    }
    , UPSTAIRS_HALLWAY_THREE: { 
        name: 'Upstairs hallway'
        , intro: 'A cavernous hallway'
        , surroundings: 'There are doors in every direction, but the door to the North is boarded shut.'
        , surroundingsWhenItemPickedUp: null
        , surroundingsWhenItemUsed: 'There are doors in every direction.'
        , item: null
        , availableDirections: 
            [ { text: 'West'
                , room: 'UPSTAIRS_ART_GALLERY'
                , itemsThatCanBeUsed: []
            }
            , { text: 'North'
                , room: 'UPSTAIRS_AQUARIUM'
                , itemsThatCanBeUsed: ['CROWBAR']
            }
            , { text: 'East'
                , room: 'UPSTAIRS_HALLWAY_FOUR'
                , itemsThatCanBeUsed: []
            }
            , { text: 'South'
                , room: 'UPSTAIRS_LIBRARY'
                ,  itemsThatCanBeUsed: []
            }
            ]
        , descriptionWhenExamined : 'Why board a room shut? This is all a bit weird.'
        , unlockRequirements: null
        , messageOnUnsuccessfulEntryAttempt: null
    }
    , UPSTAIRS_AQUARIUM: { 
        name: 'Upstairs aquarium'
        , intro: 'A softly-lit aquarium'
        , surroundings: 'There are a number of exotic fish here. Unfortunately, they look like they\'ve all been dead for a while. But there is a small key in the bottom of one of the tanks.'
        , surroundingsWhenItemPickedUp: 'The air in here is crisp, and salty. How long have the fish been dead though? What happened in this house?'
        , surroundingsWhenItemUsed: null
        , item: 'UTILITY_KEY'
        , availableDirections: 
            [ { text: 'South'
                , room: 'UPSTAIRS_HALLWAY_THREE'
                , itemsThatCanBeUsed: []
            }
            ]
        , descriptionWhenExamined : 'This was where I found the Utility Key.'
        , unlockRequirements: ['CROWBAR']
        , messageOnUnsuccessfulEntryAttempt: null
    }
    , UPSTAIRS_LIBRARY: {
        name: 'Upstairs library'
        , intro: 'A library'
        , surroundings: 'There are many, many books in here. There isn\'t time to look through them all. However, some sheet music appears to be sticking out from one of the shelves.'
        , surroundingsWhenItemPickedUp: 'There are many, many books in here. There isn\'t time to look through them all.'
        , surroundingsWhenItemUsed: null
        , item: 'SHEET_MUSIC'
        , availableDirections: 
            [ { text: 'North'
                , room: 'UPSTAIRS_HALLWAY_THREE'
                , itemsThatCanBeUsed: []
            }
            ]
        , descriptionWhenExamined : 'This was where I found the Sheet Music.'
        , unlockRequirements: null
        , messageOnUnsuccessfulEntryAttempt: null
    }
    , UPSTAIRS_HALLWAY_FOUR: {
        name: 'Upstairs hallway'
        , intro: 'A hallway.'
        , surroundings: 'It\'s amazing that all of these hallways look so different from one another.'
        , surroundingsWhenItemPickedUp: null
        , surroundingsWhenItemUsed: null
        , item: null
        , availableDirections: 
            [ { text: 'West'
                , room: 'UPSTAIRS_HALLWAY_THREE'
                , itemsThatCanBeUsed: []
            }
            , { text: 'East'
                , room: 'UPSTAIRS_STAIRWAY_TWO'
                , itemsThatCanBeUsed: []
            }
            , { text: 'South'
                , room: 'UPSTAIRS_SECOND_BEDROOM'
                , itemsThatCanBeUsed: []
            }
            ]
        , descriptionWhenExamined : 'It feels as if I\'m being watched...'
        , unlockRequirements: null
        , messageOnUnsuccessfulEntryAttempt: null
    }
    , UPSTAIRS_SECOND_BEDROOM: {
        name: 'Upstairs second bedroom'
        , intro: 'A well-furnished bedroom.'
        , surroundings: 'It looks like this room has never been used. There\'s an en-suite to the South, and a door leading to a hallway to the North.'
        , surroundingsWhenItemPickedUp: null
        , surroundingsWhenItemUsed: null
        , item: null
        , availableDirections: 
            [ { text: 'North'
                , room: 'UPSTAIRS_HALLWAY_FOUR'
                , itemsThatCanBeUsed: []
            }
            , { text: 'South'
                , room: 'UPSTAIRS_SECOND_BATHROOM'
                , itemsThatCanBeUsed: []
            }
            ]
        , descriptionWhenExamined : 'I guess they don\'t have many guests here.'
        , unlockRequirements: null
        , messageOnUnsuccessfulEntryAttempt: null
    }
    , UPSTAIRS_SECOND_BATHROOM: {
        name: 'Upstairs second bathroom'
        , intro: 'A "Jack and Jill" bathroom, connecting two bedrooms.'
        , surroundings: 'You don\'t see these very often. It looks very fancy, but the water isn\'t running.'
        , surroundingsWhenItemPickedUp: null
        , surroundingsWhenItemUsed: null
        , item: null
        , availableDirections: 
            [ { text: 'North'
                , room: 'UPSTAIRS_SECOND_BEDROOM'
                , itemsThatCanBeUsed: []
            }
            , { text: 'West'
                , room: 'UPSTAIRS_THIRD_BEDROOM'
                , itemsThatCanBeUsed: []
            }
            ]
        , descriptionWhenExamined : 'There\'s a foul smell in the air in this room.'
        , unlockRequirements: null
        , messageOnUnsuccessfulEntryAttempt: null
    }
    , UPSTAIRS_THIRD_BEDROOM: {
        name: 'Upstairs third bedroom'
        , intro: 'A bedroom.'
        , surroundings: 'It\'s surprisingly messy. It looks like something terrible happened in here...'
        , surroundingsWhenItemPickedUp: null
        , surroundingsWhenItemUsed: null
        , item: null
        , availableDirections: 
            [ { text: 'West'
                , room: 'UPSTAIRS_HALLWAY_ONE'
                , itemsThatCanBeUsed: []
            }
            , { text: 'East'
                , room: 'UPSTAIRS_SECOND_BATHROOM'
                , itemsThatCanBeUsed: []
            }
            ]
        , descriptionWhenExamined : 'Is that...blood?'
        , unlockRequirements: null
        , messageOnUnsuccessfulEntryAttempt: null
    }
    , UPSTAIRS_TROPHY_ROOM: {
        name: 'Upstairs trophy room'
        , intro: 'A trophy room.'
        , surroundings: 'There are various stuffed beasts adorning the walls. It\'s very chilling.'
        , surroundingsWhenItemPickedUp: null
        , surroundingsWhenItemUsed: null
        , item: null
        , availableDirections: 
            [ { text: 'South'
                , room: 'UPSTAIRS_HALLWAY_TWO'
                , itemsThatCanBeUsed: []
            }
            ]
        , descriptionWhenExamined : 'I hope my head doesn\'t end up in here too.'
        , unlockRequirements: null
        , messageOnUnsuccessfulEntryAttempt: null
    }
    , DINING_HALL: {
        name: 'Dining hall'
        , intro: 'A large dining hall.'
        , surroundings: 'A grandfather clock is steadily ticking, its sound echoing through the room.'
        , surroundingsWhenItemPickedUp: null
        , surroundingsWhenItemUsed: null
        , item: null
        , availableDirections: 
            [ { text: 'North'
                , room: 'HALLWAY_TWO'
                , itemsThatCanBeUsed: []
            }
            , { text: 'East'
                , room: 'ENTRANCE'
                , itemsThatCanBeUsed: []
            }
            ]
        , descriptionWhenExamined : 'There\'s a pool of blood on the floor...'
        , unlockRequirements: null
        , messageOnUnsuccessfulEntryAttempt: null
    }
    , HALLWAY_ONE: {
        name: 'Hallway'
        , intro: 'A short hallway.'
        , surroundings: 'You get a strange feeling. Are you alone? It\'s quiet, but this place is so big, it\'s hard to be sure.'
        , surroundingsWhenItemPickedUp: null
        , surroundingsWhenItemUsed: null
        , item: null
        , availableDirections: 
            [ { text: 'North'
                , room: 'STATUE_ROOM'
                , itemsThatCanBeUsed: []
            }
            , { text: 'West'
                , room: 'ENTRANCE'
                , itemsThatCanBeUsed: []
            }
            ]
        , descriptionWhenExamined : 'There\'s nothing to see here, somehow that doesn\'t feel reassuring.'
        , unlockRequirements: null
        , messageOnUnsuccessfulEntryAttempt: null
    }
    , HALLWAY_TWO: {
        name: 'Hallway'
        , intro: 'A hallway.'
        , surroundings: 'The stench in here is pretty bad. Like rotten food. There are doors in every direction, but the door to the East is locked'
        , surroundingsWhenItemPickedUp: null
        , surroundingsWhenItemUsed: 'The stench in here is almost overwhelming now.'
        , item: null
        , availableDirections: 
            [ { text: 'North'
                , room: 'KITCHEN'
                , itemsThatCanBeUsed: []
            }
            , { text: 'West'
                , room: 'HALLWAY_FOUR'
                , itemsThatCanBeUsed: []
            }
            , { text: 'East'
                , room: 'UTILITY_ROOM'
                , itemsThatCanBeUsed: ['UTILITY_KEY']
            }
            , { text: 'South'
                , room: 'DINING_HALL'
                , itemsThatCanBeUsed: []
            }
            ]
        , descriptionWhenExamined : 'Everything is covered in cobwebs. Still, at least the flies are being dealt with.'
        , unlockRequirements: null
        , messageOnUnsuccessfulEntryAttempt: null
    }
    , UTILITY_ROOM: {
        name: 'Utility room'
        , intro: 'A short hallway.'
        , surroundings: 'A small, grey, utility room. It feels very cold in here.'
        , surroundingsWhenItemPickedUp: null
        , surroundingsWhenItemUsed: null
        , item: null
        , availableDirections: 
            [ { text: 'West'
                , room: 'HALLWAY_TWO'
                , itemsThatCanBeUsed: []
            }
            , { text: 'Downstairs'
                , room: 'BASEMENT_STAIRWAY'
                , itemsThatCanBeUsed: []
            }
            ]
        , descriptionWhenExamined : 'Someone, somewhere, is probably screaming at me not to go down those stairs.'
        , unlockRequirements: ['UTILITY_KEY']
        , messageOnUnsuccessfulEntryAttempt: null
    }
    , KITCHEN: {
        name: 'Kitchen'
        , intro: 'The kitchen.'
        , surroundings: 'Flies buzz around piles of black, rotten, fruit and meat. It looks like this has been here for a long time. And it smells like it\'s been here even longer.'
        , surroundingsWhenItemPickedUp: null
        , surroundingsWhenItemUsed: null
        , item: null
        , availableDirections: 
            [ { text: 'North'
                , room: 'WASTE_DISPOSAL'
                , itemsThatCanBeUsed: []
            }
            , { text: 'East'
                , room: 'FREEZER'
                , itemsThatCanBeUsed: []
            }
            , { text: 'South'
                , room: 'HALLWAY_TWO'
                , itemsThatCanBeUsed: []
            }
            ]
        , descriptionWhenExamined : 'Somehow, I don\'t seem to have an appetite.'
        , unlockRequirements: null
        , messageOnUnsuccessfulEntryAttempt: null
    }
    , FREEZER: {
        name: 'Freezer'
        , intro: 'A large walk-in freezer.'
        , surroundings: 'It\'s full of mountains of meat. And...there\'s a moose head on the floor.'
        , surroundingsWhenItemPickedUp: 'It\'s full of mountains of meat. Why was there a moose head in here?'
        , surroundingsWhenItemUsed: null
        , item: 'MOOSE_HEAD'
        , availableDirections: 
            [ { text: 'West'
                , room: 'KITCHEN'
                , itemsThatCanBeUsed: []
            }
            ]
        , descriptionWhenExamined : 'This was where I found that moose\'s head.'
        , unlockRequirements: null
        , messageOnUnsuccessfulEntryAttempt: null
    }
    , WASTE_DISPOSAL: {
        name: 'Waste disposal'
        , intro: 'A room that is completely empty, except for a hatch at the back, that appears to be a waste disposal chute.'
        , surroundings: 'Unfortunately it doesn\'t have a handle, so can\'t be opened.'
        , surroundingsWhenItemPickedUp: null
        , surroundingsWhenItemUsed: 'What could be at the bottom?'
        , item: null
        , availableDirections: 
            [ { text: 'Enter'
                , room: 'BASEMENT_WASTE_DISPOSAL'
                , itemsThatCanBeUsed: ['HANDLE']
            }
            , { text: 'South'
                , room: 'KITCHEN'
                , itemsThatCanBeUsed: []
            }
            ]
        , descriptionWhenExamined : 'I wonder how long it\'s going to be before I\'m disposed of as well.'
        , unlockRequirements: null
        , messageOnUnsuccessfulEntryAttempt: null
    }
    , HALLWAY_FOUR: {
        name: 'Hallway'
        , intro: 'A long hallway.'
        , surroundings: 'There are a few doors leading from this hallway. The carpet appears to have been torn up in a number of places.'
        , surroundingsWhenItemPickedUp: null
        , surroundingsWhenItemUsed: null
        , item: null
        , availableDirections: 
            [ { text: 'North'
                , room: 'STAIRWAY_THREE'
                , itemsThatCanBeUsed: []
            }
            , { text: 'East'
                , room: 'HALLWAY_TWO'
                , itemsThatCanBeUsed: []
            }
            , { text: 'West'
                , room: 'MUSIC_ROOM'
                , itemsThatCanBeUsed: []
            }
            ]
        , descriptionWhenExamined : 'I guess the carpet is the least of their worries.'
        , unlockRequirements: null
        , messageOnUnsuccessfulEntryAttempt: null
    }
    , STAIRWAY_THREE: {
        name: 'Stairway'
        , intro: 'A large, wooden stairway.'
        , surroundings: 'You can\'t see all the way to the top in this darkness'
        , surroundingsWhenItemPickedUp: null
        , surroundingsWhenItemUsed: null
        , item: null
        , availableDirections: 
            [ { text: 'Upstairs'
                , room: 'UPSTAIRS_STAIRWAY_THREE'
                , itemsThatCanBeUsed: []
            }
            , { text: 'South'
                , room: 'HALLWAY_FOUR'
                , itemsThatCanBeUsed: []
            }
            ]
        , descriptionWhenExamined : 'It\'s too dark to see much of anything here.'
        , unlockRequirements: null
        , messageOnUnsuccessfulEntryAttempt: null
    }
    , MUSIC_ROOM: {
        name: 'Music room'
        , intro: 'A music room.'
        , surroundings: 'A very pleasant-looking music room, with a grand piano in the center.'
        , surroundingsWhenItemPickedUp: null
        , surroundingsWhenItemUsed: 'A wall has moved, revealing a hidden room behind it.'
        , item: null
        , availableDirections: 
            [ { text: 'North'
                , room: 'HALLWAY_FIVE'
                , itemsThatCanBeUsed: []
            }
            , { text: 'East'
                , room: 'HALLWAY_FOUR'
                , itemsThatCanBeUsed: []
            }
            , { text: 'South'
                , room: 'SECRET_ROOM_ONE'
                , itemsThatCanBeUsed: ['SHEET_MUSIC']
            }
            ]
        , descriptionWhenExamined : 'Seems that the owner has good taste in music, if not much else.'
        , unlockRequirements: null
        , messageOnUnsuccessfulEntryAttempt: null
    }
    , HALLWAY_FIVE: {
        name: 'Hallway'
        , intro: 'A small hallway.'
        , surroundings: 'There seem to be a lot of hallways in this place.'
        , surroundingsWhenItemPickedUp: null
        , surroundingsWhenItemUsed: null
        , item: null
        , availableDirections: 
            [ { text: 'North'
                , room: 'GYM'
                , itemsThatCanBeUsed: []
            }
            , { text: 'South'
                , room: 'MUSIC_ROOM'
                , itemsThatCanBeUsed: []
            }
            ]
        , descriptionWhenExamined : 'Another bloody hallway. Literally and figuratively.'
        , unlockRequirements: null
        , messageOnUnsuccessfulEntryAttempt: null
    }
    , GYM: {
        name: 'Gym'
        , intro: 'A home gym.'
        , surroundings: 'There is a piece of paper on the floor.'
        , surroundingsWhenItemPickedUp: 'This is nicer than most real gyms. Or at least, it probably was once.'
        , surroundingsWhenItemUsed: null
        , item: 'KEY_CODE'
        , availableDirections: 
            [ { text: 'East'
                , room: 'SWIMMING_POOL'
                , itemsThatCanBeUsed: []
            }
            , { text: 'South'
                , room: 'HALLWAY_FIVE'
                , itemsThatCanBeUsed: []
            }
            ]
        , descriptionWhenExamined : 'This was where I found the key code.'
        , unlockRequirements: null
        , messageOnUnsuccessfulEntryAttempt: null
    }
    , SWIMMING_POOL: {
        name: 'Swimming pool'
        , intro: 'An olympic-sized swimming pool.'
        , surroundings: 'This really is incredible.'
        , surroundingsWhenItemPickedUp: null
        , surroundingsWhenItemUsed: null
        , item: null
        , availableDirections: 
            [ { text: 'West'
                , room: 'GYM'
                , itemsThatCanBeUsed: []
            }
            , { text: 'East'
                , room: 'SHOWERS'
                , itemsThatCanBeUsed: []
            }
            ]
        , descriptionWhenExamined : 'The smell of chlorine fills the air, and the warmth of the pool can be felt against my skin.'
        , unlockRequirements: null
        , messageOnUnsuccessfulEntryAttempt: null  
    }
    , SHOWERS: {
        name: 'Showers'
        , intro: 'A row of showers.'
        , surroundings: 'There are a row of showers here, as you\'d find in a public simming pool.'
        , surroundingsWhenItemPickedUp: null
        , surroundingsWhenItemUsed: null
        , item: null
        , availableDirections: 
            [ { text: 'West'
                , room: 'SWIMMING_POOL'
                , itemsThatCanBeUsed: []
            }
            ]
        , descriptionWhenExamined : 'I wonder how many people live here?'
        , unlockRequirements: null
        , messageOnUnsuccessfulEntryAttempt: null  
    }
    , SECRET_ROOM_ONE: {
        name: 'Secret room'
        , intro: 'A well-hidden room.'
        , surroundings: 'A room that is completely empty, save for a stone podium with a crest on top of it.'
        , surroundingsWhenItemPickedUp: 'The room is completely empty, except for the podium in the middle, where you found a crest.'
        , surroundingsWhenItemUsed: null
        , item: 'EAGLE_CREST'
        , availableDirections: 
            [ { text: 'North'
                , room: 'MUSIC_ROOM'
                , itemsThatCanBeUsed: []
            }
            ]
        , descriptionWhenExamined : 'This was where I found the eagle crest.'
        , unlockRequirements: ['SHEET_MUSIC']
        , messageOnUnsuccessfulEntryAttempt: null  
    }
    , STATUE_ROOM: {
        name: 'Statue room'
        , intro: 'A room full of statues.'
        , surroundings: 'One of them appears to have been beheaded.'
        , surroundingsWhenItemPickedUp: null
        , surroundingsWhenItemUsed: 'At least they aren\'t mannequins, but statues aren\'t much better. One of them has moved aside, revealing a hidden doorway.'
        , item: null
        , availableDirections: 
            [ { text: 'North'
                , room: 'SECRET_ROOM_TWO'
                , itemsThatCanBeUsed: ['STATUE_HEAD']
            }
            , { text: 'East'
                , room: 'HALLWAY_THREE'
                , itemsThatCanBeUsed: []
            }
            , { text: 'South'
                , room: 'HALLWAY_ONE'
                , itemsThatCanBeUsed: []
            }
            ]
        , descriptionWhenExamined : 'This is quite a collection.'
        , unlockRequirements: null
        , messageOnUnsuccessfulEntryAttempt: null  
    }
    , SECRET_ROOM_TWO: {
        name: 'Secret room'
        , intro: 'A hidden room.'
        , surroundings: 'The room is cold, and empty, except for a podium in the middle. On it, sits a crest.'
        , surroundingsWhenItemPickedUp: 'An empty room, except for a lonely looking concrete podium in the middle.'
        , surroundingsWhenItemUsed: null
        , item: 'WOLF_CREST'
        , availableDirections: 
            [ { text: 'South'
                , room: 'STATUE_ROOM'
                , itemsThatCanBeUsed: []
            }
            ]
        , descriptionWhenExamined : 'This was where I found the wolf crest.'
        , unlockRequirements: ['STATUE_HEAD']
        , messageOnUnsuccessfulEntryAttempt: null  
    }
    , HALLWAY_THREE: {
        name: 'Hallway'
        , intro: 'A hallway.'
        , surroundings: 'This hallway is quite large. There\'s a locked door to the North with a plaque that reads "Servants\' Quarters".'
        , surroundingsWhenItemPickedUp: null
        , surroundingsWhenItemUsed: 'This hallway is quite large. The door to the servants\' quarters is unlocked.'
        , item: null
        , availableDirections: 
          [ { text: 'North'
              , room: 'SERVANTS_QUARTERS'
              , itemsThatCanBeUsed: ['SMALL_KEY']
          }
          , { text: 'West'
              , room: 'STATUE_ROOM'
              , itemsThatCanBeUsed: []
          }
          , { text: 'East'
              , room: 'STAIRWAY_TWO'
              , itemsThatCanBeUsed: []
          }
          , { text: 'South'
              , room: 'GARAGE'
              , itemsThatCanBeUsed: []
          }
          ]
        , descriptionWhenExamined : 'I wonder what happened to the servants.'
        , unlockRequirements: null
        , messageOnUnsuccessfulEntryAttempt: null  
    }
    , GARAGE: {
        name: 'Garage'
        , intro: 'A large garage.'
        , surroundings: 'The garage is empty, apart from a few tools. Perhaps one of them could be of some use.'
        , surroundingsWhenItemPickedUp: 'The garage is empty, apart from a few tools.'
        , surroundingsWhenItemUsed: null
        , item: 'CROWBAR'
        , availableDirections: 
            [ { text: 'North'
                , room: 'HALLWAY_THREE'
                , itemsThatCanBeUsed: []
            }
            ]
        , descriptionWhenExamined : 'This is where I found the crowbar.'
        , unlockRequirements: null
        , messageOnUnsuccessfulEntryAttempt: null  
    }
    , SERVANTS_QUARTERS: {
        name: 'Servants\' quarters'
        , intro: 'The servants\' quarters.'
        , surroundings: 'It\'s actually pretty nice in here. For some reason, the head of a statue is sitting on a table in the corner.'
        , surroundingsWhenItemPickedUp: 'It\'s actually pretty nice in here. But who were these people serving?'
        , surroundingsWhenItemUsed: null
        , item: 'STATUE_HEAD'
        , availableDirections: 
            [ { text: 'West'
                , room: 'SERVANTS_BATHROOM'
                , itemsThatCanBeUsed: []
            }
            , { text: 'South'
                , room: 'HALLWAY_THREE'
                , itemsThatCanBeUsed: []
            }
            ]
        , descriptionWhenExamined : 'This is where I found that statue\'s head.'
        , unlockRequirements: ['SMALL_KEY']
        , messageOnUnsuccessfulEntryAttempt: null  
    }
    , SERVANTS_BATHROOM: {
        name: 'Servants\' bathroom'
        , intro: 'The servants\' bathroom.'
        , surroundings: 'There\'s not a lot to see in here.'
        , surroundingsWhenItemPickedUp: null
        , surroundingsWhenItemUsed: null
        , item: null
        , availableDirections: 
            [ { text: 'East'
                , room: 'SERVANTS_QUARTERS'
                , itemsThatCanBeUsed: []
            }
            ]
        , descriptionWhenExamined : 'At least they have their own bathroom.'
        , unlockRequirements: null
        , messageOnUnsuccessfulEntryAttempt: null  
    }
    , STAIRWAY_TWO: {
        name: 'Stairway'
        , intro: 'A stairway.'
        , surroundings: 'A sturdy-looking staircase sits in a dimly-lit room.'
        , surroundingsWhenItemPickedUp: null
        , surroundingsWhenItemUsed: null
        , item: null
        , availableDirections: 
            [ { text: 'Upstairs'
                , room: 'UPSTAIRS_STAIRWAY_TWO'
                , itemsThatCanBeUsed: []
            }
            , { text: 'West'
                , room: 'HALLWAY_THREE'
                , itemsThatCanBeUsed: []
            }
            ]
        , descriptionWhenExamined : 'The stairs are thick with cobwebs.'
        , unlockRequirements: null
        , messageOnUnsuccessfulEntryAttempt: null  
    }
    , BASEMENT_STAIRWAY: {
        name: 'Basement'
        , intro: 'The basement.'
        , surroundings: 'It\'s cold. And dark.'
        , surroundingsWhenItemPickedUp: null
        , surroundingsWhenItemUsed: null
        , item: null
        , availableDirections: 
            [ { text: 'Upstairs'
                , room: 'UTILITY_ROOM'
                , itemsThatCanBeUsed: []
            }
            , { text: 'West'
                , room: 'BASEMENT_STORAGE'
                , itemsThatCanBeUsed: []
            }
            , { text: 'East'
                , room: 'BASEMENT_STORAGE_TWO'
                , itemsThatCanBeUsed: []
            }
            , { text: 'South'
                , room: 'BASEMENT_WINE_CELLAR'
                , itemsThatCanBeUsed: []
            }
            ]
        , descriptionWhenExamined : 'It\'s very damp down here.'
        , unlockRequirements: null
        , messageOnUnsuccessfulEntryAttempt: null  
    }
    , BASEMENT_STORAGE: {
        name: 'Basement storage'
        , intro: 'A storage room.'
        , surroundings: 'There are a few crates down here. Probably nothing too important in them though. There\'s a door to the North, but it doesn\'t seem to open from this side.'
        , surroundingsWhenItemPickedUp: null
        , surroundingsWhenItemUsed: null
        , item: null
        , availableDirections: 
            [  { 
                text: 'East'
                , room: 'BASEMENT_STAIRWAY'
                , itemsThatCanBeUsed: []
            }
            ]
        , descriptionWhenExamined : 'It\'s very damp down here.'
        , unlockRequirements: null
        , messageOnUnsuccessfulEntryAttempt: null  
    }
    , BASEMENT_STORAGE_TWO: {
        name: 'Basement storage'
        , intro: 'A small storage room.'
        , surroundings: 'There\'s a metal handle on the ground'
        , surroundingsWhenItemPickedUp: 'There\'s nothing to see here.'
        , surroundingsWhenItemUsed: null
        , item: 'HANDLE'
        , availableDirections: 
            [  { 
                text: 'West'
                , room: 'BASEMENT_STAIRWAY'
                , itemsThatCanBeUsed: []
            }
            ]
        , descriptionWhenExamined : 'It smells really bad here.'
        , unlockRequirements: null
        , messageOnUnsuccessfulEntryAttempt: null  
    }
    , BASEMENT_ITEM_ROOM: {
        name: 'Basement item room'
        , intro: 'A room full of boxes.'
        , surroundings: 'Amongst the boxes lies a small key.'
        , surroundingsWhenItemPickedUp: 'There\'s nothing interesting in here any more.'
        , surroundingsWhenItemUsed: null
        , item: 'SMALL_KEY'
        , availableDirections: 
            [  { 
                text: 'South'
                , room: 'BASEMENT_STORAGE'
                , itemsThatCanBeUsed: []
            }
            ]
        , descriptionWhenExamined : 'I don\'t think I want to know what\'s in these boxes.'
        , unlockRequirements: null
        , messageOnUnsuccessfulEntryAttempt: null  
    }
    , BASEMENT_WASTE_DISPOSAL: {
        name: 'Waste disposal'
        , intro: 'Ugh, it stinks down here!'
        , surroundings: 'The ground is covered in a slimy, horrible, sludge. There is a door to the East.'
        , surroundingsWhenItemPickedUp: null
        , surroundingsWhenItemUsed: null
        , item: null
        , availableDirections: 
            [  { 
                text: 'East'
                , room: 'BASEMENT_ITEM_ROOM'
                , itemsThatCanBeUsed: []
            }
            ]
        , descriptionWhenExamined : 'I really do not want to be here any more.'
        , unlockRequirements: ['HANDLE']
        , messageOnUnsuccessfulEntryAttempt: null  
    }
    , BASEMENT_WINE_CELLAR: {
        name: 'Wine cellar'
        , intro: 'A gigantic wine cellar.'
        , surroundings: 'Amazingly, every space is filled, except for one.'
        , surroundingsWhenItemPickedUp: null
        , surroundingsWhenItemUsed: 'One of the racks has moved, revealing a hidden doorway.'
        , item: null
        , availableDirections: 
            [ { 
                text: 'North'
                , room: 'BASEMENT_STAIRWAY'
                , itemsThatCanBeUsed: []
            }
            , { text: 'West'
                , room: 'BASEMENT_LAB_ENTRANCE'
                , itemsThatCanBeUsed: ['WINE_BOTTLE']
            }
            ]
        , descriptionWhenExamined : 'I could use a drink. Probably better not though.'
        , unlockRequirements: null
        , messageOnUnsuccessfulEntryAttempt: null  
    }
    , BASEMENT_LAB_ENTRANCE: {
        name: 'Basement lab entrance'
        , intro: 'An entrance...to a laboratory? This is very unusual. There appears to be an entrance to a laboratory here! Unfortunately, as you enter, you succumb to a strange feeling. You\'re losing conciousness. As you fall to your knees, you can almost make out a voice nearby...'
        , surroundings: 'To be continued....'
        , surroundingsWhenItemPickedUp: null
        , surroundingsWhenItemUsed: null
        , item: null
        , availableDirections: 
            [ { 
                text: 'End'
                , room: 'END'
                , itemsThatCanBeUsed: []
            }
            ]
        , descriptionWhenExamined : '...'
        , unlockRequirements: ['WINE_BOTTLE']
        , messageOnUnsuccessfulEntryAttempt: null  
    }
    , END: {
        name: 'End'
        , intro: 'Congratulations!'
        , surroundings: 'Thanks for playing; I\'m sorry if this is a bit of an anti-climax, but I\'m not really expecting anyone to ever see this message to be honest. If you did, then send me a tweet! @_dnimmo'
        , surroundingsWhenItemPickedUp: null
        , surroundingsWhenItemUsed: null
        , item: null
        , availableDirections: []
        , descriptionWhenExamined : 'Thank you for playing!'
        , unlockRequirements: null
        , messageOnUnsuccessfulEntryAttempt: null  
    }
};


const getRoom = 
    (roomKey: RoomKey) : Room => 
        rooms[roomKey];


export default getRoom;