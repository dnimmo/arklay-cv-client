import React from 'react';
import PropTypes from 'prop-types';
import { GameContext } from './GameContext';
import Button from '../components/Button';
import { id } from '../utils';
import rooms, { isUnlocked } from './rooms';


const styles = {
    icon : { 
        height: '45px' 
        , width: 'auto'
        , marginLeft: '10px'
    }
    , iconContainer: {
        height: '100%'
    }
    , direction: {
        minWidth: '280px'
        , display: 'inline-block'
        , marginRight: '-65px'
    }
    , directionsContainer: {
        minHeight: '20vh'
    }
};


const Icon =
  ({ isUnlocked }) => 
      isUnlocked
          ? <img src="./images/unlocked.svg" alt="an unlocked padlock" style={styles.icon} />
          : <img src="./images/locked.svg" alt="a locked padlock" style={styles.icon} />;


Icon.propTypes = {
    isUnlocked: PropTypes.bool.isRequired
};


const Directions = 
  () => {
      const { 
          gameState
          , changeRoom
      } = 
        React.useContext(GameContext);


      const { 
          currentRoom
          , inventory 
      } = 
        gameState;
  
        
      return (
          <div style={styles.directionsContainer}>
              <p>DIRECTIONS</p>
              { currentRoom
                  .availableDirections
                  .map(
                      ({ text, room }) => 
                          <span 
                              key={id()}
                              style={styles.direction}
                          >
                              <Button 
                                  onClick={() => changeRoom(room)} 
                                  text={text}
                              />
                              <span style={styles.iconContainer}>
                                  <Icon 
                                      isUnlocked={
                                          isUnlocked({
                                              room: rooms[room]
                                              , itemsUsed: inventory.itemsUsed
                                          })
                                      }
                                  />
                              </span>
                          </span>
                  )
              }
          </div>
      );
  };


export default Directions;