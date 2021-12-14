import React, { useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { RadioButton } from 'react-native-paper'

function PaymentMethods() {
    const [checked , setChecked ] = useState('first')
    return (
        <>
        <View>
            <Text style={{padding:20,fontSize:26,fontWeight:"800",}}>
                Payment Methods
            </Text>
            <View style={{alignSelf:"center",flexDirection:"row"}}>
            <View style={styles.radio}>
                <RadioButton
                        value="first"
                        status={ checked === 'first' ? 'checked' : 'unchecked' }
                        onPress={() => setChecked('first')}
                        color="#FF7139"
                />
                <Text style={styles.radioText}>
                    Cash On Delivery
                </Text>
            </View>
            <View style={styles.radio}>
                <RadioButton
                        value="second"
                        status={ checked === 'second' ? 'checked' : 'unchecked' }
                        onPress={() => setChecked('second')}
                        color="#FF7139"
                />
                <Text style={styles.radioText}>
                    Credit Card
                </Text>
            </View>
            </View>
            <View style={{alignSelf:"center",flexDirection:"row"}}>
            <View style={styles.radio}>
                <RadioButton
                        value="third"
                        status={ checked === 'third' ? 'checked' : 'unchecked' }
                        onPress={() => setChecked('third')}
                        color="#FF7139"
                />
                <Text style={styles.radioText}>
                    Credit
                </Text>
            </View>
            <View style={styles.radio}>
                <RadioButton
                        value="fourth"
                        status={ checked === 'fourth' ? 'checked' : 'unchecked' }
                        onPress={() => setChecked('fourth')}
                        color="#FF7139"
                />
                <Text style={styles.radioText}>
                    Bank Transfer
                </Text>
            </View>
            </View>

        </View>
        </>
    )
}
const styles = StyleSheet.create({
    radio:{
        borderRadius:10,
        borderWidth:1,
        borderColor:'#FF7139',
        flexDirection:'row',
        justifyContent:'space-between',
        margin:20
    },
    radioText:{
        padding:10,
        textAlign:'center',

    }
})

export default PaymentMethods
