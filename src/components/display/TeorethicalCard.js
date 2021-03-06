import React, { useState, useEffect } from 'react';
import {
  Text,
  View,
  StyleSheet,
  Dimensions,
  Image,
  TouchableOpacity
} from 'react-native';


export default TeorethicalCard = (props) =>{

  const [algorithm, setAlgorithm] = useState({
    filteredData: [],
    maxDataFetch: 3,
    dataType: 'Teorethical',
  });

  let dataSource = props.Interface.data.filter((data, index)=>{
    return data.type === algorithm.dataType
  })
  const removeDuplicate = dataSource.reduce((acc, current)=>{
    const dupl = acc.find(data => data.genre === current.genre);
    if(!dupl){
      return acc.concat([current])
    } else{
      return acc
    }
  }, []);

  useEffect(()=>{
    if(algorithm.maxDataFetch>removeDuplicate.length){
      setAlgorithm({...algorithm, maxDataFetch: algorithm.filteredData.length})
    } else{
      setAlgorithm({...algorithm, maxDataFetch: 3})
    };

    setAlgorithm({...algorithm, filteredData: removeDuplicate.filter((data, index)=>{
      return data && index < algorithm.maxDataFetch
    })});
  }, [props]);

  return(
    <View>
      <View>
        <Text style={{fontFamily: 'Poppins-Bold', fontSize: 17, marginBottom: -5}}>Let's discover the World.</Text>
        <Text style={{fontFamily: 'Poppins-Regular', fontSize: 12, width: '85%'}}>Read some historical or learn how to improve your joy!</Text>
      </View>
      <View style={styles.cardContainer}>
        {algorithm.filteredData.map((data, index)=>{
          return(
            <TouchableOpacity onPress={()=>props.navigation.push('FilterResult', {data: data})} key={index} activeOpacity={.9} style={styles.card}>
              <View style={styles.cardImageContent}>
              <Image 
                style={{flex: 1, width: null, height: null, resizeMode:'cover'}}
                source={{uri: `http://192.168.1.6:3000/uploads/${data.image}`}}
              />
              </View>
              <View style={styles.cardDetail}>
                <Text style={{alignSelf:'center', fontFamily: 'Poppins-Regular', paddingTop: 10, fontSize: 10}}>{`${data.genre} Category`}</Text>
              </View>
            </TouchableOpacity>
          )
        })}
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
    flexDirection: 'row',
    overflow: 'hidden'
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