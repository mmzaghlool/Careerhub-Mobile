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
import TestButton from '../components/testbutton';
import firebase from 'react-native-firebase';
import { Icon } from 'react-native-elements'
import LinearGradient from 'react-native-linear-gradient';
const { height, width } = Dimensions.get('window')


const API = 'https://lit-plateau-32534.herokuapp.com';

export default class Qes extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        }

    }

    componentDidMount() {

    }


    render() {

        return (
            <View style={{ flex: 1 ,alignItems:'center',marginTop:30,justifyContent:'space-between'}}>
                    <TouchableOpacity style={{ flex: .18 ,backgroundColor:'red' ,width:width*.8,borderRadius:30,justifyContent:'center',alignItems:'flex-start'}}>
                        <Text style={{marginLeft:50,fontSize:28,fontFamily:'wds052801'}}>CHAT</Text>



                    </TouchableOpacity>
                    <TouchableOpacity style={{justifyContent:'space-around', flexDirection:'row', flex: .18 ,backgroundColor:'red' ,width:width*.8,borderRadius:30,alignItems:'center' }}>
                        <Text>Hazem</Text>
                        <Icon name='chat' color='black'/>


                    </TouchableOpacity>
                    <TouchableOpacity style={{ flex: .18 ,backgroundColor:'red' ,width:width*.8,borderRadius:30,justifyContent:'center',alignItems:'center'}}>
                        <Text>Hazem</Text>



                    </TouchableOpacity>
                    <TouchableOpacity style={{ flex: .35 ,backgroundColor:'red' ,width:width*.8,borderRadius:30,justifyContent:'center',alignItems:'center'}}>
                        <Text>Hazem</Text>



                    </TouchableOpacity>

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

