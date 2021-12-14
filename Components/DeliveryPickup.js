import React, {useState} from 'react';
import {View, Button, Platform, Text, StyleSheet} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import AddToCartBtn from './AddToCartBtn';

export const DeliveryPickup = () => {
  const [date, setDate] = useState(new Date(1598051730000));
  const [mode, setMode] = useState('date');
  const [show, setShow] = useState(false);

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === 'ios');
    setDate(currentDate);
  };

  const showMode = (currentMode) => {
    setShow(true);
    setMode(currentMode);
  };

  const showDatepicker = () => {
    showMode('date');
  };

  const showTimepicker = () => {
    showMode('time');
  };

  return (
    <View style={styles.container}>
        <Text style={styles.mainText}>Delivery Pickup</Text>
      <View style={{justifyContent:"space-around",flexDirection:"row"}}>
          <View>
        <Text style={styles.txt}>Day:</Text>
        </View>
        <View style={{width:"60%"}}>
        <AddToCartBtn onPress={()=>showDatepicker()} title="Day" />
        </View>
      </View>
      <View style={{justifyContent:"space-around",flexDirection:"row",marginTop:20}}>
          <View>
        <Text style={styles.txt}>Date:</Text>
        </View>
        <View style={{width:"60%"}}>
        <AddToCartBtn onPress={()=>showTimepicker()} title="Date" />
        </View>
      </View>
      {show && (
        <DateTimePicker
          testID="dateTimePicker"
          value={date}
          mode={mode}
          is24Hour={false}
          display="default"
          onChange={onChange}
        />
      )}
    </View>
  );
};
const styles = StyleSheet.create({
    container:{
        borderWidth:1,
        borderRadius:10,
        borderColor:"#FF7139",
        width:'95%',
        alignSelf:'center',
        margin:20
    },
    mainText:{
        fontWeight:"bold",
        fontSize:28,
        paddingTop:20,
        paddingLeft:20
    },
    txt:{
        paddingTop:20,
        paddingLeft:20,
        fontSize:14,
        fontWeight:'400',
        color:'#FF7139',

    }
})
