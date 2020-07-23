import React, { useState } from 'react'
import {
  View,
  Text,
  Modal,
  StyleSheet,
  TouchableOpacity,
  Dimensions
} from 'react-native';

export default FailPopUp = (props) =>{


  const [modalVisible, setModalVisible] = useState(props.isError)


  const handleModal = () =>{
    props.popup()
  }

  return(
    <>
    <Modal
      animationType='fade'
      transparent={true}
      visible={props.isError}
      onRequestClose={() => {
        Alert.alert("Modal has been closed.");
      }}
    >
      <View style={styles.modalContainer}>
        <View>
          <Text style={{fontFamily: 'Poppins-Bold', color: '#424242', fontSize: 20, textAlign:'center'}}>{props.msg}</Text>
          <Text style={{color: 'red', fontFamily: 'Poppins-Bold', fontSize: 30, textAlign:'center'}}>X</Text>
          {/* <Text style={{textAlign: 'center'}}>Title: {this.state.itemWillDeleted} </Text> */}
        </View>
        <View style={{flexDirection: 'row', width: '100%', justifyContent: 'space-evenly'}}>
          <TouchableOpacity activeOpacity={.6} style={styles.cancelButton} onPress={handleModal}>
            <Text style={{fontFamily: 'Poppins-Regular', fontSize: 15, color: 'white', textAlign: "center", justifyContent: 'center'}}>Okay</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
    </>
  )
}

const {height, width} = Dimensions.get('window');

const styles = StyleSheet.create({
  modalContainer:{
    height: 250, 
    width: 350,
    backgroundColor: '#F0F0F0',
    alignSelf: 'center',
    alignItems: 'center',
    marginTop: height/3,
    borderRadius: 10,
    padding: 10,
    paddingTop: 20,
    elevation: 2,
    justifyContent: 'space-around'
  },
  cancelButton:{
    width: '30%',
    height: 25,
    backgroundColor: '#188FDE',
    borderRadius: 5
  },
  deleteButton:{
    width: '30%',
    height: 25,
    backgroundColor: 'red',
    borderRadius: 5
  }
})