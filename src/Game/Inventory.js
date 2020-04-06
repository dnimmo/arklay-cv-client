import React from 'react';
import { GameContext } from './GameContext';
import Button from '../components/Button';
import items from './items';
import { id } from '../utils';


const styles = {
    inventoryOuter: {
        height: '65vh'
        , position: 'fixed'
        , top: '0'
        , width: '100vw'
        , backgroundColor: 'rgba(0,0,0,0.3)'
    }
    , inventoryContainer: {
        minHeight: '35vh'
        , position: 'fixed'
        , bottom: '0'
        , width: '100vw'
        , borderTop: '2px solid #fafafa'
        , padding: '10vh'
        , backgroundColor: 'slategrey'
    }
    , closeButton: {
        position: 'absolute'
        , top: '2vh'
        , right: '2vh'
    }
};


const Inventory =
  () => {
      const { 
          gameState
          , attemptToUseItem
          , hideInventory
      } 
        = React.useContext(GameContext);


      const { 
          inventory
          , message 
      }
        = gameState;


      return (
          <div style={styles.inventoryOuter}>
              <div style={styles.inventoryContainer}>
                  { inventory.itemsHeld.map(
                      x => 
                          <Button 
                              onClick={() => attemptToUseItem(x)} 
                              text={items[x].name}
                              key={id()}
                          />  
                  )}
                  <span style={styles.closeButton}>
                      <Button 
                          onClick={ hideInventory }
                          text="X"
                      />
                  </span>
                  { message && <p>{message}</p>
                  }
              </div>
          </div>
      );
  };


export default Inventory;