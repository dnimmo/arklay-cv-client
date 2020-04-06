import React, { useContext } from 'react';
import { ApplicationContext } from './ApplicationContext';
import Button from '../components/Button';


const style = {
    minHeight: '50vh'
    , padding: '10vw'
    , lineHeight: '26px'
};


const TitleScreen = 
  () => {
      const { startGame } = useContext(ApplicationContext);


      return (
          <div
              style={style}>
              <h1>Project Arklay</h1>
              <p>Your head hurts. You&apos;re not sure where you are, and you definitely don&apos;t know how you got here. There&apos;s rain thrashing the ground all around you. You figure you might as well try and understand what the Hell is going on...</p>
              <Button 
                  onClick={startGame}
                  text="Start game"
              />
          </div>
      );
  };


export default TitleScreen;