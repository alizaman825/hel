import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'

function DeliveryMethod() {
    return (
       <>
       <View>
           <Text style={{padding:20,fontSize:26,fontWeight:"800",}}>
               Delivery Methods
           </Text>
           <View style={{display:"flex",flexDirection:"row",justifyContent:"space-around",width:"90%",alignSelf:'center'}}>
           <TouchableOpacity style={styles.btn}>
               <Text style={{color:"white",padding:20,textAlign:'center',fontSize:18}}>Delivery</Text>
           </TouchableOpacity>
           <TouchableOpacity style={styles.btn}>
               <Text style={{color:"white",padding:20,textAlign:'center',fontSize:18}}>Store Pickup</Text>
           </TouchableOpacity>
           </View>
       </View>
       </>
    )
}
const styles = StyleSheet.create({
    btn:{
        backgroundColor:"#FF7139",
        borderRadius:15,
        margin:10,
    }
})
export default DeliveryMethod
