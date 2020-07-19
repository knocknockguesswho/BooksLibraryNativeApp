import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, Dimensions, ScrollView } from 'react-native';
import Carousel from '../components/display/Carousel';
import NovelCard from '../components/display/NovelCard';
import TeorethicalCard from '../components/display/TeorethicalCard';
import ComicCard from '../components/display/ComicCard';


export default Dashboard = (props)=>{

  const [isLoading, setIsLoading] = useState(true)

  useEffect(()=>{
    setIsLoading(props.Interface.isLoading)
  }, [props])
  
  return(
    <>
    {isLoading? <Text>Loading...</Text> : 
      <View>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Carousel {...props}/>
          <View style={styles.cardContainer}>
            <NovelCard {...props}/>
            <ComicCard {...props}/>
            <TeorethicalCard {...props}/>
          </View>
        </ScrollView>
      </View>
    }
    </>
  )
}

const {height, width} = Dimensions.get('window');

const styles = StyleSheet.create({
  cardContainer:{
    width: width - 30,
    marginTop: 20,
    marginBottom: 50,
    paddingTop: 20,
    alignSelf: 'center',
  }
})