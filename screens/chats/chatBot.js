import React from 'react';
import {
    View,
    FlatList,
    Text,
    StyleSheet,
    Dimensions,
    TouchableOpacity,
    Image,
    TextInput
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


const { width } = Dimensions.get('window');
const id = firebase.auth().currentUser.uid
export default class HomeScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            answer:
            {
                hazem:'hazem'
            }
        }
    }

    async componentDidMount() {





    }


    renderItems = ({ item, index }) => (


        <View style={{  }}>

            <Text style={{ marginTop: 8, fontSize: 12, fontWeight: 'bold'}}>{item.answer}</Text>




        </View>

    )




    render() {
        return (

            <View style={styles.container}>
                <Header backButton />
                <FlatList
                    data={this.state.answer}
                    keyExtractor={(item, index) => index.toString()}
                    ItemSeparatorComponent={this.FlatListItemSeparator}
                    disableVirtualization={true}
                    renderItem={this.renderItems}
                />

                <View style={{ flexDirection: 'row' }}>
                    <TextInput
                        style={{ width: '90%' }}
                        placeholder="Enter message"
                        placeholderTextColor='gray'
                        value={this.state.message}
                        onChangeText={(message) => this.setState({ message })}
                    />
                    <TouchableOpacity style={{ width: '10%', justifyContent: 'center' }} onPress={() => {
                        let ans =[]
                         fetch(`${API_LINK}/chatbot/${this.state.message}`)
                            .then(res => res.json())
                            .then(async res => {
                                console.log('resresres', res);
                                if (res.success) {
                                    let x = Object.values(res)
                                  this.setState({answer:x} , () => console.log('haha',x))
                                }

                            })
                    }}>
                        <Text>SEND</Text>
                    </TouchableOpacity>
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
