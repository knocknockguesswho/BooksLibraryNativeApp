import React, { useState, useRef } from 'react';
import SlidingUpPanel from 'rn-sliding-up-panel';
import GoldStar from '../../assets/images/gold-star.svg';
import BackButton from '../../assets/images/arrow-left-white.svg';
import * as Animatable from 'react-native-animatable';
import {connect} from 'react-redux';
import {
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  TextInput,
  Image,
  ScrollView,
  Animated
} from 'react-native';

const BookDetail = (props) =>{

  const test = () =>{
    console.log(props)
  }


  const [data, setData] = useState({
    image: props.route.params.data.image,
    genre: props.route.params.data.genre
  })


  const goBackLocal = () =>{
    props.navigation.navigate(props.route.params.routeName)
  }

  const [displaySheet, setDisplaySheet] = useState({
    bottom: 220
  });
  const draggedValue = new Animated.Value(220);
  const modalRef = useRef(null);

  // const handleDisplaySheet = () =>{
  //   setDisplaySheet({...displaySheet, bottom: 260})
  // }
  return(
  <>
    <View style={styles.banner}>
      <TouchableOpacity activeOpacity={.8} onPress={goBackLocal} style={{width: 50,
      height: 50, zIndex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <View style={{backgroundColor: '#424242', height: 30, width: 30, alignItems: 'center', justifyContent: 'center', borderRadius: 100}}>
          <BackButton width={20} height={20} />
        </View>
      </TouchableOpacity>
      <View style={styles.bannerImage}>
        <Image 
          style={{flex: 1, width: null, height: null, resizeMode: 'cover'}}
          source={{uri: `http://192.168.1.6:3000/uploads/${data.image}`}}
        />
      </View>
    </View>

    <View style={styles.detailsContainer}>
      <View style={{flex: 1, width: '80%', alignSelf: 'center'}}>
        <View style={{flex: .5, flexDirection: 'row'}}>
          <View style={{flex: 4}}>
            <Text style={styles.title}>{props.route.params.data.title}</Text>
            <Text style={styles.author}>Author: {props.route.params.data.author}</Text>
            <View style={styles.genre_and_type}>
              <View style={styles.genre}>
                <Text style={{fontFamily: 'Poppins-SemiBold', fontSize: 8, color: 'white',textAlign: 'center'}}>{props.route.params.data.type}</Text>
              </View>
              <View style={styles.bookType}>
                <Text style={{fontFamily: 'Poppins-SemiBold', fontSize: 8, color: 'white', textAlign: 'center'}}>{props.route.params.data.genre}</Text>
              </View>
            </View>
          </View>
          <View style={styles.rating}>
            <Text style={{fontFamily: 'Poppins-Regular', fontSize: 10, color: '#87E12D'}}>{props.route.params.data.status}</Text>
            <View style={{flexDirection: 'row'}}>
              <GoldStar width={10} height={10} />
              <Text style={{fontFamily: 'Poppins-Regular', fontSize: 7}}>5.0</Text>
            </View>
          </View>
        </View>
        <View style={{flex: 2, marginTop: 10}}>
          <View style={styles.description}>
            <Text style={{fontFamily: 'Poppins-Regular', fontSize: 11}}>{props.route.params.data.description}</Text>
          </View>
          <View style={{flex: 1}}>
            <TouchableOpacity activeOpacity={.6} style={styles.borrowButton}>
              <Text style={{fontFamily: 'Poppins-Bold', fontSize: 12, textAlign: 'center', color: 'white'}}>Borrow</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>

    <View style={styles.slidingUpOthersBookByGenre}>
        <SlidingUpPanel
          ref={modalRef}
          draggableRange={{top: height - 80, bottom: 220}}
          animatedValue={draggedValue}
          backdropOpacity={0}
          snappingPoints={[height - 10]}
          height={height}
          friction={.4}
        >
          <ScrollView style={styles.sheetContent}>
            <View style={styles.sheetHandle}></View>
            <Text style={{fontFamily: 'Poppins-SemiBold', fontSize: 12, alignSelf: 'flex-start'}}>See Other Genre:</Text>
            <ScrollView horizontal={true}>
              <TouchableOpacity style={styles.sheetCard}>
                <View style={{flex: 1.5}}>
                  <Image 
                    style={{flex: 1, width: null, height: null, resizeMode: 'cover'}}
                    source={{uri: `http://192.168.1.6:3000/uploads/${data.image}`}}
                  />
                </View>
                <View style={{flex: 3}}>
                  <Text style={{alignSelf:'center', fontFamily: 'Poppins-Regular', paddingTop: 10, fontSize: 10}}>{`${data.genre} Category`}</Text>
                </View>
              </TouchableOpacity>
            </ScrollView>
          </ScrollView>
        </SlidingUpPanel>
      </View>


  </>
  )
}

const {height, width} = Dimensions.get('window');

const styles = StyleSheet.create({
  banner:{
    flex: 1
  },
  bannerImage:{
    height: '100%',
    width: '100%',
    marginTop: -50
  },
  detailsContainer:{
    flex: 1.5,
    paddingTop: 10
  },
  title:{
    fontFamily: 'Poppins-SemiBold',
    fontSize: 18,
    marginBottom: -7
  },
  author:{
    fontFamily: 'Poppins-Italic',
    fontSize: 7
  },
  rating:{
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around',
    paddingBottom: 10
  },
  genre_and_type:{
    flex: 1,
    width: '70%',
    flexDirection: 'row'
  },
  genre:{
    backgroundColor: '#FFDE39',
    width: 60,
    height: 15,
    marginRight: 5,
    borderRadius: 5
  },
  bookType:{
    backgroundColor: '#0075DC',
    width: 60,
    height: 15,
    borderRadius: 5
  },
  description:{
    flex: 2.5
  },
  borrowButton:{
    width: '80%',
    height: 30,
    backgroundColor: '#FFDE39',
    alignSelf: 'center',
    borderRadius: 8,
    justifyContent: 'center'
  },
  slidingUpOthersBookByGenre:{
    flex: 1,
    width: '100%',
    alignSelf: 'center'
  },
  sheetContent:{
    flex: 1,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    paddingTop: 10,
    paddingLeft: 30,
    paddingRight: 30,
    elevation: 2,
    backgroundColor: 'white'
  },
  sheetHandle:{
    height: 4,
    width: 35,
    backgroundColor: '#bbb',
    borderRadius: 10,
    alignSelf: 'center',
    marginTop: 6,
    marginBottom: 10
  },
  sheetCard:{
    width: 360,
    height: 150,
    flexDirection: 'row',
    marginRight: 25,
    borderRadius: 5,
    overflow: 'hidden',
    borderWidth: .3,
    borderColor: '#424242'
  }
})

const mapStateToProps = state =>({
  Interface: state.Interface
});

export default connect(mapStateToProps)(BookDetail);