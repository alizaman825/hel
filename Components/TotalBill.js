import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

function TotalBill(props) {
    const {totalBill} = props.data
    return (
        totalBill.map((item,index) => (
       <View style={styles.container}>
       <View style={{display:'flex',flexDirection:"row",justifyContent:"space-between"}}>
           <View>
           <Text key={index} style={styles.txt}>{item.title}</Text>
           </View>
           <View>
               <Text key={index} style={styles.text}>{item.value}</Text>
           </View>
       </View>
       </View>
       ))
    
    )
}

const styles = StyleSheet.create({
    container:{
        borderWidth:1,
        borderRadius:10,
        borderColor:"#FF7139",
        width:'95%',
        alignSelf:'center',
        margin:20
    },
    txt:{
        padding:10,
        fontSize:14,
        fontWeight:'400',
        color:'#FF7139',
    },
    text:{
        padding:10,
        fontSize:14,
        fontWeight:'400',
    }
})
export default TotalBill
