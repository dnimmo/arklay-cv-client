import React from 'react';
import { GameContext } from './GameContext';
import Button from '../components/Button';
import items from './items';
import { id } from '../utils';


const styles = {
    inventoryContainer: {
        minHeight: '20vh'
    }
};


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
          <div style={styles.inventoryContainer}>
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