export
const useItem =
  ({ item, availableDirections }) => 
      availableDirections.some(
          ({ itemsThatCanBeUsed }) => 
              itemsThatCanBeUsed 
                  ? itemsThatCanBeUsed.includes(item)
                  : false
      );


const items = 
  {};


export default items; 