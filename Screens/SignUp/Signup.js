import React from 'react'
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import Img from '../../assets/Icon.png'
import AddToCartBtn from '../../Components/AddToCartBtn'
import DropdownComponent from '../../Components/Dropdown'
import TextField from '../../Components/TextField'
function Signup() {
    return (
        <>
        <ScrollView>
            <View>
                <Image source={Img} style={{marginTop:"20%",alignSelf:'center',}}/>
            </View>
            <View style={{marginTop:30}} >
                <TextField placeholder="Restaurant Name" label="Restaurant Name" />    
                <DropdownComponent placeholder="Please choose type of cuisine" title="Type of cuisine" />
                <DropdownComponent placeholder="Please fill no branches" title="Number of Branches" />
                <DropdownComponent placeholder="please fill average basket size" title="Average basket size" />
                <DropdownComponent placeholder="Please choose province" title="Province" />
                <DropdownComponent placeholder="Please choose District" title="District" />
                <DropdownComponent placeholder="Please choose Sub-District" title="Sub-District" />
            </View>
            <View style={{alignSelf:"center",width:"97%"}}>
                <Text style={styles.text}>
                    Do you have a list of ingredient file you regularly order? Share it with us here for your better experience 
                </Text>
            </View>
            <View style={{width:'97%',alignSelf:'center',marginTop:20}}>
            <AddToCartBtn fullWidth={true} title="Upload Your Ingredient"/>
            </View>
            <Text style={{padding:20,textAlign:'center',fontWeight:'400',fontSize:13}}>Supported files .csv .xls .pdf .jpeg .png and upload maximum 3 files 10Mb/file</Text>
            <View style={{width:'97%',alignSelf:'center',margin:20}}>
            <AddToCartBtn fullWidth={true} title="Register"/>
            </View>
        </ScrollView>
        </>
    )
}
const styles = StyleSheet.create({
    text:{
        fontSize:20,
        fontWeight:'bold',
        paddingTop:20,
        textAlign:'center',
    }
})
export default Signup
