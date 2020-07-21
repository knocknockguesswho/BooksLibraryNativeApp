import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import Home from './src/screens/Home';
import Signup from './src/screens/Signup';
import SearchResult from './src/screens/SearchResult';
import BookDetail from './src/screens/BookDetail';
import FilterResult from './src/screens/FilterResult';

import Dashboard from './src/tab/Dashboard';
import Search from './src/tab/Search';
import FriendList from './src/tab/FriendList';

import { Provider } from 'react-redux';
import storage from './src/redux/Store';
import { PersistGate } from 'redux-persist/integration/react';

const { store, persistor } = storage

const Stack = createStackNavigator();

// const Tab = createMaterialTopTabNavigator()

// const TabNav = ()=>{
//   return(
    // <Tab.Navigator
    //   initialRouteName= 'Dashboard'
    // >
    //   <Tab.Screen name='Dashboard' component={Dashboard} />
    //   <Tab.Screen name='Search' component={Search}/>
    //   <Tab.Screen name='FriendList' component={FriendList} />
    // </Tab.Navigator>
//   )
// }

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
              <Stack.Screen name='BookDetail' component={BookDetail} />
              <Stack.Screen name='FilterResult' component={FilterResult} />
            </Stack.Navigator>
          </NavigationContainer>
        </PersistGate>
      </Provider>
    </>
  );
};

export default App;
