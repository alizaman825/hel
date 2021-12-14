import React, { useState } from 'react'
import { StyleSheet, Text, View } from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';


function DropdownComponent({placeholder,label,title,data}) {
    const [value, setValue] = useState(null);
    const [isFocus, setIsFocus] = useState(false)
    return (
        <>
       <Text style={[styles.label,isFocus && {color:"#FF7139"}]}>{title}</Text>
        <Dropdown
          style={[styles.dropdown, isFocus && { borderColor: '#FF7139' }]}
          placeholderStyle={styles.placeholderStyle}
          selectedTextStyle={styles.selectedTextStyle}
          inputSearchStyle={styles.inputSearchStyle}
          iconStyle={styles.iconStyle}
          data={data}
          labelField="label"
          valueField="value"
          searchPlaceholder="Search"
          maxHeight={200}
          placeholder={!isFocus ? placeholder : placeholder}
          value={value}
          onFocus={() => setIsFocus(true)}
          onBlur={() => setIsFocus(false)}
          onChange={item => {
            setValue(item.value);
            setIsFocus(false);
          }}
        />
        </>
    )
}
const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        padding: 16,
      },
      dropdown: {
        borderColor: 'gray',
        borderWidth:1,
        borderRadius: 8,
        paddingHorizontal: 8,
        alignSelf:'center',
      width:'90%', 
        height:50,
    
      },
      icon: {
        marginRight: 5,
      },
      label: {
          padding:20,

      },
      placeholderStyle: {
        fontSize: 16,
      },
      selectedTextStyle: {
        fontSize: 16,
      },
      
})

export default DropdownComponent
