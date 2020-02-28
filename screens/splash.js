import React from 'react';
import {
    View,
    Text,
    FlatList,
    AsyncStorage,
    Dimensions,
    TouchableOpacity,
    StyleSheet
} from 'react-native';

const { height, width } = Dimensions.get('window')

import OneSignal from 'react-native-onesignal';

const API = 'https://lit-plateau-32534.herokuapp.com';

export default class Group extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        }
       
    }

    componentDidMount() {
        OneSignal.init("35f5da96-5e74-41f7-a388-388e44198b4c");// set kOSSettingsKeyAutoPrompt to false prompting manually on iOS
        
        OneSignal.addEventListener('received', this.onReceived);
        OneSignal.addEventListener('opened', this.onOpened);
        OneSignal.addEventListener('ids', this.onIds);
        OneSignal.configure();
    // this.props.navigation.navigate('FirstScreen')
    }
    componentWillUnmount() {
        OneSignal.removeEventListener('received', this.onReceived);
        OneSignal.removeEventListener('opened', this.onOpened);
        OneSignal.removeEventListener('ids', this.onIds);
      }
    
      onReceived(notification) {
        console.log("Notification received: ", notification);
      }
    
      onOpened(openResult) {
        console.log('Message: ', openResult.notification.payload.body);
        console.log('Data: ', openResult.notification.payload.additionalData);
        console.log('isActive: ', openResult.notification.isAppInFocus);
        console.log('openResult: ', openResult);
      }
    
      onIds(device) {
        console.log('Device info: ', device);
      }

   
     
    render() {

        return (
            <View style={{ flex: 1,backgroundColor:'white' }}>
             
            </View>

        )



    }
}
const styles = StyleSheet.create({

    dynamicScreen: {
        backgroundColor: 'white',
        marginTop: 10,
        height: '80%',
        borderRadius: 18,
        flex: .95

    },
    linearGradient: {

        paddingLeft: 15,
        paddingRight: 15,
        borderRadius: 5,
        height: '100%'
    },
    linearGradient2: {

        paddingLeft: 15,
        paddingRight: 15,
        borderRadius: 15,
        height: 40

    }

});