import React from 'react'
import { Image } from 'react-native'

function ProductImage(props) {

    return (
       <>
       <Image source={props.images} style={{width:'100%',height:80,borderRadius:20,resizeMode:'contain'}}/>
       </>
    )
}

export default ProductImage
