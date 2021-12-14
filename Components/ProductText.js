import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

function ProductText(props) {
    return (
        <>
        <View style={{padding:10}}>
            <Text style={styles.text}><Text style={{fontWeight:'bold'}}>SKU Size:</Text>{props.skusize}</Text>
            <Text style={styles.text}><Text style={{fontWeight:'bold'}}>Old Price:</Text> {props.oldPrice}</Text>
            <Text style={styles.text}><Text style={{fontWeight:'bold'}}>Discounted Price :</Text> {props.discountedPrice}</Text>
        </View>
        </>
    )
}
const styles = StyleSheet.create({
    text:{
        color:"#58749D",fontSize:14,fontWeight:"600",paddingTop:10
    }
})

export default ProductText
