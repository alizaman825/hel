import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export default function AccountInformation(props) {
    return (
        <>
        <View style={styles.container}>
            <Text style={styles.mainText}>Account Information</Text>
            <View style={{margin:20}}>
                <Text style={styles.txt}>{props.firstName} <Text style={styles.txt}>{props.lastName}</Text></Text>
                <Text style={styles.txt}>{props.organisation}</Text>
                <Text style={styles.txt}>{props.role}</Text>
                <Text style={styles.txt}>{props.emailID}</Text>
                <Text style={styles.txt}>{props.mobile}</Text>
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
    mainText:{
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

    }
})
