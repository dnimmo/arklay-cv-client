import React, { createContext, useReducer, useCallback } from 'react';
import PropTypes from 'prop-types';
import rooms from './rooms';

export
const GameContext =
  createContext();


export
const states = {
    DISPLAYING_DIRECTIONS: 'DISPLAYING_DIRECTIONS'
    , DISPLAYING_INVENTORY: 'DISPLAYING_INVENTORY'
};


const initialState = {
    state: states.DISPLAYING_DIRECTIONS
    , currentRoom: rooms.START
    , inventory: {
        itemsHeld: []
        , itemsUsed: []
    }
};


const actions = {
    EXAMINE_ITEM: 'EXAMINE_ITEM'
    , EXAMINE_ROOM: 'EXAMINE_ROOM'
    , MOVE_IN_DIRECTION: 'MOVE_IN_DIRECTION'
    , SHOW_DIRECTIONS: 'SHOW_DIRECTIONS'
    , SHOW_INVENTORY: 'SHOW_INVENTORY'
};


const update = 
  (state, action) => {
      switch (action.type) {
      case actions.SHOW_INVENTORY: 
          return {
              ...state
              , state: states.DISPLAYING_INVENTORY
          };
      default: 
          return state;
      }
  };


const GameProvider = 
  ({ children }) => {
      const [
          gameState
          , dispatch
      ] = 
        useReducer(update, initialState);


      const showInventory = 
        useCallback(
            () => {
                dispatch({
                    type: actions.SHOW_INVENTORY
                });
            },
            [dispatch]
        );


      const value = { 
          gameState
          , showInventory
      };


      return (
          <GameContext.Provider value={value}>
              {children}
          </GameContext.Provider>
      );
  };


GameProvider.propTypes = {
    children: PropTypes.array.isRequired
};


export default GameProvider;