import React from 'react';
import Game from './Game';
import GameProvider from './GameContext';

const GameIndex = 
  () => 
      <GameProvider>
          <Game />;
      </GameProvider>;


export default GameIndex;