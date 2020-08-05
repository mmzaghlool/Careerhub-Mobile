import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Dimensions,
  
} from 'react-native';

import { SocialIcon } from 'react-native-elements';

const {height, width} = Dimensions.get('window')

export default class Footer1 extends Component {

    render() {
        return (
            <View>              
              <Text style={styles.or}>
              ────── OR ──────              </Text>

                <View style={styles.social}>
                    <View>
                    <SocialIcon type='facebook'/> 
                    </View>
                    <View>
                    <SocialIcon type= 'twitter'/>
                    </View>
                </View>
            </View>
        );
    };
}
const styles = StyleSheet.create({
  basicBackground:{
    backgroundColor: '#382d4b',
    height: '100%',
    width: '100%',
  },
 background:{
  backgroundColor: '#ffffff',
  height: '80%',
  width: '90%',
  borderTopRightRadius: 30,
  borderBottomRightRadius: 30,
  marginTop: height * 0.01,
  paddingTop: height * 0.05,
  paddingLeft: width * 0.05,
  // backgroundColor: '#ffffff',
  // height: '20%',
  // width: '90%',
  // // borderTopRightRadius: 30,
  // borderBottomRightRadius: 30,
  // // marginTop: height * 0,
  // paddingTop: height * 0,
  // paddingLeft: width * 0.05,
  },
   header1:{
    color: '#ffffff',
    fontSize: 60,
    fontWeight:'bold',
    marginTop: height * 0.025,
    marginLeft: width * 0.06,
  },
  header2:{
    color: '#ffffff',
    fontSize: 40,
    fontWeight:'bold',
    marginTop: height * 0.05,
    marginLeft: width * 0.005,
  },
  text:{
    color: '#000000',
    fontSize: 30,
    fontWeight:'bold',
    textAlign: 'left',
    marginLeft: width * 0.05,
  },
  text2:{
    color: '#000000',
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: height * 0.02,
    marginLeft: width * 0.05,
  },
  inputText:{
    color: '#000000',
    fontSize: 17,
    textAlign: 'left',
    fontWeight: 'normal',
    width: width * 0.7,  
    height: height * 0.05,
    marginHorizontal: width * 0.05,
  },
  linearGradient:{
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: width * 0.025,
    marginTop: height * 0.03,
    borderRadius: 15,
    width: width * 0.75,
    height: height * 0.055,
  },
  bottonText:{
    color: '#ffffff',
    fontSize: 20,
    fontWeight:'bold',
  },
  or:{
    color: 'gray',
    fontSize: 20,
    textAlign: 'center',
    marginHorizontal: width * 0.025,
    marginTop:  height * 0.025,
    width: width * 0.75,
  },
  social:{
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginTop:  height * 0.015,
    marginHorizontal: width * 0.165,
    width: width * 0.5,
  },
});