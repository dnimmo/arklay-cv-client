export
const itemCanBeUsed =
  ({ item, availableDirections }) => 
      availableDirections.some(
          ({ itemsThatCanBeUsed }) => 
              itemsThatCanBeUsed 
                  ? itemsThatCanBeUsed.includes(item)
                  : false
      );


export
const itemHasBeenPickedUp =
  ({ item, inventory }) => 
      inventory.itemsHeld.includes(item)
        || inventory.itemsUsed.includes(item);


export
const itemHasBeenUsed =
  ({ item, inventory }) => 
      inventory
          .itemsUsed
          .includes(item);
  

const items = 
  { LION_CREST: { 
      name: 'Lion Crest'
      , description: 'A crest, with a lion\'s head on the front.'
      , messageWhenUsed: 'You place the crest into the door'
      , messageWhenNotUsed: 'Cool lion, but what could this be for?'
      , soundWhenUsed: 'insert_crest.wav'
  }
  , WINE_BOTTLE: {
      name : 'Wine Bottle'
      , description : 'An expensive-looking bottle of wine.'
      , messageWhenUsed : 'You place the wine bottle back in the rack'
      , messageWhenNotUsed : 'It\'s a shame this is empty. Some wine would be good right now.'
      , soundWhenUsed: 'bottle_noise.wav'
  }
  , UTILITY_KEY: { 
      name : 'Utility Key'
      , description : 'A small key, with a tag that reads "Utility".'
      , messageWhenUsed : 'You unlock the door to the utility room'
      , messageWhenNotUsed : 'This key doesn\'t seem to fit any locks here.'
      , soundWhenUsed: 'metal_on_metal.wav'
  }
  , SHEET_MUSIC: {
      name : 'Sheet Music'
      , description : 'Sheet music for Beethoven\'s Piano Sonata No. 14.'
      , messageWhenUsed : 'You play the piano'
      , messageWhenNotUsed : 'An excellent piece of music. Though I\'m not sure why I decided to steal it'
      , soundWhenUsed: 'paper_noise.wav'
  }
  , MOOSE_HEAD: { 
      name : 'Moose Head'
      , description : 'A moose\'s head. Its cold, dead eyes stare at you, looking lost and lonely.'
      , messageWhenUsed : 'Ah, that\'s better'
      , messageWhenNotUsed : 'I will not rest until this is back where it belongs'
      , soundWhenUsed: 'heavy_object.wav'
  }
  , KEY_CODE: {
      name : 'Keycode'
      , description : 'A piece of paper with "2407" written on it.'
      , messageWhenUsed : 'You enter the keycode into the terminal'
      , messageWhenNotUsed : 'What could these numbers mean?'
      , soundWhenUsed: 'keyboard.wav'

  }
  , EAGLE_CREST: {
      name : 'Eagle Crest'
      , description : 'A crest, with an eagle\'s head on the front.'
      , messageWhenUsed : 'You place the crest into the door'
      , messageWhenNotUsed : 'What is this for? What does the eagle signify?'
      , soundWhenUsed: 'insert_crest.wav'
  }
  , CROWBAR :
  {   name : 'Crowbar'
      , description : 'A sturdy crowbar.'
      , messageWhenUsed : 'You prise off the wooden planks'
      , messageWhenNotUsed : 'Nothing to use this on in here.'
      , soundWhenUsed: 'wood_crate_open.wav'
  }
  , STATUE_HEAD :
  {   name : 'Statue Head'
      , description : 'The head of a small statue.'
      , messageWhenUsed : 'You place the head carefully back onto the statue'
      , messageWhenNotUsed : 'What a strange thing to have found. I wonder who it\'s meant to be?'
      , soundWhenUsed: 'heavy_object.wav'
  }
  , HANDLE :  
  {   name : 'Handle'
      , description : 'A metal handle. It looks like it\'s for some sort of trap door.'
      , messageWhenUsed : 'You have attached the handle'
      , messageWhenNotUsed : 'I\'m not sure where I could put this.'
      , soundWhenUsed: 'door_unlock.wav'
  }
  , SMALL_KEY: 
  {   name : 'Small Key'
      , description : 'A small key, with a tag that reads "S.Q."'
      , messageWhenUsed : 'You unlock the door'
      , messageWhenNotUsed : 'It doesn\'t look like this can be used here'
      , soundWhenUsed: 'metal_on_metal.wav'
  }
  , WOLF_CREST :
  {   name : 'Wolf Crest'
      , description : 'A crest with a wolf on it. Very unusual.'
      , messageWhenUsed : 'You place the crest into the door'
      , messageWhenNotUsed : 'What could this be for?'
      , soundWhenUsed: 'insert_crest.wav'
  }
  };


export default items; 