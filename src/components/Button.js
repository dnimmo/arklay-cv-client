import React from 'react';
import PropTypes from 'prop-types';


const style = { 
    padding: '10px 20px'
    , borderRadius: '5px'
    , backgroundColor: 'rgba(0,0,0,0.5)'
    , color: '#fafafa'
    , fontSize: '20px'
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