import React, { useEffect, useState } from 'react'
import { Button, StyleSheet, Text, TouchableOpacity, View } from 'react-native'

function AddToCartBtn({fullWidth,title,onPress}) {
    const [width,setWidth] = useState(false)

    useEffect(() => {
        if(fullWidth){
            setWidth(fullWidth)
        }
    },[fullWidth,])


    return (
       <>
       <View>
           <TouchableOpacity onPress={() => onPress()} style={fullWidth ? styles.btnFullWidth : styles.addtocart} >
               <Text style={{color:"white",textAlign:'center',paddingTop:15,}}>
                   {title}
               </Text>
           </TouchableOpacity>
       </View>
       </>
    )
}

const styles = StyleSheet.create({
    btnFullWidth:{
        width:"100%",
        borderRadius:10,
        height:50,
        backgroundColor:"#FF7139",
        shadowColor: "#FFFFFF",
        shadowOffset: {
	          width: 0,
 	          height: 2, 
            },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        alignSelf:'center',
    

    },
    addtocart:{
        width:"40%",
        borderRadius:10,
        height:50,
        backgroundColor:"#FF7139",
        shadowColor: "#000",
        shadowOffset: {
	          width: 0,
 	          height: 2, 
            },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        alignSelf:'center',
        marginBottom:10


    }
})
export default AddToCartBtn
