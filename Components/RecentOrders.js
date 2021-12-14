import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'

function RecentOrders(props) {
    return (
       <>
       <View style={styles.container}>
           <Text style={styles.mainTxt}>
               Recent Orders
           </Text>
           <View style={{display:"flex",justifyContent:"space-between",flexDirection:'row',marginTop:20}}>
               <View>
                   <Text style={styles.txt}>{props.orderNo}</Text>
                   <Text style={styles.txt}>{props.date}</Text>
                   <Text style={styles.txt}>{props.status}</Text>
               </View>
               <View style={{marginRight:20,marginBottom:20}}>
                   <TouchableOpacity style={styles.btn}>
                    <Text style={{textAlign:"center",padding:20,color:"white"}}>{props.btnTextView}</Text>
                   </TouchableOpacity>
                   <TouchableOpacity style={styles.btn}>
                    <Text style={{textAlign:"center",padding:20,color:"white"}}>{props.btnTextReorder}</Text>
                   </TouchableOpacity>
               </View>
           </View>
       </View>
       </>
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
    mainTxt:{
        fontWeight:"bold",
        fontSize:28,
        paddingTop:20,
        paddingLeft:20
    },
    txt:{
        paddingTop:20,
        paddingLeft:20,
        fontSize:14,
        fontWeight:'400',
        color:'#FF7139',
    },
    btn:{
        width:"100%",
        borderRadius:10,
        backgroundColor:'#FF7139',
        shadowColor:"#000",
        shadowOffset:{width:0,height:2},
        shadowRadius:2,
        shadowOpacity:0.4,
        elevation:5,
        marginTop:10,
        alignSelf:'center',
    }
})

export default RecentOrders
