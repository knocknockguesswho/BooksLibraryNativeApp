import React, { useState } from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  Animated,
  Image
} from 'react-native';

export default BookDetail = (props) =>{


  const test = () =>{
    console.log(props);
    // props.navigation.navigate('Home');
  }

  return(
  <>
    <TouchableOpacity onPress={test}>
      <Text>Back</Text>
    </TouchableOpacity>
  </>
)
}

const {height, width} = Dimensions.get('window');

const styles = StyleSheet.create({
  banner:{

  },
  detailsContainer:{

  },
  title:{
    
  },
  author:{

  },
  genre_and_type:{

  },
  description:{

  },
  borrowButton:{

  },
  slidingUpOthersBookByGenre:{

  }
})