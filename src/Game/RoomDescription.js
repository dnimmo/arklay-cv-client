import React from 'react';
import { GameContext } from './GameContext';
import { anItemCanBeUsed } from './rooms';
import { itemHasBeenPickedUp, itemHasBeenUsed } from './items';


const style = {
    minHeight: '45vh'
    , padding: '5vh 20vw'
};


const chooseSurroundings = 
  ({ room, inventory }) => {
      // This only works because there are no rooms that both contain an item and in which you can use an item.
      if (room.item) {
          return ( 
              itemHasBeenPickedUp({ item: room.item, inventory })
                  ? room.surroundingsWhenItemPickedUp
                  : room.surroundings 
          );
      }

      if (anItemCanBeUsed(room)) {
          return (
              inventory
                  .itemsUsed
                  .some(item => itemHasBeenUsed({ item, inventory}))
                  ? room.surroundingsWhenItemUsed
                  : room.surroundings
          );
      }


      return room.surroundings;
  };


const RoomDescription =
  () => {
      const { 
          gameState
      } = 
        React.useContext(GameContext);


      const {
          currentRoom
          , inventory
      } = 
        gameState;


      return (
          <div
              style={style}
          >
              <p>{ currentRoom.intro }</p>
              <p>{ chooseSurroundings({ room: currentRoom, inventory }) }
              </p>
          </div>
      );
  };


export default RoomDescription;