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
      inventory.itemsHeld.map(x => x.key).includes(item)
        || inventory.itemsUsed.map(x => x.key).includes(item.key);


export
const itemHasBeenUsed =
  ({ item, inventory }) => 
      inventory
          .itemsUsed
          .map(x => x.key)
          .includes(item);

