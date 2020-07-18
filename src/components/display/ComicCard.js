import React, { useState } from 'react';
import {
  Text,
  View,
  StyleSheet,
  Dimensions
} from 'react-native';


export default ComicCard = () =>{
  return(
    <View style={styles.container}>
      <View>
        <Text style={{fontFamily: 'Poppins-Bold', fontSize: 17, marginBottom: -5}}>マンガ大好き！</Text>
        <Text style={{fontFamily: 'Poppins-Regular', fontSize: 12, width: '85%'}}>Want to go to JAPAN. Read Manga comic may help you to feel the sense of Japan.</Text>
      </View>
      <View style={styles.cardContainer}>
          <View style={styles.card}>
            <Text style={{alignSelf:'center'}}>ComicCard</Text>
          </View>
          <View style={styles.card}>
            <Text style={{alignSelf:'center'}}>ComicCard</Text>
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