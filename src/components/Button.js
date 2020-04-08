import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';


const StyledButton =
  styled.button`
  padding: 10px 20px;
  border-radius: 5px;
  background-color: darkslategrey;
  color: #fafafa;
  font-size: 16px;
  cursor: pointer;
  margin-bottom: 20px;
  border-width: 2px;
  border-color: #fafafa;
  transition: all 0.2s;
  &:hover {
      border-color: darkslategrey;
      color: darkslategrey;
      background-color: #fafafa;
  }`;



const Button = 
  ({ onClick, text }) => 
      <StyledButton
          onClick={onClick}
      >
          {text}
      </StyledButton>;


Button.propTypes = {
    onClick: PropTypes.func.isRequired
    , text: PropTypes.string.isRequired
};

  
export default Button;