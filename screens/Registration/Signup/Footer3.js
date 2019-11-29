import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Dimensions
} from 'react-native';


const {height, width} = Dimensions.get('window')

export default class Footer3 extends Component {
  render() {
    return (
        <View>
            <View style={{flexDirection: 'column', alignItems: 'center',}}>
                <Text
                    style={styles.subtittle1}>
                    By signing up you indicate that you have read and
                </Text>
                <View style={{flexDirection: 'row'}}>
                    <Text
                        style={styles.subtittle2}>
                        agree to patch
                    </Text>
                    <Text style={styles.subtittle3}>
                        Terms of Service
                    </Text>
                </View>       
            </View>         
        </View>
    );
  };
}
  
const styles = StyleSheet.create({
    subtittle1:{
        color: 'black',
        fontSize: 12,
        marginTop: height * 0.05,
        marginRight: width * 0.05,
    },
    subtittle2:{
        color: 'black',
        fontSize: 12,
    },
    subtittle3:{
        color: 'black',
        fontSize: 12,
        marginLeft: width * 0.01,
        textDecorationLine: 'underline',
    }
});
