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
    , CHANGE_ROOM: 'CHANGE_ROOM'
    , SHOW_DIRECTIONS: 'SHOW_DIRECTIONS'
    , SHOW_INVENTORY: 'SHOW_INVENTORY'
};


const update = 
  (state, action) => {
      switch (action.type) {
      case actions.HIDE_INVENTORY:
          return {
              ...state
              , state: states.DISPLAYING_DIRECTIONS
          };

      case actions.SHOW_INVENTORY: 
          return {
              ...state
              , state: states.DISPLAYING_INVENTORY
          };

      case actions.CHANGE_ROOM:
          return {
              ...state
              , currentRoom: rooms[action.payload]
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


      const hideInventory =
        useCallback(
            () => {
                dispatch({
                    type: actions.HIDE_INVENTORY
                });
            },
            [dispatch]
        );
      

      const showInventory = 
        useCallback(
            () => {
                dispatch({
                    type: actions.SHOW_INVENTORY
                });
            },
            [dispatch]
        );


      const changeRoom =
        useCallback(
            (roomKey) => {
                dispatch({
                    type: actions.CHANGE_ROOM,
                    payload: roomKey
                });
            },
            [dispatch]
        );


      const value = { 
          gameState
          , hideInventory
          , showInventory
          , changeRoom
      };


      return (
          <GameContext.Provider value={value}>
              {children}
          </GameContext.Provider>
      );
  };


GameProvider.propTypes = {
    children: PropTypes.object
};


export default GameProvider;