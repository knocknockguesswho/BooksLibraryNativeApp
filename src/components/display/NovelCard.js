import React, { useState } from 'react';
import {
  Text,
  View,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  Image
} from 'react-native'


export default NovelCard = (props) =>{

  const dataSource = props.Interface.data.filter(data=>{
    return data.type === 'Novel'
  })


/* NEXT UPDATE: GET ALL EXISTED GENRE, MAP TO NOVEL CATEGORY, DISPLAY ONLY ONE BOOK. SYSTEMWILLDECIDE! */
  //saring data dengan type buku sesuai dengan yg ingin ditampilkan
  let romanceCategory = dataSource.filter(category=>{
    return category.genre === 'Romance'
  });
  let politicCategory = dataSource.filter(category=>{
    return category.genre === 'Politic'
  });
  let comedyCategory = dataSource.filter(category=>{
    return category.genre === 'Comedy'
  });

  return(
    <View style={styles.container}>
      <View>
        <Text style={{fontFamily: 'Poppins-Bold', fontSize: 17, marginBottom: -5}}>Have a bad time?</Text>
        <Text style={{fontFamily: 'Poppins-Regular', fontSize: 12, width: '85%'}}>These are Novels to brings your mood back!</Text>
      </View>
      <View style={styles.cardContainer}>
          <TouchableOpacity activeOpacity={.9} style={styles.card} onPress={()=>console.log(props)}>
            <View style={styles.cardImageContent}>
            <Image 
              style={{flex: 1, width: null, height: null, resizeMode:'cover'}}
              source={{uri: `http://192.168.1.6:3000/uploads/${romanceCategory[romanceCategory.length-1].image}`}}
            />
            </View>
            <View style={styles.cardDetail}>
              <Text style={{alignSelf:'center', fontFamily: 'Poppins-Regular', paddingTop: 10, fontSize: 10}}>Romance Category</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity activeOpacity={.9} style={styles.card}>
            <View style={styles.cardImageContent}>
            <Image 
              style={{flex: 1, width: null, height: null, resizeMode:'cover'}}
              source={{uri: `http://192.168.1.6:3000/uploads/${politicCategory[politicCategory.length-1].image}`}}
            />
            </View>
            <View style={styles.cardDetail}>
              <Text style={{alignSelf:'center', fontFamily: 'Poppins-Regular', paddingTop: 10, fontSize: 10}}>Politic Category</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity activeOpacity={.9} style={styles.card}>
            <View style={styles.cardImageContent}>
            <Image 
              style={{flex: 1, width: null, height: null, resizeMode:'cover'}}
              source={{uri: `http://192.168.1.6:3000/uploads/${comedyCategory[comedyCategory.length-1].image}`}}
            />
            </View>
            <View style={styles.cardDetail}>
              <Text style={{alignSelf:'center', fontFamily: 'Poppins-Regular', paddingTop: 10, fontSize: 10}}>Comedy Category</Text>
            </View>
          </TouchableOpacity>
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
    borderRadius: 2,
    flexDirection: 'row'
  },
  cardContainer:{
    width: '100%',
    alignSelf: 'center',
    justifyContent:'space-between',
    flexDirection:'column',
    paddingTop: 10
  },
  cardImageContent:{
    height: '100%',
    width: '30%',
    backgroundColor: '#f0f0f0',
  },
  cardDetail:{
    height: '100%',
    width: '70%',
  }
});