import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import AddToCartBtn from './AddToCartBtn'
import ProductText from './ProductText'
import InputButtons from './InputButtons'
import ProductImage from './ProductImage'
function ProductBox(props) {
    const data ={title:'Add to cart'}
    return (
        <>

        <View style={styles.container}>
            <ProductImage images={props.images}/>
            <ProductText title={props.name} skusize={props.skusize} oldPrice={props.oldPrice} discountedPrice={props.discountedPrice}/>
            <InputButtons/>
            <AddToCartBtn title={data.title} fullWidth={true}/>
        </View>
        </>
    )
}
const styles = StyleSheet.create({
    container:{
        borderRadius:20,
        shadowColor: "#000",
        shadowOffset: {
	          width: 0,
 	          height: 2, 
            },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        backgroundColor:"white",
        alignSelf:"center",
        margin:10,
        
    }
})

export default ProductBox
