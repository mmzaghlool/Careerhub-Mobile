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
import { element } from 'prop-types';
const list = [
    { color: 20, size: 'XXL' },
    { color: 2, size: 'XL' },
    { color: 100, size: 'M' }
]
const { width } = Dimensions.get('window');
const id = firebase.auth().currentUser.uid
export default class HomeScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            y: [
                40, 33, 4
            ]
        }
    }

    async componentDidMount() {
        const x = await this.props.navigation.state.params.roomkey;
        const y = await this.props.navigation.state.params.rec;

        console.log('sdsdsddsdsdsds',y);
        firebase.database().ref(`/messages/${x}`).on('value', snap => {
            let x = [];
            const data = snap.val();



            for (const key in data) {
                const element = data[key];
                x.push({ ...element, key })
                this.setState({ x })


                let y = this.state.x.sort((a, b) => (a.key > b.key) ? 1 : -1)
                this.setState({ y })
                console.log('ssdds', this.state.y);
            }
        }
        )


    }


    renderItems = ({ item, index }) => (


        <View style={{ alignItems: firebase.auth().currentUser.uid == item.senderUid ? 'flex-end' : 'flex-start' }}>

            <Text style={{ marginTop: 8, fontSize: 17, fontWeight: 'bold', marginBottom: 20, marginLeft: 9 }}>{item.message}</Text>




        </View>

    )




    render() {
        return (

            <View style={styles.container}>
                <FlatList
                    data={this.state.y}
                    keyExtractor={(item, index) => index.toString()}
                    ItemSeparatorComponent={this.FlatListItemSeparator}
                    disableVirtualization={true}
                    renderItem={this.renderItems}
                />

                <View style={{ flexDirection: 'row' }}>
                    <TextInput
                        style={styles.inputText}
                        underlineColorAndroid='gray'
                        placeholder="Enter Email"
                        placeholderTextColor='gray'
                        value={this.state.message}
                        onChangeText={(message) => this.setState({ message })}
                    />
                    <TouchableOpacity style={{ backgroundColor: 'red' }} onPress={() => {
                        console.log('one',firebase.auth().currentUser.uid);
                        console.log('two',this.props.navigation.state.params.rec);
                        fetch(`${API_LINK}/chat/sendMessage`, {
                            method: "POST",
                            headers: {
                                "Content-Type": "application/json",
                            },
                            body: JSON.stringify({
                                senderUid: firebase.auth().currentUser.uid,
                                receiverUid: this.props.navigation.state.params.rec,
                                message:this.state.message,
                                timestamp: moment().unix()
                            }),
                        })
                            .then((res) => res.json())
                            .then(async (res) => {
                               console.log('red',res);
                            })
                            .catch((error) => {
                              
                            });
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
