import React from 'react';
import {
    View,
    FlatList,
    Text,
    StyleSheet,
    Dimensions,
    TouchableOpacity,
    Image,
    TextInput,
    ScrollView
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Progress from 'react-native-progress/Circle';
import LinearGradient from 'react-native-linear-gradient';
import firebase from 'react-native-firebase';
import { API_LINK } from '../../common/Constants';
import { set, forIn } from 'lodash';
import moment from 'moment';
import { element, object } from 'prop-types';

import Header from '../../common/Header';

import Style from '../../common/Style'

const { width } = Dimensions.get('window');
export default class HomeScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            done: 0,
          
        }
    }

    render() {
        return (

            <View style={[{},styles.container, Style.container]}>
                <View style={{flex:1}}>
                <Header backButton title={'Chat-Bot'} onBackPress={() => this.props.navigation.goBack()} />
                {this.state.answer && 
                <ScrollView style={{padding:20,}}>
                    <View style={{marginBottom:15,  alignItems: 'center', alignSelf: 'flex-end', backgroundColor:'#e6e6e6',padding:13,borderRadius:20,alignContent:'center'}}>
                    <Text style={{  fontSize: 13, fontWeight: 'bold',textAlign:'right' }}>{this.state.question}?</Text>
                    </View>
                    <View style={{alignItems: 'center', alignSelf: 'flex-start', backgroundColor:'#b7a8f0',padding:13,borderRadius:20 ,alignItems:'center',marginBottom:100}}>
                    <Text style={{  fontSize: 13, fontWeight: 'bold' }}>Answer: {this.state.answer}</Text>
                    <Text style={{  fontSize: 13, fontWeight: 'bold' }}>Link: {this.state.shareLink}</Text>
                    <Text style={{  fontSize: 13, fontWeight: 'bold' }}>Vote: {this.state.vote}</Text>
                    </View>

                </ScrollView>
}
                <View style={{ flexDirection: 'row',position: 'absolute', bottom: 0,backgroundColor:'#e6e6e6'}}>
                    <TextInput
                        style={{ width: '90%' }}
                        placeholder="Enter message"
                        placeholderTextColor='gray'
                        value={this.state.message}
                        onChangeText={(message) => this.setState({ message })}

                    />
                    <TouchableOpacity style={{ width: '10%', justifyContent: 'center' }} onPress={() => {
                        fetch(`${API_LINK}/chatbot/${this.state.message}`)
                            .then(res => res.json())
                            .then(async res => {
                                console.log('resresres', res.data);
                                if (res.success) {
                                    this.setState({ answer: res.data.answer , vote:res.data.vote , question:res.data.question ,shareLink:res.data.shareLink })
                                }

                            })
                            this.setState({message:''})
                    }}>
                        <Text>SEND</Text>
                    </TouchableOpacity>
                </View>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    headerText1: {
        fontSize: 24,
        color: '#37324D',
        marginBottom: 2,
    },
    headerText2: {
        fontSize: 20,
        color: '#37324D',
    },
    textContainer: {
        padding: 12,
    },
    footerContainer: {
        backgroundColor: '#37324D',
        borderTopLeftRadius: 35,
        borderTopRightRadius: 35,
        width: '100%',
        height: '17%',
    },
    listContainer: {
        flex: 1,
    },
    footerLine: {
        color: 'white',
        fontSize: 25,
        textAlign: 'center',
        marginBottom: 5,
    },
    footerIconText: {
        fontSize: 13,
        color: 'white',
        textAlign: 'center',
        marginTop: 3,
    },
    iconContainer: {
        width: width * 0.15,
        height: width * 0.15,
        backgroundColor: 'white',
        borderRadius: width * 0.075,
        justifyContent: 'center',
        alignItems: 'center',
    },
    // bigIcon: {
    //   width: '30%',
    //   height: '30%',

    //   borderRadius: 5,
    // },
    listIcons: {
        fontSize: 25,
        color: 'white',
    },
    item: {
        width: '95%',
        alignSelf: 'center',
        marginBottom: 10,
    },
    gradient: {
        width: '100%',
        // height: '100%',
        padding: 25,
        borderRadius: 25,
    },
    styleText: {
        fontSize: 15,
    },
});
