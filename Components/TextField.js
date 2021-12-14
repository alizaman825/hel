import React, { useRef, useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { TextInput } from 'react-native-element-textinput'
function TextField({placeholder,label,returnKeyType,onSubmitEditing,blurOnSubmit}) {


    return (
        <>
        <View>
         <TextInput
          style={styles.input}
          inputStyle={styles.inputStyle}
          labelStyle={styles.labelStyle}
          placeholderStyle={styles.placeholderStyle}
          textErrorStyle={styles.textErrorStyle}
          placeholder={placeholder}
          placeholderTextColor="gray"
          focusColor="#FF7139"
          label={label}
          showIcon={true}
          textError={false}
          returnKeyType={returnKeyType}
          onSubmitEditing={onSubmitEditing}
          blurOnSubmit={blurOnSubmit}
          
          


          />
          </View>
        </>
    )
}
const styles = StyleSheet.create({
          input: {
            height: 55,
            paddingHorizontal: 12,
            borderRadius: 8,
            borderWidth: 1,
            borderColor: '#DDDDDD',
            alignSelf:"center",
            width:'90%',
            marginTop:20,
          },
          labelStyle: {
            fontSize: 14,
            position: 'absolute',
            top: -10,
            backgroundColor: 'white',
            paddingHorizontal: 4,
            marginLeft: -4,
          },
          inputStyle: { fontSize: 16 },
          placeholderStyle: { fontSize: 16 },
          textErrorStyle: { fontSize: 16,paddingLeft:40 },
          
        
    
})

export default TextField
