import React, { useContext } from 'react';
import { ApplicationContext } from './ApplicationContext';
import Button from '../components/Button';


const style = {
    minHeight: '50vh'
    , paddingTop: '20vh'
};


const TitleScreen = 
  () => {
      const { startGame } = useContext(ApplicationContext);


      return (
          <div
              style={style}>
              <h1>Project Arklay</h1>
              <Button 
                  onClick={startGame}
                  text="Start game"
              />
          </div>
      );
  };


export default TitleScreen;