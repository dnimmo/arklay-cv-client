import React, { createContext, useReducer, useCallback } from 'react';
import PropTypes from 'prop-types';
import getRoom, { isUnlocked, defaultUnsuccessfulEntryAttemptMessage } from './rooms.ts';
import { itemCanBeUsed, itemHasBeenPickedUp } from './items';
import playSoundEffect from '../audio';
import { ApplicationContext } from '../Application/ApplicationContext';
import { itemsEndpoint, roomsEndpoint } from '../properties';


export
const GameContext =
  createContext();


export
const states = {
    LOADING: 'LOADING',
    DISPLAYING_DIRECTIONS: 'DISPLAYING_DIRECTIONS',
    DISPLAYING_INVENTORY: 'DISPLAYING_INVENTORY',
};


const initialState = {
    state: states.LOADING,
    currentRoom: getRoom('START'),
    inventory: {
        itemsHeld: [],
        itemsUsed: [],
    },
    message: null,  // This is used to give temporary contextual info to the player
};


const actions = {
    REGISTER_ITEMS: 'REGISTER_ITEMS',
    ADD_ITEMS: 'ADD_ITEMS',
    EXAMINE_ITEM: 'EXAMINE_ITEM',
    EXAMINE_ROOM: 'EXAMINE_ROOM',
    CHANGE_ROOM: 'CHANGE_ROOM',
    SHOW_DIRECTIONS: 'SHOW_DIRECTIONS',
    SHOW_INVENTORY: 'SHOW_INVENTORY',
    USE_ITEM: 'USE_ITEM',
};


const update = 
     (state, action) => {
         console.log(action.data);
         switch (action.type) {
         case actions.REGISTER_ITEMS: 
             return {
                 ...state,
                 state: states.DISPLAYING_DIRECTIONS,
                 items: action.data
             };

         case actions.HIDE_INVENTORY:
             return {
                 ...state,
                 state: states.DISPLAYING_DIRECTIONS,
                 message: null,
             };


         case actions.SHOW_INVENTORY: 
             return (
                 state.inventory.itemsHeld.length > 0
                     ? {
                         ...state,
                         state: states.DISPLAYING_INVENTORY,
                         message: null,
                     }
                     : {
                         ...state,
                         message: 'Your inventory is empty!',
                     }
             );


         case actions.CHANGE_ROOM:
             return (
                 isUnlocked({ 
                     room: getRoom(action.payload.roomKey),
                     itemsUsed: state.inventory.itemsUsed
                 })
                     ? {
                         ...state,
                         currentRoom: getRoom(action.payload.roomKey),
                         message: null,
                     }
                     : playSoundEffect({ 
                         filename: 'failure',  
                         soundEnabled: action.payload.soundEnabled ,
                     }) || 
                    state.inventory.itemsHeld.length > 0 
                         ? { 
                             ...state,
                             state: states.DISPLAYING_INVENTORY,
                             message: getRoom(action.payload.roomKey).messageOnUnsuccessfulEntryAttempt 
                            || defaultUnsuccessfulEntryAttemptMessage,
                         }
                         : { 
                             ...state,
                             message: getRoom(action.payload.roomKey).messageOnUnsuccessfulEntryAttempt 
                            || defaultUnsuccessfulEntryAttemptMessage,
                         }
             );



         case actions.EXAMINE_ROOM: 
             if (state.currentRoom.item 
                && !itemHasBeenPickedUp({ 
                    item: state.currentRoom.item,
                    inventory: state.inventory
                })) {
                 const newItem = 
                     state.items[state.currentRoom.item];

                 console.log(newItem);

                 playSoundEffect({ filename: 'success_chime', soundEnabled: action.payload.soundEnabled});

                 return { 
                     ...state,
                     inventory: 
                       { ...state.inventory,
                           itemsHeld: state.inventory.itemsHeld.concat(newItem),
                       },
                     message: 
                       `${newItem.name} has been added to your inventory`,
                 };
             } else {
                 playSoundEffect({ filename: 'failure', soundEnabled: action.payload.soundEnabled }); 
            
                 return {
                     ...state,
                     message: 
                  state.currentRoom.descriptionWhenExamined,
                 }; 
             }

      
         case actions.USE_ITEM:
             return (
                 itemCanBeUsed({
                     availableDirections: state.currentRoom.availableDirections,
                     item: action.payload.itemKey,
                 })
                     ? playSoundEffect({
                         filename: state.items[action.payload.itemKey].soundWhenUsed,
                         soundEnabled: action.payload.soundEnabled,
                     }) 
                    || {
                        ...state,
                        state: states.DISPLAYING_DIRECTIONS,
                        message: state.items[action.payload.itemKey].messageWhenUsed,
                        inventory: {
                            itemsHeld: 
                              state
                                  .inventory
                                  .itemsHeld
                                  .filter(x => 
                                      x !== action.payload.itemKey
                                  ),

                            itemsUsed: 
                              state
                                  .inventory
                                  .itemsUsed
                                  .concat(action.payload.itemKey)
                        },
                    }
                     : playSoundEffect({
                         filename: 'failure', 
                         soundEnabled: action.payload.soundEnabled,
                     }) 
                    || {
                        ...state,
                        message: 
                            state
                                .items[action.payload.itemKey]
                                .messageWhenNotUsed,
                    }
             );


         default: 
             return state;
         }
     };


const GameProvider = 
  ({ children }) => {
      const { applicationState: { soundEnabled } } =
        React.useContext(ApplicationContext);


      const getRooms = 
        async () => {
            const rooms = 
                await fetch(roomsEndpoint);

            console.log(rooms);
        };
    

      const [
          gameState,
          dispatch,
      ] = 
        useReducer(update, initialState);


      const getItems =
        async () => {
            const response = 
                await fetch(itemsEndpoint);

            const jsonResponse =
                await response.json();

            dispatch({
                type: actions.REGISTER_ITEMS,
                data: JSON.parse(jsonResponse.body)
            });
        };


      const hideInventory =
        useCallback(
            () => {
                dispatch({
                    type: actions.HIDE_INVENTORY,
                });
            },
            [dispatch]
        );
      

      const showInventory = 
        useCallback(
            () => {
                dispatch({
                    type: actions.SHOW_INVENTORY,
                });
            },
            [dispatch]
        );


      const changeRoom =
        useCallback(
            (roomKey) => {
                dispatch({
                    type: actions.CHANGE_ROOM,
                    payload: { roomKey, soundEnabled },
                });
            },
            [dispatch, soundEnabled]
        );


      const attemptToUseItem =
        useCallback(
            (itemKey) => {
                dispatch({
                    type: actions.USE_ITEM,
                    payload: { itemKey, soundEnabled },
                });
            },
            [dispatch, soundEnabled]
        );


      const examineRoom =
        useCallback(
            () => {
                dispatch({
                    type: actions.EXAMINE_ROOM,
                    payload: { soundEnabled },
                });
            },
            [dispatch, soundEnabled]
        );


      const value = {
          getItems,
          getRooms,
          gameState,
          hideInventory,
          showInventory,
          changeRoom,
          attemptToUseItem,
          examineRoom,
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
    children: PropTypes.object,
};


export default GameProvider;