import React from 'react';
import { GameContext } from './GameContext';

const Game = 
  () => { 
      const { showInventory } = 
        React.useContext(GameContext);

        
      return (
          <div>
              <section>Room info here</section>
              <section>
                  <p>Inventory here</p>
                  <button onClick={ showInventory }>Show inventory</button>
              </section>
          </div>
      );
  };

export default Game;