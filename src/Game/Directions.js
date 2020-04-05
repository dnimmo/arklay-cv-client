import React from 'react';
import PropTypes from 'prop-types';
import { GameContext } from './GameContext';
import Button from '../components/Button';
import { id } from '../utils';
import rooms, { isUnlocked } from './rooms';


const styles = {
    icon : { 
        height: '16px' 
        , width: 'auto'
    }
    , iconContainer: {
        backgroundColor: '#fafafa'
        , border: '1px solid #fafafa'
        , padding: '2px 4px'
        , borderRadius: '50px'
        , marginLeft: '-15px'
        , marginTop: '-8px'
        , position: 'absolute'
    }
    , direction: {
        minWidth: '280px'
        , display: 'inline-block'
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