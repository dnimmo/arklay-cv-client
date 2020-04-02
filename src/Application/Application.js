import React from 'react'

import { ApplicationContext } from './ApplicationContext'

const Application = 
  () => {
    const { startGame } = React.useContext(ApplicationContext)
    
  return (
    <div>
      <button onClick={startGame}>Start!</button>
    </div>
    );
  };

export default Application;