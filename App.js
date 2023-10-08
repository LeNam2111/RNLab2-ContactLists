import React from 'react';
import { View, Text } from 'react-native';
import Contacts from '../Screen/Contacts';
import Profile from '../Screen/Profile';
import DrawerNavigator from './Router/Router';
import Favorites from './screens/Favorites';
import User from './screens/User';
import Options from './screens/Options';
import Store from './store';
import { Provider } from 'react-redux';
const App = () => {

  return (
    <Provider store={Store}>
      <DrawerNavigator/>
    </Provider>

  );
}
export default App; 