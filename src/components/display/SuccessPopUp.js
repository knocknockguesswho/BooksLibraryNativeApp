import React, { useState } from 'react'
import {
  View,
  Text,
  Modal,
  StyleSheet,
  TouchableOpacity,
  Dimensions
} from 'react-native';

export default SuccessPopUp = (props) =>{


  const [modalVisible, setModalVisible] = useState(false)

  const handleModal = () =>{
    setModalVisible(!modalVisible)
  }

  return(
    <>
    <Modal
      animationType='fade'
      transparent={true}
      visible={modalVisible}
      onRequestClose={() => {
        Alert.alert("Modal has been closed.");
      }}
    >
      <View style={styles.modalContainer}>
        <View>
          <Text style={{fontFamily: 'Poppins-Bold', color: '#424242', fontSize: 20, textAlign:'center'}}>Are you sure want to delete this item?</Text>
          <Text style={{textAlign: 'center'}}>Title: {this.state.itemWillDeleted} </Text>
        </View>
        <View style={{flexDirection: 'row', width: '100%', justifyContent: 'space-evenly'}}>
          <TouchableOpacity activeOpacity={.6} style={styles.cancelButton} onPress={handleModal}>
            <Text style={{fontFamily: 'Poppins-Regular', fontSize: 15, color: 'white', textAlign: "center", justifyContent: 'center'}}>Cancel</Text>
          </TouchableOpacity>
          <TouchableOpacity activeOpacity={.6} style={styles.deleteButton}>
            <Text style={{fontFamily: 'Poppins-Regular', fontSize: 15, color: 'white', textAlign: 'center', justifyContent: 'center'}}>Delete</Text>
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