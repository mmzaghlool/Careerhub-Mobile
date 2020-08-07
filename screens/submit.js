import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Text,
    StatusBar,
    Dimensions,
    FlatList,
    TextInput,
} from 'react-native';
import firebase from 'react-native-firebase';
import Spinner from '../common/Loading';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import { Rating, SearchBar } from 'react-native-elements';
import Header from '../common/Header';
import {API_LINK} from '../common/Constants';
import Style from '../common/Style'

const { height, width } = Dimensions.get('window')

export default class Courses extends Component {
    constructor() {
        super()
        this.state = {
            spinner: true,
            searchText: '',
        }
    }

    async componentDidMount() {
       
    
    }
 
    render() {
        const { spinner, searchResult, searchText, category } = this.state;
       
            return (
                <View style={[{justifyContent:'center'},Style.container]}>
                      <View
                style={[{
                    marginBottom: 25,
                    backgroundColor: '#ffffff',
                    elevation: 5,
                    borderRadius: 20,
                    padding: 20,
                    marginHorizontal: 5,
                    marginTop: 15,
                    height:'60%',
                    width:'85%',
                    alignSelf:'center',
                    
                },Style.elevation]}>
                <Text style={{ fontWeight: 'bold', fontSize: 20,marginBottom:17 }}>{this.props.navigation.state.params.item.title}</Text>
                <View style={{ flexDirection: 'row', marginBottom:40 }}>
                    <Rating
                        imageSize={25}
                        readonly
                        style={{ marginTop: 3, marginHorizontal: 5 }}
                        startingValue={this.props.navigation.state.params.item.vote_average}
                    />
                    <Text style={{ color: 'gray', fontSize: 12, marginTop: 2, }}>{this.props.navigation.state.params.item.vote_average}</Text>
                </View>
                <Text style={{ fontSize: 16, color: 'gray', marginTop: 5, marginHorizontal: 10 }}>{this.props.navigation.state.params.item.instructor}</Text>
                <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                    <Text style={{ fontSize: 16, color: 'gray', marginTop: 5, marginHorizontal: 10 }}>Language: {this.props.navigation.state.params.item.language}</Text>
                    <Text style={{ fontSize: 16, color: 'gray', marginTop: 5, marginHorizontal: 10 }}>Duration: {this.props.navigation.state.params.item.runtime}</Text>
                </View>
                <Text style={{ fontSize: 18, color: '#000', marginHorizontal: 5, fontWeight: '700',marginTop:35,marginBottom:18 }}>Overview:</Text>
                <Text style={{ fontSize: 18, color: 'gray', marginHorizontal: 12 }}>{this.props.navigation.state.params.item.overview}</Text>
           
           
                <TouchableOpacity onPress={ async() => {
              await  fetch(`${API_LINK}/groups`, {
                            method: "POST",
                            headers: {
                                "Content-Type": "application/json",
                            },
                            body: JSON.stringify({
                               courseID:this.props.navigation.state.params.item.index,
                               uid:firebase.auth().currentUser.uid
                            }),
                        })
                            .then((res) => res.json())
                            .then(async (res) => {
                                    this.props.navigation.navigate('Drawer')
                                })
                            .catch((error) => {
                                console.log(error);
                            });
            }} style={{ marginTop:50, backgroundColor:'gray' , borderRadius:10 ,padding:10,alignSelf:'center',alignContent:'center',paddingHorizontal:40}} >
                <Text style={{color:'white'}}>ENROLL</Text>
            </TouchableOpacity>
            </View>

            
                </View>
            );
        }
    };

const styles = StyleSheet.create({
    basicBackground: {
        backgroundColor: '#ffffff',
        height: '100%',
        width: '100%',
        alignItems: 'center',
    },
    background: {
        backgroundColor: '#ffffff',
        height: '75%',
        width: '100%',
        borderTopStartRadius: 30,
        borderTopEndRadius: 30,
        alignItems: 'center',
        marginTop: height * 0.08,
        paddingTop: height * 0.1,
    },
    header1: {
        color: '#ffffff',
        fontSize: 90,
        fontWeight: 'bold',
        marginTop: height * 0.09,
    },
    header2: {
        color: '#ffffff',
        fontSize: 60,
        fontWeight: 'bold',
        marginTop: height * 0.125,
    },
    text: {
        color: '#000000',
        fontWeight: 'bold',
        fontSize: 30,
        textAlign: 'center',
    },
    linearGradient: {
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 15,
        marginTop: height * 0.04,
        width: width * 0.75,
        height: height * 0.055,
    },
    bottonText: {
        color: '#ffffff',
        fontSize: 20,
        fontWeight: 'bold',
    },
    subtittle: {
        color: 'gray',
        fontSize: 15,
        marginTop: height * 0.15,
    }
});