import React, { Component } from 'react';
import BackButton from '../../assets/images/arrow-left.svg';
import {AddBooks, GetAllGenre, GetAllAuthor, GetAllBookType} from '../redux/actions/Interface';
import ImagePicker from 'react-native-image-picker';
import SuccessPopUp from '../components/display/SuccessPopUp';
import FailPopUp from '../components/display/FailPopUp';
import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Picker,
  StyleSheet,
  Dimensions,
  ScrollView
} from 'react-native';
import { connect } from 'react-redux';

class AddData extends Component{
  constructor(props){
    super();
    this.state = {
      image: null,
      title: '',
      description: '',
      genre: 0,
      author: 0,
      type: 0,
      actionMsg: '',
      isError: false,
      isSuccess: false
    }
  }

  handleAddData = (event) =>{
    event.preventDefault();
    const token = this.props.Auth.data.token
    const formData = new FormData();
    formData.append('title', this.state.title);
    formData.append('description', this.state.description);
    formData.append('genre', parseInt(this.state.genre));
    formData.append('author', parseInt(this.state.author));
    formData.append('image', this.state.image);
    this.props.AddBooks(token, formData)
    .then((res)=>{
      console.log(res)
      this.handleSuccessPopUp(res.action.type);
    })
    .catch((err)=>{
      this.handleFailPopUp(err);
    });
  }
  

  handleGoBack =() =>{
    this.props.navigation.goBack()
  }

  handleChooseImage = () =>{
    const options = {
      noData: true,
    }
    ImagePicker.showImagePicker(options, response =>{
      if(response.uri){
        this.setState({image: response})
      }
    })
  }

  handleGetGenre = () =>{
    const token = this.props.Auth.data.token
    this.props.GetAllGenre(token);
  }

  handleGetAuthor = () =>{
    const token = this.props.Auth.data.token
    this.props.GetAllAuthor(token);
  }

  handleGetBookType = () =>{
    const token = this.props.Auth.data.token
    this.props.GetAllBookType(token);
  }

  async componentDidMount(){
    await this.handleGetGenre();
    await this.handleGetAuthor();
    await this.handleGetBookType();
  }

  handleSuccessPopUp = (res) =>{
    this.setState({isSuccess: !this.state.isSuccess, actionMsg: res})
    this.props.navigation.push('CRUD')
  }

  handleFailPopUp = (err) =>{
    this.setState({isError: !this.state.isError, actionMsg: err})
  }

  render(){

    return(
      <>
        <TouchableOpacity onPress={this.handleGoBack} style={{margin: 10}}>
          <BackButton width={20} height={20}/>
        </TouchableOpacity>
        <ScrollView>
          <Text style={styles.formTitle}>Add Data</Text>
          <View style={styles.formGroup}>
            <View>
              <Text style={{fontFamily:'Poppins-Regular', fontSize: 12, marginBottom: -8, marginLeft: 5}}>Title</Text>
              <TextInput
                value={this.state.title}
                onChangeText={(value)=>this.setState({title: value})}
                style={styles.formInput}
              />
            </View>
            <View>
              <Text style={{fontFamily:'Poppins-Regular', fontSize: 12, marginBottom: -8, marginLeft: 5}}>Book Type</Text>
              <View style={styles.formInput}>
                <Picker
                    selectedValue={this.state.type}
                    onValueChange={(itemValue, itemIndex) => this.setState({type: itemValue })}
                  >
                    {this.props.Interface.type.map((data, index)=>{
                      return(
                        <Picker.Item key={index} label={data.name} value={data.id} />
                      )
                    })}
                  </Picker>
              </View>
            </View>
            <View>
              <Text style={{fontFamily:'Poppins-Regular', fontSize: 12, marginBottom: -8, marginLeft: 5}}>Genre</Text>
              <View style={styles.formInput}>
                <Picker
                  selectedValue={this.state.genre}
                  onValueChange={(itemValue, itemIndex) => this.setState({genre: itemValue })}
                >
                  {this.props.Interface.genre.map((data, index)=>{
                    return(
                      <Picker.Item key={index} label={data.name} value={data.id} />
                    )
                  })}
                </Picker>
              </View>
            </View>
            <View>
              <Text style={{fontFamily:'Poppins-Regular', fontSize: 12, marginBottom: -8, marginLeft: 5}}>Author</Text>
              <View style={styles.formInput}>
                <Picker
                  selectedValue={this.state.genre}
                  onValueChange={(itemValue, itemIndex) => this.setState({genre: itemValue })}
                >
                  {this.props.Interface.author.map((data, index)=>{
                    return(
                      <Picker.Item key={index} label={data.name} value={data.id} />
                    )
                  })}
                </Picker>
              </View>
            </View>
            <View>
              <Text style={{fontFamily:'Poppins-Regular', fontSize: 12, marginBottom: -8, marginLeft: 5}}>Image</Text>
              <TouchableOpacity onPress={this.handleChooseImage} style={styles.chooseImage}>
                <Text style={{fontFamily: 'Poppins-Regular', fontSize: 10, textAlign: 'center', color: '#424242'}}>Choose Image</Text>
              </TouchableOpacity>
            </View>
            <View>
              <Text style={{fontFamily:'Poppins-Regular', fontSize: 12, marginBottom: -8, marginLeft: 5}}>Description</Text>
              <View style={styles.formInputTextArea}>
                <TextInput
                  value={this.state.description}
                  onChangeText={(value)=>this.setState({description: value})}
                  multiline={true}
                  numberOfLines={6}
                  style={{height: 150, textAlignVertical: 'top'}}
                />
              </View>
            </View>
          </View>
          <TouchableOpacity onPress={this.handleAddData} style={styles.AddButton} activeOpacity={.6}>
            <Text style={{color: 'white', fontFamily: 'Poppins-Regular'}}>Add Data</Text>
          </TouchableOpacity>
          <SuccessPopUp popup={this.handleSuccessPopUp} isSuccess={this.state.isSuccess} msg={this.state.actionMsg} />
          <FailPopUp popup={this.handleFailPopUp} isError={this.state.isError} msg={this.state.actionMsg} navigation={this.props.navigation} />
        </ScrollView>
      </>
    )
  }
}

const {height, width} = Dimensions.get('window');

const styles = StyleSheet.create({
  formTitle: {
    fontFamily: 'Poppins-SemiBold',
    alignSelf: "center",
    marginTop: 20,
    marginBottom: 40,
    fontSize: 15,
    color: '#424242'
  },
  formGroup:{
    flex: 1,
    width: '90%',
    alignSelf: 'center'
  },
  formInput:{
    backgroundColor: 'white',
    textAlign: 'left',
    borderRadius: 10,
    marginTop: 8,
    marginBottom: 8,
    borderWidth: .1,
    borderColor: '#707070',
    paddingLeft: 10,
    paddingRight: 10
  },
  formInputTextArea:{
    backgroundColor: 'white',
    textAlign: 'left',
    borderRadius: 10,
    marginTop: 8,
    marginBottom: 8,
    borderWidth: .1,
    borderColor: '#707070',
    paddingLeft: 10,
    paddingRight: 10,
    justifyContent: 'flex-start',
  },
  chooseImage:{
    backgroundColor: 'white', 
    width: 100, 
    height: 30, 
    marginTop: 10, 
    marginBottom: 10, 
    elevation: 1,
    justifyContent: 'center',
    borderRadius: 10
  },
  AddButton:{
    marginTop: 50,
    alignItems:'center',
    justifyContent:'center',
    backgroundColor: '#188FDE',
    width: '80%',
    height: 35,
    alignSelf: 'center',
    borderRadius: 10,
    shadowColor: 'rgba(0,0,0, .3)',
    shadowOffset: {height: 0, width: 2},
    elevation: 2,
    shadowRadius: 5
  },
})


const mapStateToProps = state =>({
  Interface: state.Interface,
  Auth: state.Auth
});

const mapDispatchToProps = {AddBooks, GetAllGenre, GetAllAuthor, GetAllBookType};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddData);