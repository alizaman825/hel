import React, { useState } from 'react';
import {View, Text, TextInput} from 'react-native';
import {Dimensions, PixelRatio, StyleSheet, TouchableOpacity} from 'react-native';


let {height} = Dimensions.get('window');
let {width} = Dimensions.get('window');

const InputButtons = ({
  val,
  minVal,
  max,
  disableControl,
  minreq,
  handleClick,
  styleTextInput,
  styleBtn,
  disabledColor,
  activeColor,
  labelStyle,
  styleColumn,
}) => {
  // console.log(typeof labelFontSize);
  const [value, changeValue] = React.useState(0);
  const [count, changeCount] = React.useState(100);
  const [minReq, addMinReq] = React.useState(0);
  const [min, addMinValue] = React.useState(0);
  const [leftBtnDisable, changeLeftBtnDisable] = React.useState(false);
  const [rightBtnDisable, changeRightBtnDisable] = React.useState(false);
  const [disableColorBtn, addDisableColor] = React.useState('#eeeeee');
  const [activeColorBtn, addActiveColor] = React.useState('white');
  const [column,setColumn] = useState(false) 

  React.useEffect(() => {
    if (val) {
      changeValue(val);
    }
    if (max) {
      changeLeftBtnDisable(max <= 0);
      changeCount(max - 0);
    }
    if (minreq) {
      addMinReq(minreq);
    }
    if (val && max) {
      changeCount(max - val);

      changeRightBtnDisable(val <= 0);
    }
    if(minVal){
      changeRightBtnDisable(value<=minVal);
      addMinValue(minVal);
    }
    if(disabledColor){
      addDisableColor(disabledColor);
    }
    if(activeColor){
      addActiveColor(activeColor);
    }
    if(styleColumn === true){
      setColumn(styleColumn)
    }
   
  }, [val, max, minreq,minVal,disabledColor,activeColor]);

  // function to handle btn click
  const handlePress = val => {
    handleClick ? handleClick(val) : {};
  };
  return (
    <View style={styleColumn ? styles.view : styles.viewOuter}>
      <View
      style={[
        styleColumn ? styles.columnViewRightBtn : styles.viewBtnRight,
        {
          backgroundColor:
            rightBtnDisable || disableControl ? disableColorBtn : activeColorBtn,
        }, 
        styleBtn,
      ]}
        >
            <TouchableOpacity
          labelStyle={ labelStyle ? labelStyle : styles.labelStyle}
          disabled={rightBtnDisable || disableControl}
          color={'#ffffff'}
          onPress={() => {
            // changeDisable(true);
            if (value - 1 <= min || value - 1 < minReq) {
              changeLeftBtnDisable(false);
              changeRightBtnDisable(true);
              if (value - 1 <= min) {
                changeValue(value - 1);
                changeCount(count + 1);
                handlePress(value - 1);
              }
              if (value - 1 < minReq) {
                changeCount(count + minReq);
                changeValue(0);
                handlePress(0);
              }
            } else {
              changeLeftBtnDisable(false);
              changeCount(count + 1);
              changeValue(value - 1);
              handlePress(value - 1);
            }
          }}>
          <Text style={{color:'blue'}}>-</Text>
        </TouchableOpacity>
        
      </View>
      <View style={[styles.viewTextInput,styleTextInput]}>
        <Text style={[{color: '#000000'},labelStyle ? labelStyle : styles.labelStyle]}>{value}</Text>
      </View>
      <View
      style={[
        styleColumn ? styles.columnViewLeftBtn : styles.viewBtnLeft,
        {
          backgroundColor:
            leftBtnDisable || disableControl ? disableColorBtn : activeColorBtn,
        },
        styleBtn,
      ]}
        >
            <TouchableOpacity
          labelStyle={ labelStyle ? labelStyle : styles.labelStyle}
          disabled={leftBtnDisable || disableControl}
          color={'#ffffff'}
          onPress={() => {
            if (count - 1 <= 0) {
              changeCount(0);
              changeRightBtnDisable(false);
              changeLeftBtnDisable(true);
              changeValue(value + 1);
            } else {
              if (value < minReq) {
                changeCount(count - minReq);
                changeValue(value + minReq);
                handlePress(value + minReq);
              } else {
                changeCount(count - 1);
                changeValue(value + 1);
                handlePress(value + 1);
              }
              changeRightBtnDisable(false);
            }
          }}>
          <Text style={{color:'blue'}} >+</Text>
        </TouchableOpacity>
        
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  view:{
    flexDirection:'column',
    alignSelf:"center",
    margin:20
  },
  columnViewLeftBtn:{
    justifyContent: 'center',
    alignItems: 'center',
    height: PixelRatio.roundToNearestPixel((height * 5) / 100),
    width: PixelRatio.roundToNearestPixel((width * 8) / 100),
    borderWidth: 1,
    borderColor: '#eeeeee',
    borderBottomRightRadius: PixelRatio.roundToNearestPixel((height * 1) / 100),
    borderBottomLeftRadius: PixelRatio.roundToNearestPixel((height * 1) / 100),

  },
  columnViewRightBtn:{
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#eeeeee',
    height: PixelRatio.roundToNearestPixel((height * 5) / 100),
    width: PixelRatio.roundToNearestPixel((width * 8) / 100),
    borderTopRightRadius: PixelRatio.roundToNearestPixel((height * 1) / 100),
    borderTopLeftRadius: PixelRatio.roundToNearestPixel((height * 1) / 100),
  },
    viewOuter: {
      flexDirection: 'row',
      alignSelf:"center",
      margin:20
    },
    viewBtnLeft: {
      justifyContent: 'center',
      alignItems: 'center',
      fontSize: 24,
      height: PixelRatio.roundToNearestPixel((height * 5) / 100),
      width: PixelRatio.roundToNearestPixel((width * 8) / 100),
      borderWidth: 1,
      borderColor: '#eeeeee',
      borderRadius:8
    },
    viewBtnRight: {
      justifyContent: 'center',
      alignItems: 'center',
      borderWidth: 1,
      fontSize:24,
      borderColor: '#eeeeee',
      height: PixelRatio.roundToNearestPixel((height * 5) / 100),
      width: PixelRatio.roundToNearestPixel((width * 8) / 100),
      borderRadius:8
    },
    viewTextInput: {
      justifyContent: 'center',
      alignItems: 'center',
      fontSize: 18,
      fontWeight:'bold',
      height: PixelRatio.roundToNearestPixel((height * 5) / 100),
      width: PixelRatio.roundToNearestPixel((width * 8) / 100),
    },
    labelStyle:{
      fontSize: 10,
    },
  });

export default InputButtons;
