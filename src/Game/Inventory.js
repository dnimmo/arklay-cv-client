import React from 'react';
import { GameContext } from './GameContext';
import Button from '../components/Button';
import { id } from '../utils';


const styles = {
    inventoryOuter: {
        height: '65vh',
        position: 'fixed',
        top: '0',
        width: '100vw',
        backgroundColor: 'rgba(0,0,0,0.3)',
    },
    inventoryContainer: {
        minHeight: '35vh',
        position: 'fixed',
        bottom: '0',
        width: '100vw',
        borderTop: '2px solid #fafafa',
        padding: '10vh',
        backgroundColor: 'slategrey',
        display: 'grid',
    },
    itemContainer: {
    },
    closeButton: {
        position: 'absolute',
        top: '2vh',
        right: '2vh',
    },
    messageContainer: {
        minHeight: '50px',
        display: 'block',
    },
};


const Inventory =
  () => {
      const { 
          gameState,
          attemptToUseItem,
          hideInventory,
      } 
        = React.useContext(GameContext);


      const { 
          inventory,
          message,
      }
        = gameState;


      return (
          <div style={styles.inventoryOuter}>
              <div style={styles.inventoryContainer}>
                  { inventory.itemsHeld.map(
                      x => 
                          <span style={styles.itemContainer}
                              key={id()}
                          >
                              <img 
                                  src={x.image} 
                                  //No need for an alt here, these images are not intended to supply any info
                                  alt={''}
                              />
                              <Button 
                                  onClick={() => attemptToUseItem(x.key)} 
                                  text={x.name}
                                  testKey={`Button${x}`}
                              />
                          </span>  
                  )}
                  <p style={styles.messageContainer}>{message}</p>
                  <span style={styles.closeButton}>
                      <Button 
                          onClick={ hideInventory }
                          text="X"
                          testKey="ButtonCloseInventory"
                      />
                  </span>
              </div>
          </div>
      );
  };


export default Inventory;