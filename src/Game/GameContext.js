import React, { createContext, useReducer, useCallback } from 'react';
import PropTypes from 'prop-types';
import rooms, { isUnlocked, defaultUnsuccessfulEntryAttemptMessage } from './rooms';
import items, { itemCanBeUsed, itemHasBeenPickedUp } from './items';

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
    , message: null  // This is used to give temporary contextual info to the player
};


const actions = {
    EXAMINE_ITEM: 'EXAMINE_ITEM'
    , EXAMINE_ROOM: 'EXAMINE_ROOM'
    , CHANGE_ROOM: 'CHANGE_ROOM'
    , SHOW_DIRECTIONS: 'SHOW_DIRECTIONS'
    , SHOW_INVENTORY: 'SHOW_INVENTORY'
    , USE_ITEM: 'USE_ITEM'
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
              isUnlocked({ 
                  room: rooms[action.payload]
                  , itemsUsed: state.inventory.itemsUsed
              })
                  ? {
                      ...state
                      , currentRoom: rooms[action.payload]
                      , message: null
                  }
                  : state.inventory.itemsHeld.length > 0 
                      ? { 
                          ...state
                          , state: states.DISPLAYING_INVENTORY
                          , message: rooms[action.payload].messageOnUnsuccessfulEntryAttempt 
                            || defaultUnsuccessfulEntryAttemptMessage
                      }
                      : { 
                          ...state
                          , message: rooms[action.payload].messageOnUnsuccessfulEntryAttempt 
                            || defaultUnsuccessfulEntryAttemptMessage
                      }
          );



      case actions.EXAMINE_ROOM: 
          return (
              !state.currentRoom.item 
                  ? {
                      ...state
                      , message: state.currentRoom.descriptionWhenExamined
                  }
                  : itemHasBeenPickedUp({ 
                      item: state.currentRoom.item
                      , inventory: state.inventory
                  }) 
                      ? {
                          ...state
                          , message: 
                              state.currentRoom.descriptionWhenExamined
                      }
                      : { ...state
                          , inventory: 
                              { ...state.inventory
                                  , itemsHeld: state.inventory.itemsHeld.concat(state.currentRoom.item)
                              }
                          , message: 
                            `${items[state.currentRoom.item].name} has been added to your inventory`
                      }
            
          );

      
      case actions.USE_ITEM:
          return (
              itemCanBeUsed({
                  availableDirections: state.currentRoom.availableDirections
                  , item: action.payload
              })
                  ? {
                      ...state
                      , state: states.DISPLAYING_DIRECTIONS
                      , message: items[action.payload].messageWhenUsed
                      , inventory: {
                          itemsHeld: 
                              state
                                  .inventory
                                  .itemsHeld
                                  .filter(x => 
                                      x !== action.payload
                                  )
                          , itemsUsed: 
                              state
                                  .inventory
                                  .itemsUsed
                                  .concat(action.payload)
                      }
                  }
                  : {
                      ...state
                      , message: items[action.payload].messageWhenNotUsed
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


      const attemptToUseItem =
        useCallback(
            (itemKey) => {
                dispatch({
                    type: actions.USE_ITEM,
                    payload: itemKey
                });
            },
            [dispatch]
        );


      const examineRoom =
        useCallback(
            (roomKey) => {
                dispatch({
                    type: actions.EXAMINE_ROOM,
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
          , attemptToUseItem
          , examineRoom
      };


      return (
          <GameContext.Provider 
              value={value}
          >
              {children}
          </GameContext.Provider>
      );
  };


GameProvider.propTypes = {
    children: PropTypes.object
};


export default GameProvider;