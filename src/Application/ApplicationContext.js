import React, { createContext, useReducer, useCallback } from 'react';
import PropTypes from 'prop-types';
import {playBgMusic, stopBgMusic} from '../audio';



export 
const ApplicationContext = 
  createContext();

export
const states = { 
    DISPLAYING_TITLE_SCREEN: 'DISPLAYING_TITLE_SCREEN',
    DISPLAYING_GAME: 'DISPLAYING_GAME',
};


const initialState = { 
    state: states.DISPLAYING_TITLE_SCREEN,
    soundEnabled: false,
    saveData: JSON.parse(localStorage.getItem('saveData'))
};


const actions = { 
    START_GAME: 'START_GAME',
    DISABLE_SOUND: 'DISABLE_SOUND',
    ENABLE_SOUND: 'ENABLE_SOUND',
};


const update = 
  (state, action) => {
      switch (action.type) {
      case actions.START_GAME: 
          if (action.payload === true) {
              playBgMusic();
          }

          return {
              state: states.DISPLAYING_GAME,
              soundEnabled: action.payload,
          };


      case actions.LOAD_GAME: 
          if (state.saveData.applicationState.soundEnabled) {
              playBgMusic();
          }


          return {
              state: states.DISPLAYING_GAME,
              soundEnabled: state.saveData.applicationState.soundEnabled,
          };


      case actions.DISABLE_SOUND: 
          stopBgMusic();

          return {
              ...state,
              soundEnabled: false,
          };

      
      case actions.ENABLE_SOUND: 
          playBgMusic();

          return {
              ...state,
              soundEnabled: true,
          };


      default: 
          return state;
      }
  };


const ApplicationProvider = 
  ({ children }) => {
      const [   
          applicationState
          , dispatch
      ] = 
        useReducer(update, initialState);  


      const startGame = useCallback(
          ({ soundEnabled }) => {
              localStorage.setItem('saveData', null);
              
              dispatch({
                  type: actions.START_GAME,
                  payload: soundEnabled,
              });
          },
          // The second argument here is an array of things that the first argument relies on
          // This is so it knows what to ignore to avoid unnecessary re-renders
          [dispatch]
      );


      const loadGame = useCallback(
          () => {
              dispatch({ 
                  type: actions.LOAD_GAME,
              });
          },
          [dispatch]
      );


      const enableSound = useCallback(
          () => {
              dispatch({
                  type: actions.ENABLE_SOUND,
              });
          },
          [dispatch]
      );


      const disableSound = useCallback(
          () => {
              dispatch({
                  type: actions.DISABLE_SOUND,
              });
          },
          [dispatch]
      );


      const saveGame = 
          ({ gameState }) => {
              // this feels like it belongs in the Application Context, but needs data from both AppContext and GameContext
              localStorage
                  .setItem('saveData', 
                      JSON.stringify({ 
                          gameState, 
                          applicationState
                      })
                  );
          }; 


      const value = {  
          applicationState,
          startGame,
          enableSound,
          disableSound,
          saveGame,
          loadGame,
      };


      return (
          <ApplicationContext.Provider value={value}>
              {children}
          </ApplicationContext.Provider>
      );
  };

ApplicationProvider.propTypes =
  { children: PropTypes.object.isRequired };


export default ApplicationProvider;