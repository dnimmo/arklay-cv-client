import React from 'react';

import { ApplicationContext, states } from './ApplicationContext';


const Application = 
  () => {
      const { applicationState, startGame } = React.useContext(ApplicationContext);

      switch (applicationState) {
      case states.DISPLAYING_TITLE_SCREEN:
          return (
              <div>
                  <button onClick={startGame}>Start!</button>
              </div>
          );
          
      case states.DISPLAYING_GAME:
          return (
              <div>
                  <p>This is the game!</p>
              </div>
          );

      default: 
          return (
              // Placeholder for `error` view
              <div>
                  <p>Something has gone wrong! :(</p>
              </div>
          );

      }
  };

export default Application;