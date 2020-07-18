import React, { useState } from 'react';
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

export default Search = () =>{
  
  return(
    <>
      <View style={styles.container}>
        <View style={styles.header}>
        </View>
      </View>
    </>
  )
}

const {height, width} = Dimensions.get('window')

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    fontFamily: 'Poppins-Regular'
  },
  header:{
    justifyContent: 'center',
    alignItems: 'center',
  },
})