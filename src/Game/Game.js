import React, { useEffect } from 'react';
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
          getItems,
      } = 
        React.useContext(GameContext);


      useEffect(() => {
          if (!gameState.items) {
              getItems();
          }
      }, [getItems, gameState.items]);


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
            case states.LOADING: 
                return (
                    <p>...</p>
                );


            case states.DISPLAYING_DIRECTIONS:
                return (
                    <section style={styles.lowerHalfContainer}>
                        <Directions />
                        <p style={styles.message}>{message}</p>
                        <Button 
                            onClick={() => examineRoom(currentRoom)}
                            text="Examine room"
                            testKey="ButtonExamineRoom"
                        />
                        <span style={styles.inventoryButton(inventory.itemsHeld.length)}>
                            <Button 
                                onClick={showInventory}
                                text="Inventory"
                                testKey="ButtonInventory"
                            />
                        </span>  
                        <div>{ soundEnabled 
                            ? <Button 
                                onClick={disableSound}
                                text="Turn sound off"
                                testKey="ButtonSoundOff"
                            />
                            : <Button 
                                onClick={enableSound}
                                text="Turn sound on"
                                testKey="ButtonSoundOn"
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