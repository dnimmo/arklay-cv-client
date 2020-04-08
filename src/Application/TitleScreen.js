import React, { useContext } from 'react';
import { ApplicationContext } from './ApplicationContext';
import Button from '../components/Button';
import playMusic from './playMusic';

const styles = {
    container: {
        minHeight: '50vh'
        , padding: '10vw'
        , lineHeight: '26px'
    }
    , introText: {
        padding: '10vw'
    }
};


const TitleScreen = 
  () => {
      const { startGame } = useContext(ApplicationContext);


      return (
          <div
              style={styles.container}>
              <h1>Project Arklay</h1>
              <p style={styles.introText}>Your head hurts. You&apos;re not sure where you are, and you definitely don&apos;t know how you got here. There&apos;s rain thrashing the ground all around you. You figure you might as well try and understand what the Hell is going on...</p>
              <div>
                  <Button 
                      onClick={() => {
                          playMusic();
                          startGame();
                      }
                      }
                      text="Start game"
                  />
              </div>
              <div>
                  <Button 
                      onClick={startGame}
                      text="Start game (without sound)"
                  />
              </div>
          </div>
      );
  };


export default TitleScreen;