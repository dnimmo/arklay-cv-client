import React from 'react';
import { GameContext } from './GameContext';


const style = {
    minHeight: '30vh'
    , padding: '5vh 20vw'
};


const RoomDescription =
  () => {
      const { 
          gameState
      } = 
        React.useContext(GameContext);


      const {
          currentRoom
      } = 
        gameState;


      return (
          <div
              style={style}
          >
              <p>{ currentRoom.intro }</p>
              <p>{ currentRoom.surroundings }</p>
          </div>
      );
  };


export default RoomDescription;