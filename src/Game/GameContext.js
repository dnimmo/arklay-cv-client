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
    , message: null  // This is used to give temporary contextual info to the user
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
              , message: null
          };


      case actions.SHOW_INVENTORY: 
          return (
              state.inventory.itemsHeld.length > 0
                  ? {
                      ...state
                      , state: states.DISPLAYING_INVENTORY
                      , message: null
                  }
                  : {
                      ...state
                      , message: 'Your inventory is empty!'
                  }
          );


      case actions.CHANGE_ROOM:
          return (
              rooms[action.payload].unlockRequirements 
                  ? { 
                      ...state
                      , message: rooms[action.payload].messageOnUnsuccessfulEntryAttempt
                  }
                  : {
                      ...state
                      , currentRoom: rooms[action.payload]
                      , message: null
                  }
          );


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


      const showMessage =
        useCallback(
            (messageToDisplay) => {
                dispatch({
                    type: actions.UPDATE_MESSAGE,
                    payload: messageToDisplay
                });
            },
            [dispatch]
        );


      const value = { 
          gameState
          , hideInventory
          , showInventory
          , changeRoom
          , showMessage
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