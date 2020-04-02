import React from 'react';
import ReactDOM from 'react-dom';
import Application from './Application/Application'
import ApplicationProvider from './Application/ApplicationContext';

const rootElement = document.getElementById('root');


ReactDOM.render(
  <ApplicationProvider>
    <Application />
  </ApplicationProvider>
  , rootElement
);