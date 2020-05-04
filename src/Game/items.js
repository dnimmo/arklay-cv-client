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

