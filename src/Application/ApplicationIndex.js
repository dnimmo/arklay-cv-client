import React from 'react';
import ApplicationProvider from './ApplicationContext';
import Application from './Application';


const style =
  { minHeight: '100vh'};


const ApplicationIndex = 
  () =>  
      <ApplicationProvider>
          <Application 
              style={style}
          />
      </ApplicationProvider>;


export default ApplicationIndex;