import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
function OrderHistoryBtn() {
    return (
        <>
        <View>
            <TouchableOpacity style={styles.container}>
                <View style={{display:"flex",justifyContent:"space-around",alignSelf:'center',flexDirection:'row'}}>
                    <Text style={{textAlign:'center',padding:20,color:"white",fontSize:14,fontWeight:'400'}}>
                        Order History
                    </Text>
                </View>
            </TouchableOpacity>
        </View>
        </>
    )
}

const styles = StyleSheet.create({
    container:{
        width:"40%",
        borderRadius:10,
        backgroundColor:'#FF7139',
        shadowColor:"#000",
        shadowOffset:{width:0,height:2},
        shadowRadius:2,
        shadowOpacity:0.4,
        elevation:5,
        marginTop:30,
        alignSelf:'center'


    }
})
export default OrderHistoryBtn
