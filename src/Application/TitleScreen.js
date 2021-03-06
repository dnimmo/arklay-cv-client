import React, { useContext } from 'react';
import { ApplicationContext } from './ApplicationContext';
import Button from '../components/Button';
const styles = {
    container: {
        minHeight: '50vh',
        padding: '5vw',
        lineHeight: '26px',
    },
    introText: {
        padding: '5vw',
    }
};


const TitleScreen = 
  () => {
      const { 
          applicationState: { saveData },
          loadGame, 
          startGame
      } = 
        useContext(ApplicationContext);


      return (
          <div
              style={styles.container}>
              <h1>Project Arklay</h1>
              <p style={styles.introText}>Your head hurts. You&apos;re not sure where you are, and you definitely don&apos;t know how you got here. There&apos;s rain thrashing the ground all around you. You figure you might as well try and understand what the Hell is going on...</p>
              { saveData 
              && <div>
                  <Button 
                      onClick={() => loadGame()}
                      text="Load saved game data"
                      testKey="ButtonLoadGame"
                  />
              </div>
              }
              <div>
                  <Button 
                      onClick={() => startGame({ soundEnabled: true })}
                      text="Start game (with sound)"
                      testKey="ButtonStartWithSound"
                  />
              </div>
              <div>
                  <Button 
                      onClick={() => startGame({ soundEnabled: false })}
                      text="Start game (without sound)"
                      testKey="ButtonStartWithoutSound"
                  />
              </div>
          </div>
      );
  };


export default TitleScreen;