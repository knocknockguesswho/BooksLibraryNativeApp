import React, { Component } from 'react';
import SignupForm from '../components/form/Signup';
import HomeLogo from '../../assets/images/home.svg';
import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  Dimensions
} from 'react-native';

class Signup extends Component{
  constructor(){
    super();
  }

  componentDidMount(){}

  render(){
    return(
      <>
        <View style={styles.main}>
        <TouchableOpacity style={{marginTop: 5, marginLeft: 5}} onPress={()=>this.props.navigation.navigate('Home')}>
          <HomeLogo width={30} height={30} />
        </TouchableOpacity>
          <SignupForm navigation={this.props.navigation}/>
        </View>
      </>
    )
  }
}

const {height, width} = Dimensions.get('window');

const styles = StyleSheet.create({
  main:{
    flex: 1,
    width: width,
    padding: 10,
    backgroundColor: 'white'
  }
})

export default Signup;