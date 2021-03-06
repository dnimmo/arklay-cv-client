import React from 'react';
import PropTypes from 'prop-types';
import { GameContext } from './GameContext';
import Button from '../components/Button';
import { id } from '../utils';
import { isUnlocked } from './rooms.ts';


const styles = {
    icon : { 
        height: '16px',
        width: 'auto',
        minWidth: '16px',
    },
    iconContainer: {
        backgroundColor: '#fafafa',
        border: '1px solid #fafafa',
        padding: '2px 4px',
        borderRadius: '50px',
        marginLeft: '-15px',
        marginTop: '-8px',
        position: 'absolute',
    },
    directionsContainer: {
        maxWidth: '600px',
        marginRight: 'auto',
        marginLeft: 'auto',
    },
    directionsGrid: {
        minHeight: '35vh',
        display: 'grid',
        gridTemplateColumns: '33.3% 33.3% 33.3%',
        gridTemplateRows: '20% 20% 20% 20% 20%',
        justifyItems: 'center',
        justifyContent: 'space-evenly',
    },
    upstairs: {
        gridColumn: '2',
    },
    north: {
        gridColumn: '2',
        gridRow: '2',
    },
    east: {
        gridColumn: '3',
        gridRow: '3',
    },
    west: {
        gridColumn: '1',
        gridRow: '3',
    },
    south: {
        gridColumn: '2',
        gridRow: '4',
    },
    downstairs: {
        gridColumn: '2',
        gridRow: '5',
    },
    enter: {
        gridColumn: '2',
        gridRow: '3',
    },
    end: {
        gridColumn: '2',
        gridRow: '3',
    }
};


const Icon =
  ({ isUnlocked }) => 
      isUnlocked
          ? <img src="./images/unlocked.svg" alt="an unlocked padlock" style={styles.icon} />
          : <img src="./images/locked.svg" alt="a locked padlock" style={styles.icon} />;


Icon.propTypes = {
    isUnlocked: PropTypes.bool.isRequired,
};


const Directions = 
  () => {
      const { 
          gameState,
          changeRoom,
      } = 
        React.useContext(GameContext);


      const { 
          currentRoom,
          inventory,
          rooms,
      } = 
        gameState;
  
        
      return (
          <section style={styles.directionsContainer}>
              <div style={styles.directionsGrid}>
                  { currentRoom
                      .availableDirections
                      .map(
                          ({ text, room }) => 
                              <span 
                                  key={id()}
                                  style={styles[text.toLowerCase()]}
                              >
                                  <Button 
                                      onClick={() => changeRoom(room)} 
                                      text={text}
                                      testKey={`Button${text}${room}`}
                                  />
                                  { !isUnlocked({
                                      room: rooms[room], 
                                      itemsUsed: inventory.itemsUsed
                                  }) && <span style={styles.iconContainer}>
                                      <img src="./images/locked.svg" alt="a locked padlock" style={styles.icon} />
                                  </span> }
                              </span>
                      )
                  }
              </div>
          </section>
      );
  };


export default Directions;