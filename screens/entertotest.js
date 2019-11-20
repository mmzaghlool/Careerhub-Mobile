import React from 'react';
import {
    StyleSheet,
    ScrollView,
    View,
    Text,
    Image,
    Dimensions
  } from 'react-native';
  
  export default class EnterToTest extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
       current:0
      }
    }
   
    render() {
      return (
        <View style={{ }}>
          <View style={{padding:0 , marginTop:38 , flexDirection:'column',flex:1 }}>
                  <Text style={{textAlign:'center', fontWeight: 'bold',fontSize:20}}>We can suggest a tips and a suitable</Text>
                  <Text style={{textAlign:'center', fontWeight: 'bold',fontSize:20}}>career for you based on some</Text>
                  <Text style={{textAlign:'center', fontWeight: 'bold',fontSize:20}}>questions which you are going to</Text>
                  <Text style={{textAlign:'center', fontWeight: 'bold',fontSize:20}}>answer it</Text>
                  <Image
            style={{marginLeft:66,width:'60%',height:'50%',alignItems:'stretch',justifyContent:'center',marginTop:65}}
            source={require('./icon.png')}
          />
           
          </View>
          
        </View>
      );
  
    }
  }
  
  
  
