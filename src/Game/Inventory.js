import React from 'react';
import { GameContext } from './GameContext';
import Button from '../components/Button';
import items from './items';
import { id } from '../utils';


const Inventory =
  () => {
      const { 
          gameState
          , attemptToUseItem
      } 
        = React.useContext(GameContext);


      const { inventory }
        = gameState;


      return (
          <div>
              <p>INVENTORY</p>
              { inventory.itemsHeld.map(
                  x => 
                      <Button 
                          onClick={() => attemptToUseItem(x)} 
                          text={items[x].name}
                          key={id()}
                      />  
              )}
          </div>
      );
  };


export default Inventory;