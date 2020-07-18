import React, { useState } from 'react';
import {
  Text,
  View,
  StyleSheet,
  Dimensions
} from 'react-native';


export default TeorethicalCard = () =>{
  return(
    <View>
      <View>
        <Text style={{fontFamily: 'Poppins-Bold', fontSize: 17, marginBottom: -5}}>Let's discover the World.</Text>
        <Text style={{fontFamily: 'Poppins-Regular', fontSize: 12, width: '85%'}}>Read some historical or learn how to improve your joy!</Text>
      </View>
      <View style={styles.cardContainer}>
          <View style={styles.card}>
            <Text style={{alignSelf:'center'}}>TeorethicalCard</Text>
          </View>
          <View style={styles.card}>
            <Text style={{alignSelf:'center'}}>TeorethicalCard</Text>
          </View>
      </View>
    </View>
  )
}

const {height, width} = Dimensions.get('window');

const styles = StyleSheet.create({
  container:{
    marginBottom: 30
    },
  card:{
    height: 150,
    backgroundColor: '#fff',
    marginBottom: 10,
    shadowOffset: {width:0, height: 2},
    shadowOpacity: .2,
    shadowRadius: 2,
    shadowColor: '#000',
    elevation: 2,
    borderRadius: 2
  },
  cardContainer:{
    width: '100%',
    alignSelf: 'center',
    justifyContent:'space-between',
    flexDirection:'column',
    paddingTop: 10
  }
});