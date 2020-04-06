import React from 'react';
import { GameContext, states } from './GameContext';
import Directions from './Directions';
import Inventory from './Inventory';
import Error from '../Error';
import Button from '../components/Button';
import RoomDescription from './RoomDescription';


const inventoryButton = 
  numberOfItems => 
      numberOfItems > 0 
          ? { opacity: '1'}
          : { opacity: '0.5'};


const Game = 
  () => { 
      const { 
          gameState
          , showInventory
      } = 
        React.useContext(GameContext);


      const { 
          state
          , message
          , inventory
      } = 
        gameState;


      const chooseState = 
        (state) => {
            switch (state) {
            case states.DISPLAYING_DIRECTIONS:
                return (
                    <section>
                        <Directions />
                        <span style={inventoryButton(inventory.itemsHeld.length)}>
                            <Button 
                                onClick={showInventory}
                                text="Inventory"
                            />
                        </span>
                    </section>
                );


            case states.DISPLAYING_INVENTORY:
                return (
                    <section>
                        <Directions />
                        <Inventory />
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