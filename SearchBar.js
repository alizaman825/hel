import React, { useState } from 'react';
import { ActivityIndicator, StyleSheet, TextInput, TouchableOpacity, View } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'; 


 const Search = () => {
   const [value, setValue] = useState('')
   const [focus, setFocus] = useState(false)
   return (
     <View style={[styles.search,focus ? {borderColor:'blue'}:{borderColor:"#000"} ]}>
  <TextInput
    value={value}
    onChangeText={setValue}
    searchIcon={true}
    platform='android'
    placeholder="Search"
    style={{width:'70%'}}
    onEndEditing={() => setFocus(false)}
    onFocus={() => setFocus(true)}
  />
  <TouchableOpacity style={styles.iconContainer}>
  <FontAwesomeIcon
  icon={ faSearch }
  size={17}
  color="white"
  style={{alignSelf:'center',margin:10}}
  />
  </TouchableOpacity>
  </View>
   )
 }
 export default Search

 const styles = StyleSheet.create({
   search:{
     borderRadius:10,
     borderWidth:1,
     width:'70%',
     alignSelf:'center',
     paddingHorizontal:8,
     height:50,
     flexDirection:'row',
     justifyContent:'space-between',
     margin:20

   },
   iconContainer:{
     borderRadius:10,
     width:35,
     height:35,
     alignSelf:"center",
     backgroundColor:'#FF7139',
     margin:5
     
   }
 })