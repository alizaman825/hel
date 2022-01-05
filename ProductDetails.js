import React from 'react'
import { Image, ScrollView } from 'react-native'
import { ImageBackground, StyleSheet, Text, View,} from 'react-native'
import AddToCartBtn from './AddToCartBtn'
import Img1 from './food.jpg'
import InputButtons from './InputButtons'
import Heart from './heart.png'
import ProductBox from './ProductBox'
import Img2 from './food.jpeg'
import { SliderBox } from 'react-native-image-slider-box'

const INGREDIENTS = [
    {name: 'Product Name', image:Img1 },
    {name: 'Product Name', image:Img1},
    {name: 'Product Name', image:Img1 },
    {name: 'Product Name', image:Img1 },
    {name: 'Product Name',  image:Img1},
    {name: 'Product Name',  image:Img1},
    {name: 'Product Name',  image:Img1},
    {name: 'Product Name',  image:Img1},
    {name: 'Product Name',  image:Img1},
    {name: 'Product Name',   image:Img1},
  ];
const data = {
    images : [
        require('./food.jpg'),
        require('./food.jpg'),
        require('./food.jpg'),
        require('./food.jpg'),
        require('./food.jpg'),
    ]
}
function ProductDetails() {
    const ingredientnsViews = data => {
        return (
            <ProductBox Width='45%' name={data.name} skusize={data.skusize} oldPrice={data.oldPrice} discountedPrice={data.discountedPrice} images={data.image} title={data.name}/>
        );
      };

    return (
        <>
    <ScrollView>
        <SliderBox images={data.images}  sliderBoxHeight={300} disableOnPress={true} paginationBoxVerticalPadding={40} autoplay={true} circleLoop={true} dotStyle={{width:20}} inactiveDotStyle={{width:10,height:10,borderRadius:5}} />
            <View style={styles.container}>
                <Text style={{fontSize:18,fontWeight:'700',color:'blue',padding:20}}>
                    Product Name
                </Text>
                 <View style={{flexDirection:'row',marginHorizontal:20}}>
                    <Text style={{fontSize:18,fontWeight:'700',color:'blue',}}>RS Price</Text>
                    <Text style={{fontSize:13,fontWeight:'300',paddingHorizontal:5, paddingTop:5 ,textDecorationLine:'line-through'}}>Sale Price</Text>
                </View>
                <Text style={{textAlign:'justify',paddingHorizontal:20,fontSize:14,fontWeight:'400',paddingVertical:10}}>
                    Everybody enjoys indulging in juicy red cherries during the summer season. This vibrant red fruit is a great blend of sweet flavours with a tingle of sourness and adds the ...
                </Text>
                <View style={{flexDirection:'row',alignItems:"center",justifyContent:'space-around',margin:20}}>
                    <View style={{width:'20%'}}>
                        <InputButtons Margin={0} />
                    </View>
                    <View style={{width:'40%'}}>
                        <AddToCartBtn  title={'Add to cart'} fullWidth={true}/> 
                    </View>
                    <View>
                        <Image source={Heart} />
                    </View>
                </View>
                <View>
                    <Text style={{fontSize:18,fontWeight:'700',color:'blue',padding:20}}>Similar Products</Text>
                </View>
                <View style={{flexDirection: 'row', flexWrap: 'wrap'}}>
                    {INGREDIENTS.map((value, index) => {
                    return ingredientnsViews(value);
                    })}
                </View>
            </View>
    </ScrollView>
        </>
    )
}

export default ProductDetails

const styles = StyleSheet.create({
    imgBackground:{
        width:"100%",
        height:400,
    },
    container:{
        borderTopLeftRadius:20,
        borderTopRightRadius:20,
        backgroundColor:"white",
        marginTop:-20,
        zIndex:1,
        shadowColor: "#000",
        shadowOffset: {
	          width: 0,
 	          height: 2, 
            },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    }
})