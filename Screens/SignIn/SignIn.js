import React, { useRef } from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import Img from '../../assets/Icon.png'
import AddToCartBtn from '../../Components/AddToCartBtn'
import TextField from '../../Components/TextField'
function SignIn() {
    const pressHandler = () =>{
        console.log("pressed")
    }
    const input_ref2 = useRef();

    return (
        <>
        <View>
            <View>
                <Image source={Img} style={styles.logo}/>
                <Text style={styles.maintext}>Welcome to Metro-B2B</Text>
                <Text style={styles.logintext}>Log In to Continue</Text>
            </View>
            <View style={{marginTop:20}} >
               <TextField placeholder="Username or Email" label="Username or Email" 
                   returnKeyType="next"
                   onSubmitEditing={() => {input_ref2.current.focus()}}
                   blurOnSubmit={false}
               />
                <TextField placeholder="Password" label="Password" ref={input_ref2}/>
            </View>
            <View style={{width:'80%',alignSelf:"center",marginTop:20}}>
                <AddToCartBtn onPress={()=>pressHandler()} fullWidth={true} title="Log In"/>
            </View>
            <View>
            <TouchableOpacity >
                <Text style={styles.forgotText}>
                    Forgot Password?
                </Text>
            </TouchableOpacity>
            </View>
            <View style={{marginTop:30,alignSelf:"center",display:"flex",flexDirection:'row'}}>
                <Text style={{fontSize:20,fontWeight:"400",}}>
                    Dont't have a account?
                 </Text>
                 <TouchableOpacity>
                        <Text style={styles.registerText}>
                            Register
                        </Text>
                    </TouchableOpacity>
            </View>
        </View>
        </>
    )
}

const styles = StyleSheet.create({
    logo:{
        alignSelf:'center',
        marginTop:"20%",
    },
    maintext:{
        textAlign:"center",
        paddingTop:20,
        fontSize:24,
        fontWeight:'bold',
        
    },
    logintext:{
        fontSize:14,
        fontWeight:'400',
        paddingTop:20,
        textAlign:'center',
    },
    forgotText:{
        color:"#FF7139",
        fontSize:20,
        fontWeight:'bold',
        textAlign:'center',
        paddingTop:40,

    },
    registerText:{
        color:"#FF7139",
        fontSize:20,
        fontWeight:'bold',
    }
})
export default SignIn
