import React from 'react';
import { GameContext, states } from './GameContext';
import Directions from './Directions';
import Inventory from './Inventory';
import Error from '../Error';
import Button from '../components/Button';
import RoomDescription from './RoomDescription';

const Game = 
  () => { 
      const { 
          gameState
          , showInventory 
          , hideInventory
      } = 
        React.useContext(GameContext);


      const { 
          state
          , message
      } = 
        gameState;


      const chooseState = 
        (state) => {
            switch (state) {
            case states.DISPLAYING_DIRECTIONS:
                return (
                    <section>
                        <Directions />
                        <Button 
                            onClick={showInventory}
                            text="Inventory"
                        />
                    </section>
                );


            case states.DISPLAYING_INVENTORY:
                return (
                    <section>
                        <Inventory />
                        <Button 
                            onClick={ hideInventory }
                            text="Close inventory"
                        />
                    </section>
                );


            default: 
                return (
                    <Error 
                        description="Game ended up in an unexpected state" 
                    />
                );
            }
        };

      return (
          <div>
              <RoomDescription />
              { chooseState(state) } 
              { message && <p>{message}</p>
              }
          </div>
      );
  };


export default Game;