import React, { useState } from 'react';
import { 
  Text, 
  View, 
  ScrollView,
  StyleSheet,
  Dimensions
} from 'react-native';

export default Carousel = () =>{
  return(
    <>
    <Text style={styles.carouselTitle}>Most Popular</Text>
    <View style={styles.container}>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        <View style={styles.carouselContent}>
          <Text>item 1</Text>
        </View>
        <View style={styles.carouselContent}>
          <Text>item 2</Text>
        </View>
        <View style={styles.carouselContent}>
          <Text>item 3</Text>
        </View>
        <View style={styles.carouselContent}>
          <Text>item 4</Text>
        </View>
        <View style={styles.carouselContent}>
          <Text>item 5</Text>
        </View>
      </ScrollView>
      </View>
      </>
  )
};

const {height, width} = Dimensions.get('window');

const styles = StyleSheet.create({
  container:{
    flexDirection: 'row',
    height: 200,
    width: width,
    paddingTop: 10,
    paddingLeft: 5
  },
  carouselContent:{
    height: 180,
    width: 250,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 5,
    marginLeft: 5,
    marginTop: 5,
    shadowOffset: {width:0, height: 2},
    shadowOpacity: .2,
    shadowRadius: 2,
    shadowColor: '#000',
    elevation: 3,
    borderRadius: 10
  },
  carouselTitle:{
    paddingLeft: 10,
    paddingTop: 20,
    fontSize: 20,
    fontFamily: 'Poppins-Bold', 
    marginBottom: -5
  }
});