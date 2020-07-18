import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Home from './src/screens/Home';
import Signup from './src/screens/Signup';
import SearchResult from './src/screens/SearchResult';

import { Provider } from 'react-redux';
import storage from './src/redux/Store';
import { PersistGate } from 'redux-persist/integration/react';

const { store, persistor } = storage

const Stack = createStackNavigator();

const App = () => {
  return (
    <>
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <NavigationContainer>
            <Stack.Navigator headerMode='none'>
              <Stack.Screen name='Home' component={Home} />
              <Stack.Screen name='Signup' component={Signup} />
              <Stack.Screen name='SearchResult' component={SearchResult} />
            </Stack.Navigator>
          </NavigationContainer>
        </PersistGate>
      </Provider>
    </>
  );
};

export default App;
