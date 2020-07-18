import React, { useState } from 'react';
import CheckBox from '@react-native-community/checkbox';
import {
  Text, 
  View, 
  TextInput,
  StyleSheet,
  TouchableOpacity
} from 'react-native';
// import { CheckBox } from 'native-base';
// import {Container, Header, Content, Input, Item} from 'native-base';
import { Input } from 'react-native-elements';

const Login = (props) =>{

  const [input, setInput] = useState({
    username: '',
    password: ''
  })

  const [checked, setChecked] = useState(false);
  return(
    <>
      <View style={styles.formGroup}>
        <Text style={{fontWeight: '700', fontSize: 20, alignSelf:'center', marginBottom: 10, color: '#424242'}}>Login</Text>
        {/* <View>
        </View> */}

        <TextInput textContentType='username' blurOnSubmit={true} style={styles.formInput} placeholder='Username' value={input.username} placeholderTextColor='#ebebeb' onChangeText={(value)=>setInput({...input, username: value})} />
        <TextInput blurOnSubmit={true} secureTextEntry={true} style={styles.formInput} placeholder='Password' value={input.password} placeholderTextColor='#ebebeb' onChangeText={(value)=>setInput({...input, password: value})} />

        <View style={styles.rememberForgotContainer}>
        <View style={styles.checkBoxContainer}>
          <CheckBox 
            value={checked}
            onValueChange={setChecked}
          />
          <Text style={
            {
              fontSize: 12,
              color: '#424242',
              fontFamily: 'Poppins-Regular',
              alignSelf: 'center'
            }
            }>Remember me</Text>
        </View>
          <TouchableOpacity>
            <Text style={
              {
                fontSize: 12,
                color: '#188FDE',
                marginTop: 10,
                marginBottom: 10,
                fontFamily: 'Poppins-Regular'
              }
              }>Forgot Password?</Text>
          </TouchableOpacity>  
        </View>
        <TouchableOpacity style={styles.loginButton} activeOpacity={.6}>
          <Text style={{color: 'white', fontFamily: 'Poppins-Regular'}}>Login</Text>
        </TouchableOpacity>
        <View style={styles.signUpOffer}>
          <Text style={styles.signUpText}>Don't have an account?</Text>
          <TouchableOpacity onPress={()=>props.navigation.navigate('Signup')}>
            <Text style={styles.signUpButton}> Signup</Text>
          </TouchableOpacity>
        </View>
      </View>
    </>
  )
}

const styles = StyleSheet.create({
  formGroup:{
    flex: 1,
    paddingLeft: 15,
    paddingRight: 15,
    paddingTop: 30
  },
  formInput:{
    backgroundColor: 'white',
    justifyContent: 'space-between',
    textAlign: 'center',
    borderRadius: 10,
    marginTop: 8,
    marginBottom: 8,
  },
  checkBoxContainer:{
    flexDirection: 'row',
    marginTop: 5,
    marginBottom: 15
  },
  rememberForgotContainer:{
    width: '114%', 
    flexDirection:'row', 
    alignSelf:'center',
    justifyContent: 'space-around'
  },
  rememberForgot:{
    fontSize: 12,
    color: '#424242',
    marginTop: 10,
    marginBottom: 10,
  },
  loginButton:{
    marginTop: 10,
    alignItems:'center',
    justifyContent:'center',
    backgroundColor: '#188FDE',
    width: '80%',
    height: 35,
    alignSelf: 'center',
    borderRadius: 6,
    shadowColor: 'rgba(0,0,0, .3)',
    shadowOffset: {height: 2, width: 3},
    elevation: 2
  },
  signUpOffer:{
    flexGrow: 1,
    alignSelf:'center',
    flexDirection: 'row',
    paddingTop: '30%'
  },
  signUpText:{
    fontSize: 10,
    color: '#424242'
  },
  signUpButton:{
    fontSize: 10,
    color: '#188FDE'
  }
})

export default Login;