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
        }
    }

    async componentDidMount() {
        let { searchText } = this.state;
        await  fetch(`${API_LINK}/rs/${firebase.auth().currentUser.uid}`)
        .then(res => res.json())
        .then(async res => {
            console.log('hello222', res);
            if (res.success) {
                this.setState({searchResult:res.result})
            }

        })
        // const items = await this.props.navigation.state.params.item;
        // const category = await this.props.navigation.state.params.category;
        // let data = items.result
        // this.setState({ spinner: false, data, searchText, category }, () => this.search(searchText))
        // console.log('componentDidMount data', data);
       

    }

    renderCategory(item) {

        return (
            <TouchableOpacity
            onPress={ () => this.props.navigation.navigate('Submit',{item})}
                style={[{
                    marginBottom: 25,
                    backgroundColor: '#ffffff',
                    elevation: 5,
                    borderRadius: 20,
                    padding: 20,
                    marginHorizontal: 5,
                    marginTop: 15
                },Style.elevation]}>
                <Text style={{ fontWeight: 'bold', fontSize: 16, }}>{item.title}</Text>
                <View style={{ flexDirection: 'row', }}>
                    <Rating
                        imageSize={15}
                        readonly
                        style={{ marginTop: 3, marginHorizontal: 5 }}
                        startingValue={item.vote_average}
                    />
                    <Text style={{ color: 'gray', fontSize: 12, marginTop: 2, }}>{item.vote_average}</Text>
                </View>
                <Text style={{ fontSize: 12, color: 'gray', marginTop: 5, marginHorizontal: 10 }}>{item.instructor}</Text>
                <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                    <Text style={{ fontSize: 12, color: 'gray', marginTop: 5, marginHorizontal: 10 }}>Language: {item.language}</Text>
                </View>
                <Text style={{ fontSize: 14, color: '#000', marginHorizontal: 5, marginTop: 7, fontWeight: '700' }}>Overview:</Text>
                <Text style={{ fontSize: 14, color: 'gray', marginHorizontal: 12 }}>{item.overview}</Text>
            </TouchableOpacity>
        );
    }
   
    render() {
        const { spinner, searchResult, searchText, category } = this.state;
       
            return (
                <View style={Style.container}>
                    <ScrollView>
                        <Header backButton title={category} onBackPress={() => this.props.navigation.goBack()} />
                        <View style={{ padding: 20 }}>
                            <StatusBar backgroundColor='#2c233d' barStyle="light-content" />
                            <FlatList
                                data={searchResult}
                                extraData={this.state}
                                keyExtractor={this._keyExtractor}
                                renderItem={({ item }) => this.renderCategory(item)}
                            />
                        </View>
                    </ScrollView>
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