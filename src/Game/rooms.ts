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
