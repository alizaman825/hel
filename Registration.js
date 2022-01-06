import React from 'react'
import { Image, Text, TextInput, View } from 'react-native'
import AddToCartBtn from './AddToCartBtn'
import DropdownComponent from './Dropdown'
import Img from './registerImg.png'
import TextField from './TextField'
function Registration() {
    return (
        <>
        <View>
            <Text style={{fontSize:25,textAlign:'center',paddingTop:40,fontWeight:'900',color:'#003B7D'}}>Sign Up</Text>
            <Text style={{textAlign:'center',fontSize:15,fontWeight:'400',paddingTop:10,}}>Please type your information below</Text>
            <Image source={Img} style={{alignSelf:"center",marginTop:20}}/>
            <TextField placeholder={'Restaurant Name'} label={'Restaurant Name'}/>
            <DropdownComponent placeholder={'Type Of Cuisine'} label={'Type of Cuisine'}/>
            <DropdownComponent placeholder={'Number of Branches'} label={'Type of Branches'}/>
            <TextField placeholder={'Average Basket Size'} label={'Average Basket Size'}/>
            <View style={{width:'90%',alignSelf:"center",marginTop:30,}}>
            <AddToCartBtn fullWidth={true} title={'Next'}/>
            </View>
        </View>
        </>
    )
}

export default Registration
