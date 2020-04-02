import React from 'react';

import { ApplicationContext, states } from './ApplicationContext';
import TitleScreen from './TitleScreen';
import GameIndex from '../Game/GameIndex';
import Error from './Error';

const Application = 
  () => {
      const { applicationState } = 
        React.useContext(ApplicationContext);

      switch (applicationState) {
      case states.DISPLAYING_TITLE_SCREEN:
          return <TitleScreen />;

      case states.DISPLAYING_GAME:
          return <GameIndex />;

      default: 
          return (
              <Error 
                  description={'Application has ended up in an unexpected state'} 
              />
          );

      }
  };

export default Application;