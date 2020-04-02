import React, { createContext, useReducer, useCallback } from 'react';
import PropTypes from 'prop-types';

export 
const ApplicationContext = 
  createContext();

export
const states = { 
    DISPLAYING_TITLE_SCREEN: 'DISPLAYING_TITLE_SCREEN'
    , DISPLAYING_GAME: 'DISPLAYING_GAME'
};


const initialState =
  states.DISPLAYING_TITLE_SCREEN;


const actions = 
  { START_GAME: 'START_GAME'
  };


const update = 
  (state, action) => {
      switch (action.type) {
      case actions.START_GAME: 
          return states.DISPLAYING_GAME;

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
          () => {
              dispatch({
                  type: actions.START_GAME,
              });
          },
          // The second argument here is an array of things that the first argument relies on
          // This is so it knows what to ignore to avoid unnecessary re-renders
          [dispatch]
      );

      const value = {  
          applicationState
          , startGame
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