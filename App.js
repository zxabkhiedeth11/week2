import React, {Component} from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import logo from './assets/snack-icon.png';

class App extends Component{
  render(){
return( 
  <View style={style.container}>
  <View style ={style.container1}>
<Text style ={style.textDesign}> "Hello World!"</Text>
<Image source={logo} style={style.imgDesign} />
</View>
</View>
)
  }
}


const style = StyleSheet.create({
imgDesign:{
  width: 50,
  height: 50,
},

container: {
 flex: 1,
backgroundColor: "#DFFF00",
alignItems: 'center',
},

container1:{
  backgroundColor: "#40E0D0"
},

  textDesign: {
   fontSize: 45,
    color:"#FFF",
    fontWeight: 'bold',

  }

});


export default App;