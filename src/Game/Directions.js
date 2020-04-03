import React from 'react';
import { GameContext } from './GameContext';
import Button from '../components/Button';
import { id } from '../utils';

const Directions = 
  () => {
      const { 
          gameState
          , changeRoom
      } = 
        React.useContext(GameContext);


      const { currentRoom } = 
        gameState;
  
        
      return (
          <div>
              <p>DIRECTIONS</p>
              { currentRoom.availableDirections.map(
                  ({ text, room }) => 
                      <Button 
                          onClick={() => changeRoom(room)} 
                          text={text}
                          key={id()}
                      />
              )
              }
          </div>
      );
  };


export default Directions;