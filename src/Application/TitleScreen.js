import React, { useContext } from 'react';
import { ApplicationContext } from './ApplicationContext';


const TitleScreen = 
  () => {
      const { startGame } = useContext(ApplicationContext);

      
      return (
          <div>
              <h1>Project Arklay</h1>
              <button onClick={startGame}>Start!</button>
          </div>
      );
  };


export default TitleScreen;