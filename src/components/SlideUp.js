import React, { useState, useRef, useEffect } from 'react';
import SlidingUpPanel from 'rn-sliding-up-panel';
import Login from '../components/form/Login';
import {
  Text, 
  View, 
  StyleSheet, 
  Button, 
  Dimensions,
  Animated,
  TextInput,
  FlatList
} from 'react-native';


const SlideUp = (props) =>{


  const draggedValue = new Animated.Value(50);
  const ModalRef = useRef(null);

  return(
    <>
      <View style={styles.sheetContainer}>
        <SlidingUpPanel
        ref={ModalRef}
        draggableRange={{top: height-350, bottom: 50}}
        animatedValue={draggedValue}
        backdropOpacity={0}
        snappingPoints={[50]}
        height={height - 10}
        friction={.4}
        >
          <View style={styles.sheetContent}>
            <View style={styles.sheetHandle}></View>
            {/* {this.props.isLoggedin ? } */}
            <Login {...props}/>
          </View>

        </SlidingUpPanel>
      </View>
    </>
  )
}

const {width, height} = Dimensions.get('window')

const styles = StyleSheet.create({
  sheetContainer:{
    flex: 1,
    width: '97%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  sheetContent:{
    flex: 1,
    backgroundColor: '#ebebeb',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    padding: 10
  },
  sheetHandle:{
    height: 3,
    width: 50,
    backgroundColor: '#bbb',
    borderRadius: 6,
    alignSelf: 'center',
    marginTop: 6
  },
  formInput:{
    alignSelf: 'center',
    // backgroundColor: 'yellow'
  }
})

export default SlideUp;