import React, { useState } from 'react';
// import { NavigationContainer } from '@react-navigation/native'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import HomeLogo from '../../assets/images/home.svg';
import SearchLogo from '../../assets/images/search.svg';
import FriendsLogo from '../../assets/images/user-friends.svg';
import { 
  Text, 
  View, 
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  TextInput,
  Keyboard
} from 'react-native';
import * as Animatable from 'react-native-animatable';

export default MainNavigation = (props) =>{
  
  const [toggleHome, setToggleHome] = useState(true);
  const [toggleSearch, setToggleSearch] = useState(false);
  const [toggleFriends, setToggleFriends] = useState(false);

  const handleToggleHome = ()=>{
    setToggleHome(true);
    setToggleSearch(false);
    setToggleFriends(false);
  };

  const handleToggleSearch = ()=>{
    setToggleSearch(true);
    setToggleHome(false);
    setToggleFriends(false);
  };

  const handleToggleFriends = ()=>{
    setToggleFriends(true);
    setToggleSearch(false);
    setToggleHome(false);
  }

  return(
    <View style={styles.container}>
      <View style={styles.navContent}>
      <TouchableOpacity onPress={handleToggleHome}>
        <View style={toggleHome ? styles.homeNavActive : styles.homeNavInactive}>
          <HomeLogo width={20} height={20} style={{marginLeft: 15}} />
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={handleToggleSearch}>
        <View style={toggleSearch? styles.searchNavActive : styles.searchNavInactive}>
          <SearchLogo width={20} height={20} />
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={handleToggleFriends}>
        <View style={toggleFriends? styles.friendsNavActive : styles.friendsNavInactive}>
          <FriendsLogo width={20} height={20} style={{marginRight: 15}} />
        </View>
      </TouchableOpacity>
      </View>
      {toggleSearch? 
      <Animatable.View animation="slideInDown" duration={200} style={styles.searchBarContainer}>
        <TextInput style={{textAlign: 'center'}} placeholder='Search' />
      </Animatable.View> :
      <View></View>
      }
    </View>
  )
}

const {height, width} = Dimensions.get('window');

const styles = StyleSheet.create({
  container:{
    width: width
  },
  navContent:{
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingTop: "2%"
  },
  homeNavActive:{
    height: 30,
    width: 70,
    backgroundColor: '#f1f1f1',
    justifyContent: 'center',
    alignItems: 'flex-start',
    borderRadius: 15
  },
  searchNavActive:{
    height: 30,
    width: 70,
    backgroundColor: '#f1f1f1',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 15
  },
  friendsNavActive:{
    height: 30,
    width: 70,
    backgroundColor: '#f1f1f1',
    justifyContent: 'center',
    alignItems: 'flex-end',
    borderRadius: 15
  },
  homeNavInactive:{
    height: 30,
    width: 70,
    backgroundColor: '#f1f1f100',
    justifyContent: 'center',
    alignItems: 'flex-start',
    borderRadius: 15
  },
  searchNavInactive:{
    height: 30,
    width: 70,
    backgroundColor: '#f1f1f100',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 15
  },
  friendsNavInactive:{
    height: 30,
    width: 70,
    backgroundColor: '#f1f1f100',
    justifyContent: 'center',
    alignItems: 'flex-end',
    borderRadius: 15
  },
  searchBarContainer:{
    height: 40,
    width: '80%',
    borderWidth: .5,
    borderColor: '#707070',
    alignSelf:'center',
    marginTop: 10,
    borderRadius: 20,
    backgroundColor: 'white'
  }
});