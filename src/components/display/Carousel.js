import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { 
  Text, 
  View, 
  ScrollView,
  StyleSheet,
  Dimensions,
  Image,
  TouchableOpacity
} from 'react-native';

export default Carousel = (props) =>{

  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    setIsLoading(props.Interface.isLoading)
  }, [props])

  const interfaceData = props.Interface.data
  return(
    <>
    <Text style={styles.carouselTitle}>Most Popular</Text>
    <View style={styles.container}>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        {interfaceData.map((data, index) =>{
          return (
            <TouchableOpacity key={index} activeOpacity={.8} style={styles.carouselContent}>
              <View style={styles.carouselImage}>
                <Image 
                  style={{flex: 1, width: null, height: null, resizeMode:'cover'}}
                  source={{uri: `http://192.168.1.6:3000/uploads/${data.image}`}}
                />
              </View>
              <View style={styles.carouselCaption}>
                <Text style={{fontFamily: 'Poppins-Bold', fontSize: 10, alignSelf: 'center', margin: 5, color: '#424242'}}>{data.title}</Text>
                <View style={{flexDirection: 'row', marginTop: -5, alignSelf: 'center'}}>
                  <Text style={{fontFamily: 'Poppins-Regular', fontSize: 7, alignSelf: 'center'}}>Popularity: </Text>
                  <Text style={{fontFamily: 'Poppins-Bold', fontSize: 7, alignSelf: 'center', color: '#424242'}}>4.9</Text>
                </View>
              </View>
            </TouchableOpacity>
          )
        })}
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
  carouselTitle:{
    paddingLeft: 10,
    paddingTop: 20,
    fontSize: 20,
    fontFamily: 'Poppins-Bold', 
    marginBottom: -5
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
    borderRadius: 10,
    overflow: 'hidden'
  },
  carouselImage:{
    flex: 1,
    width: '100%',
    height: '100%'
    // backgroundColor: 'aqua',
  },
  carouselCaption:{
    flex: .3,
    width: '100%'
    // backgroundColor: 'yellow'
  }
});


// const mapStateToProps= state => ({
//   Interface: state.Interface
// })

// export default connect(mapStateToProps)(Carousel)