export
const itemCanBeUsed =
  ({ item, availableDirections }) => 
      availableDirections.some(
          ({ itemsThatCanBeUsed }) => 
              itemsThatCanBeUsed 
                  ? itemsThatCanBeUsed.includes(item)
                  : false
      );


const items = 
  {
      TEST_ITEM: { 
          name: 'Test item'
          , description: 'An item Nimmo is using to test items...'
          , messageWhenUsed: 'You used the thing! :)'
          , messageWhenNotUsed: 'You didn\'t use the thing. :('
      }
  };


export default items; 