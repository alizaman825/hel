import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import Img1 from '../../assets/Icon.png'
import AddToCartBtn from '../../Components/AddToCartBtn'
import TextField from '../../Components/TextField'
function ForgotPass() {
    return (
        <>
        <View>
            <Image style={styles.logo} source={Img1}/>
            <Text style={styles.mainText}>Forgot Password</Text>
            <View>
                <TextField placeholder="Enter your email" label="Email"/>
                <TextField placeholder="Enter your email to get verficattion code" label="Email for verification"/>
            </View>
            <View style={{marginTop:20}}>
                <AddToCartBtn title="Send"/>
            </View>
        </View>
        </>
    )
}

const styles = StyleSheet.create({
    logo:{
        alignSelf:"center",
        marginTop:'20%',
    },
    mainText:{
        textAlign:'center',
        paddingTop:20,
        fontSize:24,
        fontWeight:'bold',
    }
})
export default ForgotPass
