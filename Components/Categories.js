import React from 'react'
import { FlatList, Text, View } from 'react-native'
import ProductBox from './ProductBox'

function Categories(props) {
    const {categories} = props.data 
    return (
        categories.map((category)=>
            <>
                <Text style={{padding:20,fontSize:14,fontWeight:'bold'}}>{Object.keys(category)[0].toUpperCase()}</Text>
                <View style={{borderColor:'grey',borderWidth:0.2,}}/>
                <FlatList
                    showsHorizontalScrollIndicator={false}
                    horizontal={true}
                    data={category[Object.keys(category)[0]]}
                    renderItem={({item}) =>  <ProductBox name={item.name} skusize={item.skusize} oldPrice={item.oldPrice} discountedPrice={item.discountedPrice} images={item.images} title={item.title}/>}
                />
            </>
        )
    )
}

export default Categories
