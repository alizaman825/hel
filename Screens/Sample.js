import React from 'react'
import { ScrollView } from 'react-native'
import AccountInformation from '../Components/AccountInformation'
import AddToCartBtn from '../Components/AddToCartBtn'
import CategoryBox from '../Components/CategoryBox'
import { DeliveryPickup } from '../Components/DeliveryPickup'
import InputButtons from '../Components/InputButtons'
import MyLedgerBtn from '../Components/MyLedgerBtn'
import OrderHistoryBtn from '../Components/OrderHistoryBtn'
import PendingApprovalsBtn from '../Components/PendingApprovalsBtn'
import ProfileBtn from '../Components/ProfileBtn'
import RecentOrders from '../Components/RecentOrders'
import TotalBill from '../Components/TotalBill'


function Sample() {
    const data = {
        categorybox:[   
            {title:"Fast Food Restaurant",
            subCategories:[
                {title: 'Meat & Poultry'},
                {title: 'Sauces'},
                {title: 'Cooking Oils'},
                {title: 'Vegetables'},
                {title: 'Fruits'},
                {title: 'Category Type 7'},
            ]},
            {title:"Offices",subCategories:[
                {title: 'Meat & Poultry'},
                {title: 'Sauces'},
                {title: 'Cooking Oils'},
                {title: 'Vegetables'},
                {title: 'Fruits'},
                {title: 'Category Type 7'},
            ]},
            {title:"Continent & Cuisine",subCategories:[
                {title: 'Meat & Poultry'},
                {title: 'Sauces'},
                {title: 'Cooking Oils'},
                {title: 'Vegetables'},
                {title: 'Fruits'},
                {title: 'Category Type 7'},
            ]},
            {title:"Chinese",subCategories:[
                {title: 'Meat & Poultry'},
                {title: 'Sauces'},
                {title: 'Cooking Oils'},
                {title: 'Vegetables'},
                {title: 'Fruits'},
                {title: 'Category Type 7'},
            ]},
            {title:"Japanese",subCategories:[
                {title: 'Meat & Poultry'},
                {title: 'Sauces'},
                {title: 'Cooking Oils'},
                {title: 'Vegetables'},
                {title: 'Fruits'},
                {title: 'Category Type 7'},
            ]},
            {title:"Thai",subCategories:[
                {title: 'Meat & Poultry'},
                {title: 'Sauces'},
                {title: 'Cooking Oils'},
                {title: 'Vegetables'},
                {title: 'Fruits'},
                {title: 'Category Type 7'},
            ]}
        ], 
        accountInfo:{
            firstName:"Ali",lastName:"Zaman",organisation:"Marketing",role:"Manager",emailID:"your@example.com",mobile:'12345678'
        },
        recentOrder:{
            orderNo:"12321213",date:"12/12/2021",status:"Pending",btnTextView:"View",btnTextReorder:"Reorder"
        } ,
        totalBill:[
            {
                title: 'Total',
                value: '121231'
            },
            {
                title: 'Discount',
                value: '3424'
            },
            {
                title:'Sub Total',
                value:'23123',
            },
    ],
        btn:{
            title:"Add to cart"
        }
    
}
    return (
        <>
        <ScrollView>
        <CategoryBox data={data}/>
        <ProfileBtn/>
        <OrderHistoryBtn/>
        <PendingApprovalsBtn/>
        <MyLedgerBtn/>
        <AccountInformation firstName={data.accountInfo.firstName} lastName={data.accountInfo.lastName} organisation={data.accountInfo.organisation} role={data.accountInfo.role} emailID={data.accountInfo.emailID} mobile={data.accountInfo.mobile}/>
        <RecentOrders orderNo={data.recentOrder.orderNo} date={data.recentOrder.date} status={data.recentOrder.status} btnTextView={data.recentOrder.btnTextView} btnTextReorder={data.recentOrder.btnTextReorder} />
        <InputButtons styleColumn={false} max={12}/>
        <TotalBill data={data}/>
        <AddToCartBtn fullWidth={false} title={data.btn.title} onPress={{}}/>
        <DeliveryPickup/>
        </ScrollView>
        </>
    )
}

export default Sample
