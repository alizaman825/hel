import * as React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Animated,
  Dimensions,
  Button,
  Image,
} from 'react-native';
import BottomSheet from 'reanimated-bottom-sheet';
import Icon from './Icon.png'
import InputButtons from './InputButtons';
export default class App extends React.Component {
  state = {
    opacity: new Animated.Value(0),
    isOpen: false,
  };
  bs = React.createRef(null);
  window = Dimensions.get('window');

  renderHeader = name => (
    <View style={styles.headerContainer}>
    <View style={styles.topHeader}>
      <TouchableOpacity onPress={this.onClose}>
        <Text style={{fontSize:20,padding:5}}>✖</Text>
      </TouchableOpacity>
      <Text style={{fontSize:18,color:"blue",fontWeight:'700',padding:5,textAlign:'center'}}>
        Add New Items
      </Text>
    </View>
    </View>
  );

  renderInner = () => (
    <View style={{ backgroundColor: 'white',height:"100%" }}>
      <View
    style={{
      borderBottomWidth:0.5,
      borderColor:'#fffff',
    }}/>
    <View style={{flexDirection:"row",justifyContent:'space-between'}}>
      <View style={{flexDirection:"row",margin:20}}>
        <Image source={Icon} borderRadius={20}/>
        <View>
        <Text style={{paddingHorizontal:10,fontSize:16,color:"blue"}}>
          Product Name
        </Text>
        <Text style={{padding:10,fontWeight:'300',fontSize:12,}}>
          Price Per KG
        </Text>
        </View>
      </View>
      <Text style={{padding:20,fontSize:15,fontWeight:'700'}}>
        RS Price
      </Text>
    </View>
    <View
    style={{
      borderBottomWidth:0.5,
      borderColor:'#fffff',
      width:'95%',
      alignSelf:'center'
    }}/>
    <View style={{margin:20}}>
      <View style={{flexDirection:'row',justifyContent:"space-between",margin:10}}>
        <Text style={{fontSize:13,fontWeight:'400',color:'blue'}}>
          Ammount
        </Text>
        <Text style={{fontSize:13,fontWeight:'400',color:'blue'}}>
          RS Price
        </Text>
      </View>
      <View style={{flexDirection:'row',justifyContent:"space-between",margin:10}}>
        <Text style={{fontSize:15,fontWeight:'700',color:'blue'}}>
          Total Price
        </Text>
        <Text style={{fontSize:15,fontWeight:'700',color:'blue'}}>
          RS Total Price
        </Text>
      </View>
    </View>
    <View
    style={{
      borderBottomWidth:0.5,
      borderColor:'#fffff',
      width:'95%',
      alignSelf:'center'
    }}/>
    <View>
      <InputButtons />
    </View>
    </View>
  );

  onClose = () => {
    Animated.timing(this.state.opacity, {
      toValue: 0,
      duration: 350,
      useNativeDriver: true,
    }).start();
    this.bs.current.snapTo(0);
    setTimeout(() => {
      this.setState({ isOpen: false });
    }, 50);
  };

  onOpen = () => {
    this.setState({ isOpen: true });
    this.bs.current.snapTo(2);
    Animated.timing(this.state.opacity, {
      toValue: 0.7,
      duration: 300,
      useNativeDriver: true,
    }).start();
  };

  renderBackDrop = () => (
    <Animated.View
      style={{
        opacity: this.state.opacity,
        backgroundColor: '#000',
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
      }}>
      <TouchableOpacity
        style={{
          width: this.window.width,
          height: this.window.height,
          backgroundColor: 'transparent',
        }}
        activeOpacity={1}
        onPress={this.onClose}
      />
    </Animated.View>
  );

  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity style={styles.wow} onPress={this.onOpen}>
          <Text>Press me </Text>
        </TouchableOpacity>
        {this.state.isOpen && this.renderBackDrop()}
        <BottomSheet
          ref={this.bs}
          snapPoints={[
            '-10%',
            this.window.height * 0.2,
            this.window.height * 0.45,
            this.window.height * 0.6,
          ]}
          initialSnap={0}
          renderHeader={this.renderHeader}
          renderContent={this.renderInner}
          onCloseEnd={this.onClose}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  headerContainer:{
    backgroundColor:'white',
    height:50,
    paddingHorizontal:20,
    borderTopLeftRadius:20,
    borderTopRightRadius:20,
  },
  topHeader:{
  width:'70%',
  alignItems:'center',
  flexDirection:'row',
  justifyContent:'space-between',
  padding:5
},
  container: {
    flex: 1,
    position: 'relative',
  },
  wow: {
    backgroundColor: 'red',
    margin: 50,
    padding: 10,
    width: 100,
  },
});
