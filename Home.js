import React from 'react'
import { View, Text, FlatList, ScrollView, Dimensions } from 'react-native'
import { TouchableOpacity } from 'react-native'
import { SliderBox } from 'react-native-image-slider-box'
import Img from './food.jpg'
import ProductBox from './ProductBox'

function Home() {
    const data = {
        categories:[
            {
                grocery:[
                    {name:"Ketchup",skusize:"Small",oldPrice:"200",discountedPrice:"150",images:Img},
                    {name:"Ketchup",skusize:"Large",oldPrice:"200",discountedPrice:"150",images:Img},
                    {name:"Ketchup",skusize:"Medium",oldPrice:"200",discountedPrice:"150",images:Img},
                    {name:"Ketchup",skusize:"Extra Large",oldPrice:"200",discountedPrice:"150",images:Img}, 
                    {name:"Ketchup",skusize:"Medium",oldPrice:"200",discountedPrice:"150",images:Img},
                    {name:"Ketchup",skusize:"Medium",oldPrice:"200",discountedPrice:"150",images:Img},
                    {name:"Ketchup",skusize:"Medium",oldPrice:"200",discountedPrice:"150",images:Img}
                ]
            },
            {
                electronics:[
                    {name:"Ketchup",skusize:"Large",oldPrice:"200",discountedPrice:"150",images:Img},
                    {name:"Ketchup",skusize:"Full",oldPrice:"200",discountedPrice:"150",images:Img},
                    {name:"Ketchup",skusize:"Half",oldPrice:"200",discountedPrice:"150",images:Img},
                    {name:"Ketchup",skusize:"Medium",oldPrice:"200",discountedPrice:"150",images:Img},
                    {name:"Ketchup",skusize:"Medium",oldPrice:"200",discountedPrice:"150",images:Img},
                    {name:"Ketchup",skusize:"Medium",oldPrice:"200",discountedPrice:"150",images:Img},
                    {name:"Ketchup",skusize:"Medium",oldPrice:"200",discountedPrice:"150",images:Img},
                    {name:"Ketchup",skusize:"Medium",oldPrice:"200",discountedPrice:"150",images:Img},
                ]

            },
            {
                freshfood:[
                    {name:"Ketchup",skusize:"Large",oldPrice:"200",discountedPrice:"150",images:Img},
                    {name:"Ketchup",skusize:"Full",oldPrice:"200",discountedPrice:"150",images:Img},
                    {name:"Ketchup",skusize:"Half",oldPrice:"200",discountedPrice:"150",images:Img},
                    {name:"Ketchup",skusize:"Medium",oldPrice:"200",discountedPrice:"150",images:Img},
                    {name:"Ketchup",skusize:"Medium",oldPrice:"200",discountedPrice:"150",images:Img},
                    {name:"Ketchup",skusize:"Medium",oldPrice:"200",discountedPrice:"150",images:Img},
                    {name:"Ketchup",skusize:"Medium",oldPrice:"200",discountedPrice:"150",images:Img},
                    {name:"Ketchup",skusize:"Medium",oldPrice:"200",discountedPrice:"150",images:Img},
                ]
                
            },
            {
                vegetables:[
                    {name:"Ketchup",skusize:"Large",oldPrice:"200",discountedPrice:"150",images:Img},
                    {name:"Ketchup",skusize:"Full",oldPrice:"200",discountedPrice:"150",images:Img},
                    {name:"Ketchup",skusize:"Half",oldPrice:"200",discountedPrice:"150",images:Img},
                    {name:"Ketchup",skusize:"Medium",oldPrice:"200",discountedPrice:"150",images:Img},
                    {name:"Ketchup",skusize:"Medium",oldPrice:"200",discountedPrice:"150",images:Img},
                    {name:"Ketchup",skusize:"Medium",oldPrice:"200",discountedPrice:"150",images:Img},
                    {name:"Ketchup",skusize:"Medium",oldPrice:"200",discountedPrice:"150",images:Img},
                    {name:"Ketchup",skusize:"Medium",oldPrice:"200",discountedPrice:"150",images:Img},
                ]
                
            },
            
        ],
    }
const imageData = {
        images : [
            require('./food.jpg'),
            require('./food.jpg'),
            require('./food.jpg'),
            require('./food.jpg'),
            require('./food.jpg'),
        ]
    }
    return (
    <ScrollView>
        {imageData.images ? 
        <SliderBox ImageComponentStyle={{borderRadius:20, width:'92%', margin:20 }} images={imageData.images} sliderBoxHeight={300} disableOnPress={true} paginationBoxVerticalPadding={40} autoplay={true} circleLoop={true} dotStyle={{width:20}} inactiveDotStyle={{width:10,height:10,borderRadius:5}}/>:null
        }
         { data.categories.map((category)=>
         <>
            <View style={{flexDirection:'row',justifyContent:"space-between"}}><Text style={{padding:20,fontSize:14,fontWeight:'bold'}}>{Object.keys(category)[0].toUpperCase()}</Text><TouchableOpacity><Text style={{fontSize:14,fontWeight:'300',padding:20}}>View All</Text></TouchableOpacity></View>
            <FlatList
                showsHorizontalScrollIndicator={false}
                horizontal={true}
                data={category[Object.keys(category)[0]]}
                renderItem={({item}) =>  <ProductBox name={item.name} skusize={item.skusize} oldPrice={item.oldPrice} discountedPrice={item.discountedPrice} images={item.images} title={item.title}/>}
            />
        </>
            )
         }
        
    </ScrollView>
    )
}

export default Home
