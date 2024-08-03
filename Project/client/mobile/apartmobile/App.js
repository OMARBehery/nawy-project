import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

import Apartlist from './screens/Apartlist';
import Details from './screens/Details';
export default function App() {
  
 

  const Stack = createStackNavigator();
    return (<>
      
    <Apartlist/>
      </>
      
    
    );
  }
