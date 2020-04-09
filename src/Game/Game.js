import React from 'react';
import { ApplicationContext } from '../Application/ApplicationContext';
import { GameContext, states } from './GameContext';
import Directions from './Directions';
import Inventory from './Inventory';
import Error from '../Error';
import Button from '../components/Button';
import RoomDescription from './RoomDescription';


const styles = 
  { 
      inventoryButton: 
        numberOfItems => 
            ({ 
                marginLeft: '20px',
                opacity: numberOfItems > 0 
                    ? '1'
                    : '0.5'
            }),
      message: 
          { 
              minHeight: '20px',
              padding: '0 10vw'
          },
      lowerHalfContainer: 
          { 
              borderTop: '2px solid #fafafa',
              paddingTop: '20px'
          }
  };


const Game = 
  () => { 
      const {
          applicationState: { soundEnabled },
          enableSound,
          disableSound,
      } =
        React.useContext(ApplicationContext);
        

      const { 
          gameState,
          showInventory,
          examineRoom,
      } = 
        React.useContext(GameContext);


      const { 
          state,
          message,
          inventory,
          currentRoom,
      } = 
        gameState;


      const chooseState = 
        (state) => {
            switch (state) {
            case states.DISPLAYING_DIRECTIONS:
                return (
                    <section style={styles.lowerHalfContainer}>
                        <Directions />
                        <p style={styles.message}>{message}</p>
                        <Button 
                            onClick={() => examineRoom(currentRoom)}
                            text="Examine room"
                        />
                        <span style={styles.inventoryButton(inventory.itemsHeld.length)}>
                            <Button 
                                onClick={showInventory}
                                text="Inventory"
                            />
                        </span>  
                        <div>{ soundEnabled 
                            ? <Button 
                                onClick={disableSound}
                                text="Turn sound off"
                            />
                            : <Button 
                                onClick={enableSound}
                                text="Turn sound on"
                            />
                        }</div>
                    </section>
                );


            case states.DISPLAYING_INVENTORY:
                return (
                    <section style={styles.lowerHalfContainer}>
                        <Directions />
                        <p style={styles.message}>{message}</p>
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
          </div>
      );
  };


export default Game;