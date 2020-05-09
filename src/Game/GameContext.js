import React, { createContext, useReducer, useCallback } from 'react';
import PropTypes from 'prop-types';
import { isUnlocked, defaultUnsuccessfulEntryAttemptMessage } from './rooms.ts';
import { itemCanBeUsed, itemHasBeenPickedUp } from './items';
import playSoundEffect from '../audio';
import { ApplicationContext } from '../Application/ApplicationContext';
import { itemsEndpoint, roomsEndpoint } from '../properties';


export
const GameContext =
  createContext();


export
const states = {
    LOADING_ITEMS: 'LOADING_ITEMS',
    LOADING_ROOMS: 'LOADING_ROOMS',
    DISPLAYING_DIRECTIONS: 'DISPLAYING_DIRECTIONS',
    DISPLAYING_INVENTORY: 'DISPLAYING_INVENTORY',
};


const initialState = {
    state: states.LOADING_ROOMS,
    currentRoom: null,
    inventory: {
        itemsHeld: [],
        itemsUsed: [],
    },
    message: null,  // This is used to give temporary contextual info to the player
};


const actions = {
    REGISTER_ROOMS: 'REGISTER_ROOMS',
    REGISTER_ITEMS: 'REGISTER_ITEMS',
    ADD_ITEMS: 'ADD_ITEMS',
    EXAMINE_ITEM: 'EXAMINE_ITEM',
    EXAMINE_ROOM: 'EXAMINE_ROOM',
    CHANGE_ROOM: 'CHANGE_ROOM',
    SHOW_DIRECTIONS: 'SHOW_DIRECTIONS',
    SHOW_INVENTORY: 'SHOW_INVENTORY',
    USE_ITEM: 'USE_ITEM',
    LOAD_GAME: 'LOAD_GAME'
};


const update = 
     (state, action) => {
         switch (action.type) {

         case actions.LOAD_GAME: 
             return {
                 ...action.payload
             };

         case actions.REGISTER_ROOMS: 
             return {
                 ...state,
                 currentRoom: action.data['START'],
                 state: states.LOADING_ITEMS,
                 rooms: action.data
             };
            
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
                     room: state.rooms[action.payload.roomKey],
                     itemsUsed: state.inventory.itemsUsed
                 })
                     ? {
                         ...state,
                         currentRoom: state.rooms[action.payload.roomKey],
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
                             message: state.rooms[action.payload.roomKey].messageOnUnsuccessfulEntryAttempt 
                            || defaultUnsuccessfulEntryAttemptMessage,
                         }
                         : { 
                             ...state,
                             message: state.rooms[action.payload.roomKey].messageOnUnsuccessfulEntryAttempt 
                            || defaultUnsuccessfulEntryAttemptMessage,
                         }
             );



         case actions.EXAMINE_ROOM: 
             if (state.currentRoom.item 
             && !itemHasBeenPickedUp({ 
                 item: state.currentRoom.item,
                 inventory: state.inventory
             })
             ) {
                 const newItem = 
                     state.items[state.currentRoom.item];

                 playSoundEffect({ 
                     filename: 'success_chime', soundEnabled: action.payload.soundEnabled
                 });

                 return { 
                     ...state,
                     inventory: 
                       { 
                           ...state.inventory,
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
                                  .filter((key) => 
                                      key !== action.payload.itemKey
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
    

      const [
          gameState,
          dispatch,
      ] = 
        useReducer(update, initialState);



      const getRooms = 
        async () => {
            const response = 
                await fetch(roomsEndpoint);

            const jsonResponse =
                    await response.json();

            dispatch({
                type: actions.REGISTER_ROOMS,
                data: JSON.parse(jsonResponse.body)
            });
        };


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


      const loadGame = 
            useCallback(
                (gameState) => {
                    dispatch({
                        type: actions.LOAD_GAME,
                        payload: gameState
                    });
                },
                [dispatch]
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
          loadGame,
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