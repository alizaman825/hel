import React, { useState } from 'react'
import TextField from '../../Components/TextField'
import DropdownComponent from '../../Components/Dropdown'
import SearchBar from '../../Components/SearchBar'
import Img from '../../assets/food.jpg'
import Categories from '../../Components/Categories'
import ShippingDetails from '../../Components/ShippingDetails'
import DeliveryMethod from '../../Components/DeliveryMethod'
import PaymentMethods from '../../Components/PaymentMethods'
function Home() {
    const [value , setValue] = useState('')

    const hanldeValue = (value) =>{
        setValue(value)
    }
    console.log(hanldeValue)
    const data = {
        restaurantField: {
            title:"Restaurant Name",placeholder:'Restaurant Name', infomsg:"Please fill out this field",titleColor:"black",infoColor:'red'
        },
        dropdown :[
        {label:"Johar Town",value:"Johar Town"},
        {label:"DHA",value:'DHA'},
        {label:'Gulberg',value:'Gulberg'},
    ],
    dropdownTitle:{
        title:"Number of branches",},
        search:[
            "Grocery","Foods","Clothes","Toys","Electronics","Bakery","Kitchen Appliances"
        ],
        
        categories:[

        {
            grocery:[
                {name:"Ketchup",skusize:"Small",oldPrice:"200",discountedPrice:"150",images:Img},
                {name:"Ketchup",skusize:"Large",oldPrice:"200",discountedPrice:"150",images:Img},
                {name:"Ketchup",skusize:"Medium",oldPrice:"200",discountedPrice:"150",images:Img},
                {name:"Ketchup",skusize:"Extra Large",oldPrice:"200",discountedPrice:"150",images:Img}
            ]
        },
        {
            electronics:[
                {name:"Ketchup",skusize:"Large",oldPrice:"200",discountedPrice:"150",images:Img},
                {name:"Ketchup",skusize:"Full",oldPrice:"200",discountedPrice:"150",images:Img},
                {name:"Ketchup",skusize:"Half",oldPrice:"200",discountedPrice:"150",images:Img},
                {name:"Ketchup",skusize:"Medium",oldPrice:"200",discountedPrice:"150",images:Img}
            ]
        },
        
    ],

    shippingDetails:
        {firstName:"Ali",lastName:"Zaman",designation:"Manager",phoneNumber:"123456789",emailID:"your@example.com", deliveryAddress:"Lahore"},
        
        
        
        
        
    }
    return (
        <>
        <TextField value={value} hanldeValue={()=>hanldeValue} title={data.restaurantField.title} placeholder={data.restaurantField.placeholder} infomsg={data.restaurantField.infomsg} infoColor={data.restaurantField.infoColor} titleColor={data.restaurantField.titleColor} />
        <DropdownComponent data={data.dropdown} title={data.dropdownTitle.title}  />
        <SearchBar data={data.search}/>
        <Categories data={data}/>
       <ShippingDetails data={data.shippingDetails}/>
       <DeliveryMethod/>
       <PaymentMethods/>
       </>
    )
    
}
    export default Home