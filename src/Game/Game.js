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
          applicationState,
          enableSound,
          disableSound,
          saveGame,
          saveData,
      } =
        React.useContext(ApplicationContext);
        

      const { soundEnabled } = 
        applicationState;


      const { 
          gameState,
          showInventory,
          examineRoom,
          getRooms,
          getItems,
          loadGame,
      } = 
        React.useContext(GameContext);


      useEffect(
          () => {
              if (gameState.state === states.DISPLAYING_DIRECTIONS 
                || gameState.state === states.DISPLAYING_INVENTORY) {
                  saveGame({ gameState });
              }
              
              if (gameState.state === states.LOADING_ROOMS) {
                  const saveData = 
                    JSON.parse(localStorage.getItem('saveData'));

                  if (saveData) {
                      // if the user selected "new game", the save data would have been deleted before this point
                      loadGame(saveData.gameState);
                  } else {
                      getRooms();
                  }
              }

              if (gameState.state === states.LOADING_ITEMS) {
                  getItems();
              }
          }, [
              getRooms, 
              getItems, 
              gameState,
              saveGame,
              loadGame,
              saveData,
              applicationState.saveData
          ]
      );


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
            case states.LOADING_ITEMS:
            case states.LOADING_ROOMS: 
                return (
                    <p>...</p>
                );


            case states.DISPLAYING_DIRECTIONS:
                return (
                    <div>
                        <RoomDescription />
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
                    </div>
                );


            case states.DISPLAYING_INVENTORY:
                return (
                    <div>
                        <RoomDescription />
                        <section style={styles.lowerHalfContainer}>
                            <Directions />
                            <p style={styles.message}>{message}</p>
                            <Inventory />
                        </section>
                    </div>
                );


            default: 
                return (
                    <Error 
                        description="Game ended up in an unexpected state" 
                    />
                );
            }
        };


      return chooseState(state);
  };


export default Game;