import React from 'react';
import PropTypes from 'prop-types';

const style = {
    backgroundColor: 'rgba(255,0,0,0.7)',
    padding: '20px',
    color: 'white',
    borderRadius: '5px',
    boxShadow: '5px 5px 5px rgba(0,0,0,0.3)'
};

const Error = 
  ({ description }) => 
      <div style={style}>
          <h1>Something has gone wrong</h1>
          <p>{description}</p>
      </div>;

Error.propTypes = {
    description: PropTypes.string.isRequired
};

export default Error;