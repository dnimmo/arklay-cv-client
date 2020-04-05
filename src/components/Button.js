import React from 'react';
import PropTypes from 'prop-types';


const style = { 
    padding: '10px 20px'
    , borderRadius: '5px'
    , backgroundColor: 'darkslategrey'
    , color: '#fafafa'
    , fontSize: '16px'
    , cursor: 'pointer'
    , marginBottom: '20px'
    , border: '2px solid'
};


const Button = 
  ({ onClick, text }) => 
      <button 
          onClick={onClick}
          style={style}
      >
          {text}
      </button>;


Button.propTypes = {
    onClick: PropTypes.func.isRequired
    , text: PropTypes.string.isRequired
};

  
export default Button;