import React, { useState } from 'react';
import { Text, View, StyleSheet, Dimensions, ScrollView } from 'react-native';
import Carousel from '../components/display/Carousel';
import NovelCard from '../components/display/NovelCard';
import TeorethicalCard from '../components/display/TeorethicalCard';
import ComicCard from '../components/display/ComicCard';


export default Dashboard = (props)=>{
  console.log(props.navigation)
  return(
    <ScrollView showsVerticalScrollIndicator={false}>
      <Carousel />
      <View style={styles.container}>
        <NovelCard />
        <ComicCard />
        <TeorethicalCard />
      </View>
    </ScrollView>
  )
}

const {height, width} = Dimensions.get('window');

const styles = StyleSheet.create({
  container:{
    width: width - 30,
    marginTop: 20,
    marginBottom: 50,
    paddingTop: 20,
    alignSelf: 'center',
  }
})