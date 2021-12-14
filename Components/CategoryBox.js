import React, { Component, useState } from 'react'
import { Button, FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import Img1 from '../assets/burger.png'
import ProductBox from './ProductBox'

export default function CategoryBox (props){
    const [showSubCategories, setShowSubCategories] = useState(false)
    const [subCategoriesIndex, setSubCategoriesIndex] = useState(0)
    const {categorybox} = props.data
    const pressHandler = (index) => {
        setShowSubCategories(true)
        setSubCategoriesIndex(index)
        
        if(showSubCategories === true){
            setShowSubCategories(false)
            
       }
    }
      
    return (
     
        <>
        <View style={{width:'100%'}}>
            <FlatList                
                numColumns={2}
                data={showSubCategories ? categorybox[subCategoriesIndex].subCategories : categorybox}
                renderItem={({item,index}) =>   <TouchableOpacity onPress={()=>pressHandler(index)} style={styles.categoryBtn}><Image style={styles.img} source={Img1}/><Text style={styles.txt}>{item.title}</Text></TouchableOpacity>}
            />
            </View>
        </>
          
    
           
    )
}

const styles = StyleSheet.create({
    categoryBtn:{
        width:"45%",
        backgroundColor:"#FF7139",
        borderRadius:20,
        alignSelf:'center',
        margin:10,
        shadowColor: "#000",
        shadowOffset: {
	          width: 0,
 	          height: 2, 
            },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 8,
    },
    img:{
        alignSelf:"center",
        margin:20,
    },
    txt:{
        color:'white',
        textAlign:'center',
        paddingBottom:20,
        fontSize:14,
        fontWeight:'400'
    }
})

