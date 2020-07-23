import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Register } from '../../redux/actions/Auth/';
import SuccessPopUp from '../../components/display/SuccessPopUp';
import FailPopUp from '../../components/display/FailPopUp';
import { 
  Text, 
  View, 
  TextInput, 
  TouchableOpacity, 
  StyleSheet, 
  Dimensions,
  ScrollView 
} from 'react-native';

const Signup = (props) =>{


  const [input, setInput] = useState({
    username: '',
    fullName: '',
    email: '',
    password: '',
    actionMsg: '',
    isError: '',
    isSuccess: '',
  })

  const signUpAuth = (event) =>{
    event.preventDefault();
    const data = {
      fullName: input.fullName,
      username: input.username,
      password: input.password,
      email: input.email,
    }
    props.Register(data)
    .then((res)=>{
      setInput({
        ...input,
        actionMsg: `Thankyou ${input.username} for registering on our services.`,
        isSuccess: true
      })
    })
    .catch((err)=>{
      setInput({
        ...input,
        actionMsg: `Something Bad Happened`,
        isError: true
      })
    })
  } 
  
  const handleSuccessPopUp = (res) =>{
    setInput({
      ...input,
      isSuccess: !input.isSuccess, 
      actionMsg: res
    })
    props.navigation.push('Home');
  }
  
  const handleFailPopUp = (err) =>{
    setInput({
      ...input,
      isError: !input.isError, 
      actionMsg: err
    })
    props.navigation.push('Signup');
  }

  console.log(props)

  return(
    <ScrollView showsVerticalScrollIndicator={false}>
      <Text style={styles.formTitle}>Sign Up</Text>
      <View style={styles.formGroup}>
        <View>
          <Text style={{fontFamily:'Poppins-Regular', fontSize: 12, marginBottom: -8, marginLeft: 5}}>Full Name</Text>
          <TextInput
            placeholderTextColor='#ebebeb'
            style={styles.formInput}
            placeholder='Full Name'
            value={input.fullName}
            onChangeText={(value)=>setInput({...input, fullName: value})}
          />
        </View>
        <View>
          <Text style={{fontFamily:'Poppins-Regular', fontSize: 12, marginBottom: -8, marginLeft: 5}}>Email</Text>
          <TextInput
            placeholderTextColor='#ebebeb'
            style={styles.formInput}
            placeholder='Email'
            value={input.email}
            onChangeText={(value)=>setInput({...input, email: value})}
          />
        </View>
        <View>
          <Text style={{fontFamily:'Poppins-Regular', fontSize: 12, marginBottom: -8, marginLeft: 5}}>Username</Text>
          <TextInput
            placeholderTextColor='#ebebeb'
            style={styles.formInput}
            placeholder='Username'
            value={input.username}
            onChangeText={(value)=>setInput({...input, username: value})}
          />
        </View>
        <View>
          <Text style={{fontFamily:'Poppins-Regular', fontSize: 12, marginBottom: -8, marginLeft: 5}}>Password</Text>
          <TextInput
            secureTextEntry={true}
            placeholderTextColor='#ebebeb'
            style={styles.formInput}
            placeholder='Password'
            value={input.password}
            onChangeText={(value)=>setInput({...input, password: value})}
          />
        </View>
      </View>
      <TouchableOpacity onPress={signUpAuth} style={styles.signUpButton} activeOpacity={.6}>
        <Text style={{color: 'white', fontFamily: 'Poppins-Regular'}}>Sign Up</Text>
      </TouchableOpacity>
      <View style={styles.termsConditions}>
        <Text style={{fontSize: 8, fontFamily: 'Poppins-Regular'}}>By Signing up, you agree to Book's Library </Text>
        <TouchableOpacity>
          <Text style={{fontSize: 8, color: '#188FDE', fontFamily: 'Poppins-Regular'}}>Terms and Conditions </Text>
        </TouchableOpacity>
        <Text style={{fontSize: 8, fontFamily: 'Poppins-Regular'}}>& </Text>
        <TouchableOpacity>
          <Text style={{fontSize: 8, color: '#188FDE', fontFamily: 'Poppins-Regular'}}>Privacy Policy </Text>
        </TouchableOpacity>
      </View>
      <SuccessPopUp popup={handleSuccessPopUp} isSuccess={input.isSuccess} msg={input.actionMsg} />
      <FailPopUp popup={handleFailPopUp} isError={input.isError} msg={input.actionMsg} navigation={props.navigation} />
    </ScrollView>
  )
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
    justifyContent: 'space-between',
    textAlign: 'center',
    borderRadius: 10,
    marginTop: 8,
    marginBottom: 8,
    borderWidth: .5,
    borderColor: '#707070'
  },
  signUpButton:{
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
  termsConditions:{
    flexDirection: 'row',
    width: '90%',
    alignSelf: "center",
    marginTop: 50,
    justifyContent: "center"
  }
});

const mapStateToProps = state =>({
  Auth: state.Auth
});

const mapDispatchToProps = { Register }

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Signup)