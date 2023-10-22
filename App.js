import 'react-native-gesture-handler';

import React from 'react';
import { View, Text } from 'react-native';
import Contacts from './Screen/Contacts'
import Profile from './Screen/Profile';
import DrawerNavigator from './Router/Router';
import Favorites from './Screen/Favorites';
import User from './Screen/User';
import Options from './Screen/Options';
import Store from './store';
import { Provider } from 'react-redux';


const App = () => {

  return (
    <Provider store={Store}>
      <DrawerNavigator />
    </Provider>

  );
}
export default App; 