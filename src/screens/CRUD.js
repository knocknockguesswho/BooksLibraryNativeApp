import React, { Component } from 'react';
import BackButton from '../../assets/images/arrow-left.svg';
import AddButton from '../../assets/images/plus-circle.svg';
import GoldStar from '../../assets/images/gold-star.svg';
import EditButton from '../../assets/images/edit.svg';
import DeleteButton from '../../assets/images/trash-alt.svg';
import {connect} from 'react-redux';
import {
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
  Image,
  Modal,
  Dimensions
} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

class CRUD extends Component{
  constructor(){
    super();
    this.state = {
      modalVisible: false,
      itemWillDeleted: ''
    }
  }

  handleGoBack =() =>{
    this.props.navigation.goBack()
  }

  handleModal = (item) =>{
    this.setState({
      modalVisible: !this.state.modalVisible,
      itemWillDeleted: item
    })
  }

  
  render(){
    // console.log(this.props)
    const { modalVisible } = this.state;
    return(
      <>
        <View style={{flex: 1,backgroundColor: 'white'}}>
          <View>
            <TouchableOpacity onPress={this.handleGoBack} style={{margin: 10}}>
                <BackButton width={20} height={20}/>
            </TouchableOpacity>
            <Text style={{fontFamily: 'Poppins-Bold', fontSize: 20, alignSelf: 'center', marginBottom: -10}}>Welcome</Text>
            <Text style={{fontFamily: 'Poppins-Bold', fontSize: 18, alignSelf: 'center'}}>{this.props.Auth.data.username}</Text>
          </View>
          <View style={{flex: 1, padding: 20, alignItems: 'center'}}>
            <View style={styles.addButton}>
              <Text style={{fontFamily: 'Poppins-Italic', fontSize: 8, textAlign: 'center'}}>You can for example add more data just by clicking this green button.</Text>
              <TouchableOpacity onPress={()=>this.props.navigation.push('AddData')} activeOpacity={.5} style={{alignItems: 'center', marginTop: 10}}>
                <AddButton width={30} height={30} />
              </TouchableOpacity>
            </View>
            <ScrollView showsVerticalScrollIndicator={false} style={styles.showAllData}>
              {this.props.Interface.data.map((book, index)=>{
                return(
                  <View key={index} style={styles.dataContainer}>
                    <View style={styles.bookDetail}>
                      <View style={{height: '100%', width: '40%', flexDirection: 'row'}}>
                        <View style={styles.imageAndTitle}>
                          <View style={styles.image}>
                            <Image 
                              style={{flex: 1, width: null, height: null, resizeMode:'cover'}}
                              source={{uri: `http://192.168.1.6:3000/uploads/${book.image}`}}
                            />
                          </View>
                          <View style={{alignItems: 'center'}}>
                            <Text style={{fontFamily: 'Poppins-SemiBold', fontSize: 6, textAlign: "center", marginBottom: -3}}>{book.title}</Text>
                            <Text style={{fontFamily: 'Poppins-Regular', fontSize: 6, textAlign: 'center'}}>{book.author}</Text>
                          </View>
                        </View>
                        <View style={{width: '40%', alignItems: 'center'}}>
                          <View style={{width:'95%', height: '15%', marginBottom: 5, backgroundColor: '#FFDE39', borderRadius: 5, justifyContent: 'center'}}>
                            <Text style={{fontFamily: 'Poppins-Regular', fontSize: 8, color: 'white', textAlign: 'center'}}>{book.type}</Text>
                          </View>
                          <View style={{width:'95%', height: '15%', backgroundColor: '#0075DC', marginBottom: 5, borderRadius: 5, justifyContent: 'center'}}>
                            <Text style={{fontFamily: 'Poppins-Regular', fontSize: 7, color: 'white', textAlign: 'center'}}>{book.genre}</Text>
                          </View>
                          <View style={{flexDirection: 'row', alignItems: 'center'}}>
                            <GoldStar width={10} height={10} />
                            <Text style={{fontFamily: 'Poppins-Regular', fontSize: 8}}>5.0</Text>
                          </View>
                        </View>
                      </View>
                      <View style={{height: '100%', width: '60%'}}>
                        <Text style={{fontFamily: 'Poppins-Regular', fontSize: 8, padding: 10, paddingTop: -10, height: '90%'}}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer interdum, urna eget blandit aliquam, est ex sodales nunc, at tristique lorem metus eget felis. Nunc varius fringilla elit sed placerat. Sed nec pellentesque mi. Donec fringilla diam eu ultrices gravida.
                        </Text>
                      </View>
                    </View>
                    <View style={styles.editAndDelete}>
                      <TouchableOpacity onPress={()=>this.props.navigation.push('EditData', {book: book})}>
                        <EditButton width={20} height={20} />
                      </TouchableOpacity>
                      <TouchableOpacity onPress={()=>this.handleModal(book.title)}>
                        <DeleteButton width={20} height={20} />
                      </TouchableOpacity>
                    </View>
                  </View>
                )
              })}
              <Modal
                animationType='fade'
                transparent={true}
                visible={this.state.modalVisible}
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
                    <TouchableOpacity activeOpacity={.6} style={styles.cancelButton} onPress={()=>this.handleModal('')}>
                      <Text style={{fontFamily: 'Poppins-Regular', fontSize: 15, color: 'white', textAlign: "center", justifyContent: 'center'}}>Cancel</Text>
                    </TouchableOpacity>
                    <TouchableOpacity activeOpacity={.6} style={styles.deleteButton}>
                      <Text style={{fontFamily: 'Poppins-Regular', fontSize: 15, color: 'white', textAlign: 'center', justifyContent: 'center'}}>Delete</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </Modal>  
            </ScrollView>
            <Text style={{fontFamily: 'Poppins-Regular', fontSize: 8, marginTop: -10}}>Total Data: {this.props.Interface.data.length}</Text>   
          </View>
        </View>
      </>
    )
  }
}

const {height, width} = Dimensions.get('window');

const styles = StyleSheet.create({
  addButton:{
    width: '60%',
    height: '12%',
    backgroundColor: '#F3F3F3',
    padding: 5,
    paddingLeft: 10,
    paddingRight: 10,
    borderRadius: 5,
    paddingBottom: 25
  },
  showAllData:{
    borderWidth: .2,
    borderColor: '#424242',
    width: '95%',
    height: '100%',
    // borderTopLeftRadius: 10,
    // borderTopRightRadius: 10,
    marginBottom: 20,
    paddingTop: 10
  },
  dataContainer:{
    borderBottomColor: '#424242',
    borderBottomWidth: .5,
    width: '100%',
    height: 120,
    padding: 5,
    flexDirection: 'row'
  },
  bookDetail:{
    // backgroundColor: 'yellow',
    height: '100%',
    width: '85%',
    flexDirection: 'row'
  },
  imageAndTitle:{
    width: '60%',
    height: '100%',
    alignItems: 'center'
  },
  image:{
    width: '80%',
    height: '75%',
    backgroundColor: 'blue'
  },
  editAndDelete:{
    height: '90%',
    width: '17%',
    backgroundColor: '#F0F0F0',
    borderTopLeftRadius: 20,
    borderBottomLeftRadius: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly'
  },
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

const mapStateToProps = state =>({
  Auth: state.Auth,
  Interface: state.Interface
});

export default connect(mapStateToProps)(CRUD)
