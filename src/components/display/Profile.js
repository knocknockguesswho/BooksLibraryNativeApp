import React, { useState, useEffect } from 'react';

import UserAlt_LOGO from '../../../assets/images/user-alt.svg';
import BlankStar from '../../../assets/images/blank-star.svg';
import ChartLine from '../../../assets/images/chart-line.svg';
import Clock from '../../../assets/images/clock.svg';
import GoldStar from '../../../assets/images/gold-star.svg';
import Heart from '../../../assets/images/heart.svg';
import Inbox from '../../../assets/images/inbox.svg';
import Tools from '../../../assets/images/tools.svg';

import {connect} from 'react-redux';
import {Logout} from '../../redux/actions/Auth';
import {
    Text,
    View,
    TouchableOpacity,
    Image,
    StyleSheet,
    Dimensions
} from 'react-native';

const Profile = (props)=>{

  const [rating, setRating] = useState({
    userRating: 5,
    ratingStar: []
  });

  const handleLogout = () =>{
    props.Logout();
    props.navigation.push('Home');
  }

  // for(let i = 0; i < rating.userRating; i++){
  //   rating.ratingStar.push(
  //     <GoldStar key={i} width={20} height={20}/>
  //   )
  // }
  
  return(
    <>
      <View style={styles.container}>
        <View style={styles.avatarContainer}>
          {/* {avatarExixst? 
          <View style={styles.avatar}>
            <UserAlt_LOGO width={40} height={40} />
          </View> :
          } */}
          <View style={styles.avatar}>
            <UserAlt_LOGO width={40} height={40} />
          </View>
          <View style={{height: '20%', paddingTop: 5}}>
            <Text style={styles.username}>{props.Auth.data.fullname}</Text>
          </View>
        </View>
        <View style={styles.rating}>
          <GoldStar width={20} height={20} />
          <GoldStar width={20} height={20} />
          <GoldStar width={20} height={20} />
          <GoldStar width={20} height={20} />
          <GoldStar width={20} height={20} />
        </View>
        <View style={styles.ratingMsg}>
          <Text style={{fontFamily: 'Poppins-SemiBold', textAlign:'center'}}>Good Job</Text>
          <Text style={{fontFamily: 'Poppins-SemiBold', textAlign:'center'}}>You are maximalist!</Text>
        </View>
        <View style={styles.optionsBarContainer}>
          <View style={styles.optionsBar}>
            <TouchableOpacity style={styles.options} >
              <Heart width={30} height={30} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.options}>
              <Clock width={30} height={30} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.options}>
              <Inbox width={30} height={30} style={{marginTop: 15}} />
              <View style={styles.notificationTotal}>
                <Text style={{fontSize: 8, textAlign: 'center', color: 'white'}}>12</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.options}>
              <ChartLine width={30} height={30} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.options}>
              <Tools width={30} height={30} />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.logOutButtonContainer}>
          <TouchableOpacity onPress={handleLogout} activeOpacity={.5} style={styles.logOutButton}>
            <Text style={{color: '#FF0000', fontFamily: 'Poppins-Regular'}}>Logout</Text>
          </TouchableOpacity>
        </View>
      </View>
    </>
  )
}

const {height, width} = Dimensions.get('window')

const styles = StyleSheet.create({
  container:{
    height: '100%'
  },
  avatarContainer:{
    flex:.18,
  },
  avatar:{
    borderWidth: 1.5, 
    borderColor: '#188FDE', 
    borderRadius: 100, 
    height: 90, 
    width: 90,
    alignSelf: "center",
    marginTop: 35,
    backgroundColor: 'transparent',
    alignItems: 'center',
    paddingTop: 20
  },
  username:{
    fontFamily: 'Poppins-Regular',
    fontSize: 15,
    color: '#424242',
    alignSelf: 'center'
  },
  rating:{
    flex: .05,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10
  },
  ratingMsg:{
    flex:.08,
    justifyContent: 'center'
  },
  optionsBarContainer:{
    flex: .12,
    // backgroundColor: 'green',
    alignItems: 'center',
    justifyContent: 'flex-end'
  },
  optionsBar:{
    width: '90%',
    height: '90%',
    backgroundColor: 'white',
    borderRadius: 60,
    elevation: 1,
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems:'center'
  },
  options:{
    marginRight: 15,
    marginLeft: 15,
    elevation: 2
  },
  logOutButtonContainer:{
    flex: .1,
    alignItems: "center",
    justifyContent: 'flex-end'
  },
  logOutButton:{
    width: '90%',
    height: '50%',
    borderWidth: 2,
    borderColor: '#FF0000',
    borderRadius: 10,
    alignItems: "center",
    justifyContent: 'center'
  },
  notificationTotal:{
    height: 15,
    width: 15,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: 'white',
    backgroundColor: '#188FDE',
    marginLeft: 15,
    marginTop: -32,
    marginBottom: 32
  }
});

const mapStateToProps = state =>({
  Auth: state.Auth
});

const mapDispatchToProps = {Logout};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Profile);