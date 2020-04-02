import React from 'react';
import ApplicationProvider from './ApplicationContext';
import Application from './Application';


const ApplicationIndex = 
  () =>  
      <ApplicationProvider>
          <Application />
      </ApplicationProvider>;


export default ApplicationIndex;