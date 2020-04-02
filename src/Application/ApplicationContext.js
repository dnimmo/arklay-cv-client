import React, { createContext, useReducer, useCallback } from 'react';

export 
const ApplicationContext = 
  createContext();


const states = 
  { DISPLAYING_TITLE_SCREEN: 'DISPLAYING_TITLE_SCREEN'
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
        return console.log('Start game!')

      default: 
        return state;
    }
  }


export
const ApplicationProvider = 
  ({ children }) => {
    const 
      [ applicationState
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


    const value = 
      { applicationState
      , startGame
      }

      
    return (
      <ApplicationContext.Provider value={value}>
        {children}
      </ApplicationContext.Provider>
    );
  };


export default ApplicationProvider;