import React, { Component } from 'react';
import SlideUp from '../components/SlideUp';
import MainNavigation from '../components/MainNavigation';
import Dashboard from '../tab/Dashboard';
import Search from '../tab/Search'
import { connect } from 'react-redux';
import { GetBooks } from '../redux/actions/Interface'

import {
  Text,
  View, 
  StyleSheet, 
  Dimensions,
} from 'react-native';

import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';


const Tab = createMaterialTopTabNavigator();

class Home extends Component{
  constructor(){
    super();
    this.state = {
      isLoggedin: false,
      onScreen: false
    }
  }

  _getBooks = () =>{
    this.props.GetBooks()
  }



  async componentDidMount(){
    await this._getBooks();
    console.log(this.props.Auth)
  }

  render(){
    return(
      <>
      <View style={styles.container}>
        <View style={styles.header}>
          <MainNavigation onHome={this.state.onScreen} navigation={this.props.navigation}/>
        </View>
        <View style={styles.main}>
          {this.props.Interface.isLoading ? <Text>Loading...</Text> : 
            <Dashboard {...this.props}/>
          }
        </View>
        <View style={styles.footer}>
          <SlideUp {...this.props}/>
        </View>
      </View>
      </>
    )
  }
}

const {height, width} = Dimensions.get("window");

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    fontFamily: 'Poppins-Regular'
  },
  header:{
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10
  },
  main:{
    flex: 1,
    height: height,
    width: width,
    justifyContent: 'center',
    alignItems: 'center',
  },
  footer:{
    width: width,
    alignItems: 'center'
  }
})

const mapStateToProps = state =>({
  Interface: state.Interface,
  Auth: state.Auth
})

const mapDispatchToProps = { GetBooks };

export default connect(
  mapStateToProps, 
  mapDispatchToProps
  )(Home);