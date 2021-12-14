import React from 'react'
import { Text, View } from 'react-native'

function ShippingDetails(props) {
    console.log(props)
    return (
        <>
        <View style={{borderColor:"#FF7139",borderWidth:0.7,width:"95%",alignSelf:'center',borderRadius:10,margin:20}}>
            <Text style={{padding:20,fontSize:26,fontWeight:"800",}}>
            Shipping Details
            </Text>
            <View style={{display:"flex",flexDirection:'row',width:"90%",justifyContent:'space-between',alignSelf:'center'}}>
            <Text style={{fontSize:18,fontWeight:'300',color:"black"}}>
            {props.data.firstName}
            </Text>
            <Text style={{fontSize:18,fontWeight:'300',color:"black"}}>
            {props.data.lastName}
            </Text>
            </View>
            <Text style={{padding:20,fontSize:18,fontWeight:'300',color:"black"}}>
            {props.data.designation}
            </Text>
            <View style={{display:"flex",flexDirection:'row',width:"90%",justifyContent:'space-between',alignSelf:'center'}}>
            <Text style={{fontSize:18,fontWeight:'300',color:"black"}}>
            {props.data.phoneNumber}
            </Text>
            <Text style={{fontSize:18,fontWeight:'300',color:"black"}}>
            {props.data.emailID}
            </Text>
            </View>
            <Text style={{padding:20,fontSize:18,fontWeight:'300',color:"black"}}>
            {props.data.deliveryAddress}
            </Text>
        </View>
        </>
    )
}

export default ShippingDetails
