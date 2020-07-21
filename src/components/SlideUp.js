import React, { useState, useRef, useEffect } from 'react';
import SlidingUpPanel from 'rn-sliding-up-panel';
import LoginForm from '../components/form/Login';
import Profile from '../components/display/Profile';
import { 
  Text,
  View, 
  StyleSheet, 
  Dimensions,
  Animated,
  TouchableOpacity
} from 'react-native';
import { log } from 'react-native-reanimated';


const SlideUp = (props) =>{


  const draggedValue = new Animated.Value(props.bottom);
  const ModalRef = useRef(null);


  console.log(props)
  return(
    <>
      <View style={styles.sheetContainer}>
        <SlidingUpPanel
        ref={ModalRef}
        draggableRange={{top: height-props.top, bottom: props.bottom}}
        animatedValue={draggedValue}
        backdropOpacity={0}
        snappingPoints={[height -10]}
        height={height}
        friction={.4}
        >
          <View style={styles.sheetContent}>
            <View style={styles.sheetHandle}></View>
            {props.Auth.isLogin ? 
              <Profile navigation={props.navigation}/> :
              <LoginForm {...props}/>
            }
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
    height: 4,
    width: 35,
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