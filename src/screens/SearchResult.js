import React, { useState, useEffect, useRef } from 'react';
import SlidingUpPanel from 'rn-sliding-up-panel';
import SearchLogo from '../../assets/images/search.svg';
import BackButton from '../../assets/images/arrow-left.svg';
import GoldStar from '../../assets/images/gold-star.svg';
import * as Animatable from 'react-native-animatable';
import {GetBooks} from '../redux/actions/Interface';
import {connect} from 'react-redux';
import {
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  TextInput,
  Image,
  ScrollView,
  Animated
} from 'react-native';

const SearchResult = (props) =>{

  const [data, setData] = useState({
    searchInput: props.route.params.data,
    localSearchInput: ''
  });

  //DECIDE
  const globalFilterData = props.Interface.data.filter(book=>{
    return book.title.toLowerCase().indexOf(data.searchInput.toLowerCase()) !== -1 || book.author.toLowerCase().indexOf(data.searchInput.toLowerCase()) !== -1
  });
  const localFilterData = props.Interface.data.filter(book=>{
    book.title.toLowerCase().indexOf(data.localSearchInput.toLowerCase()) !== -1 || book.author.toLowerCase().indexOf(data.localSearchInput.toLowerCase()) !== -1
  });
  let filterData = localSearch ? localFilterData : globalFilterData
  ////////


  
  const handleGoBack = () =>{
    setData({...data, localSearchInput: '', searchInput: ''});
    props.navigation.push('Home');
  };
  
  const [search, setSearch] = useState(false);
  
  const [localSearch, setLocalSearch] = useState(false);
  const handleSearch = () =>{
    setSearch(!search);
    setLocalSearch(!localSearch);
    setDisplaySheet({...displaySheet, bottom: 0});
  };

  const handleDrag = () =>{
    setDisplaySheet({...displaySheet, bottom: 0})
  }

  console.log(props)

  const [displaySheet, setDisplaySheet] = useState({
    bottom: 75
  });
  const draggedValue = new Animated.Value(displaySheet.bottom);
  const modalRef = useRef(null);

  const handleDisplaySheet = () =>{
    setDisplaySheet({...displaySheet, bottom: 75})
  }

  return(
    <>
      <View style={styles.header}>
        <TouchableOpacity onPress={handleGoBack} style={{margin:10}}>
            <BackButton width={20} height={20}/>
        </TouchableOpacity>
        <View style={styles.searchContainer}>


          <TextInput value={data.localSearchInput} onChangeText={(value)=>setData({...data, localSearchInput: value})} onSubmitEditing={()=>props.navigation.push('SearchResult', {data: data.localSearchInput})} onFocus={handleSearch} onBlur={handleDisplaySheet} style={{textAlign: 'center'}} placeholder='Search' />



          <SearchLogo width={15} height={15} style={search? styles.searchOnFocus : styles.searchLogo}/>
        </View>
      </View>
      <ScrollView onScrollBeginDrag={handleDrag} onScrollEndDrag={handleDisplaySheet} showsVerticalScrollIndicator={false} style={styles.main}>
        <View style={styles.mainHeader}>
          <View style={{flexDirection: 'row', alignItems:'center', marginLeft: -150, marginTop: 5}}>
            <Text style={{fontFamily: 'Poppins-Regular'}}>Search: </Text>
            <Text style={{fontFamily: 'Poppins-Italic'}}>{data.searchInput}</Text>
          </View>
            <Text style={{fontFamily: 'Poppins-Italic', fontSize: 10, alignSelf: 'center', marginRight: -150}}>Total Result: {filterData.length}</Text>
        </View>
        <View style={{marginBottom: displaySheet.bottom + 20}}>
          {filterData.map((book, index)=>{
            return (
              <TouchableOpacity onPress={()=>props.navigation.navigate('BookDetail', {data: book, routeName: props.route.name})} key={index} activeOpacity={.8} style={styles.cardContainer}>
                <View style={styles.cardImage}>
                  <Image 
                    style={{flex: 1, width: null, height: null, resizeMode:'cover'}}
                    source={{uri: `http://192.168.1.6:3000/uploads/${book.image}`}}
                  />
                </View>
                <View style={styles.cardDescription}>
                  <View style={{flex: 4, marginLeft: 15}}>
                    <Text style={{fontFamily: 'Poppins-SemiBold', fontSize: 12, color: '#424242', marginBottom: -5}}>{book.title}</Text>
                    <View style={{flexDirection: 'row'}}>
                      <Text style={{fontFamily: 'Poppins-Regular', fontSize: 7}}>by </Text>
                      <Text style={{fontFamily: 'Poppins-Italic', fontSize: 7}}>{book.author}</Text>
                    </View>
                  </View>
                  <View style={{flex: 1, marginRight: 15, alignItems: 'center'}}>
                    <Text style={{fontFamily: 'Poppins-SemiBold', fontSize: 12, color: '#87E12D'}}>{book.status}</Text>
                    <View style={{flexDirection: 'row', marginTop: 5}}>
                      <GoldStar width={15} height={15} />
                      <Text style={{fontSize: 9}}>5.0</Text>
                    </View>
                  </View>
                </View>
              </TouchableOpacity>
            )
          })}
        </View>
      </ScrollView>
      <View style={styles.footer}>
        <SlidingUpPanel
          ref={modalRef}
          draggableRange={{top: height - 30, bottom: displaySheet.bottom}}
          animatedValue={draggedValue}
          backdropOpacity={0}
          snappingPoints={[displaySheet.bottom]}
          height={height}
          friction={.4}
        >
          <ScrollView style={styles.sheetContent}>
            <View style={styles.sheetHandle}></View>
            <Text style={{fontFamily: 'Poppins-Bold', fontSize: 20, alignSelf: 'center'}}>See Also</Text>
            <TouchableOpacity>

            </TouchableOpacity>
          </ScrollView>
        </SlidingUpPanel>
      </View>
    </>
  )
}

const {height, width} = Dimensions.get('window');

const styles = StyleSheet.create({
  header:{
    height: height/13,
  },
  searchContainer:{
    backgroundColor: 'white',
    width: '80%',
    alignSelf: 'center',
    borderRadius: 50,
  },
  searchLogo:{
    marginTop: -27,
    marginLeft: -70,
    alignSelf: 'center',
  },
  searchOnFocus:{
    marginTop: -27,
    marginLeft: 15,
    alignSelf: 'flex-start',
  },
  main:{
    flex: 1,
    paddingLeft: 10,
    paddingRight: 10,
    marginTop: 30
  },
  mainHeader:{
    height: 50,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-evenly'
  },
  bookTypeButton:{
    marginRight: 5,
    marginLeft: 5,
    backgroundColor: '#FFDE39',
    width: '30%',
    height: '50%',
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 40,
    elevation: 3
  },
  bookTypeButtonDISABLED:{
    marginRight: 5,
    marginLeft: 5,
    backgroundColor: '#FFDE39',
    opacity: .4,
    width: '30%',
    height: '50%',
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 40
  },
  genreButton:{
    marginRight: 5,
    marginLeft: 5,
    backgroundColor: '#0075DC',
    width: '30%',
    height: '50%',
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 40,
    elevation: 3
  },
  genreButtonDISABLED:{
    marginRight: 5,
    marginLeft: 5,
    backgroundColor: '#0075DC',
    opacity: .4,
    width: '30%',
    height: '50%',
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 40,
  },
  cardContainer:{
    width: '90%',
    height: 275,
    backgroundColor: 'white',
    alignSelf: 'center',
    marginTop: 10,
    borderRadius: 10,
    elevation: 2,
    overflow: "hidden"
  },
  cardImage:{
    flex: 4,
  },
  cardDescription:{
    flex: 1,
    padding: 5,
    flexDirection: 'row'
  },
  footer:{
    width: '100%',
    alignSelf: 'center',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  sheetContent:{
    flex: 1,
    backgroundColor: 'white',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 10,
    elevation: 3
  },
  sheetHandle:{
    height: 4,
    width: 35,
    backgroundColor: '#bbb',
    borderRadius: 10,
    alignSelf: 'center',
    marginTop: 6,
    marginBottom: 10
  },
});

const mapStateToProps = state =>({
  Interface: state.Interface
});

const mapDispatchToProps = {GetBooks}

export default connect(mapStateToProps, mapDispatchToProps)(SearchResult)