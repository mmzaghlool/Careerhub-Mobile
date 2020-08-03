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
import Style from '../../common/Style'

import Header from '../../common/Header';


const { width } = Dimensions.get('window');
export default class HomeScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          done:0
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


        <View style={{ alignItems: firebase.auth().currentUser.uid == item.senderUid ? 'flex-end' : 'flex-start' ,padding:10}}>

            <Text style={{ marginTop: 8, fontSize: 17, fontWeight: 'bold', marginBottom: 20, marginLeft: 9 }}>{item.message}</Text>




        </View>

    )




    render() {
        const {done} =this.state;
        
        return (

            <View style={[styles.container,Style.container]}>
                <Header  backButton onBackPress={() => this.props.navigation.goBack()} />
                <FlatList
                    data={this.state.y}
                    keyExtractor={(item, index) => index.toString()}
                    ItemSeparatorComponent={this.FlatListItemSeparator}
                    disableVirtualization={true}
                    extraData={this.state}
                    renderItem={this.renderItems}
                    ref={ref => this.list = ref}
                    onContentSizeChange={() => {
                        if (done == 0) this.setState({ done: 1 })
                        else if (done == 1) { this.list.scrollToEnd(); }
                    }}
                />

                <View style={{ flexDirection: 'row' }}>
                    <TextInput
                        style={{width:'90%'}}
                        placeholder="Enter message"
                        placeholderTextColor='gray'
                        value={this.state.message}
                        onChangeText={(message) => this.setState({ message })}
                    />
                    <TouchableOpacity  style={{width:'10%',justifyContent:'center'}} onPress={() => {
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
                            this.setState({message:''})
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


{/* <FlatList
                    data={messagesValues}
                    extraData={this.state}
                    style={{ padding: 5 }}
                    renderItem={({ item, index }) => <RenderMessage item={item} timestamp={messagesKeys[index]} user={user} copy={() => {this.refs.toast.show(`${strings.copy}`, DURATION.LENGTH_LONG)}}
                        receiverAvatar={avatar} index={index} openImage={(uri) => this.setState({ imageSrc: { uri }, modal: true })} />}
                    keyExtractor={(item, index) => `${index}`}
                    ref={ref => this.list = ref}
                    // initialScrollIndex={messagesValues.length - 1}
                    onContentSizeChange={() => {
                        console.log("scroll", done)
                        // messages loaded
                        if (done == 0) this.setState({ done: 1 })
                        // scroll chat to end initially
                        else if (done == 1) { this.list.scrollToEnd(); this.setState({ done: 2, moreLoading: false }) }
                        // loading more messages done
                        else if (done == 2 && moreLoading) {
                            let index;
                            if (messagesKeys.length > 19) {
                                index = 19;

                                console.log('1 index', index)
                            } else if (messagesKeys.length > 1) {
                                index = messagesKeys.length - 1
                                console.log('2 index', index)
                            } else {
                                index = 0
                                console.log('3 index', index)
                            }
                            if(index !== 0)
                                this.list.scrollToIndex({ index, animated: false })
                            this.setState({ moreLoading: false })
                        }
                        // New message received
                        else if (done == 2 && newMessage) {
                            console.log('3 end')

                            this.list.scrollToEnd();
                            this.setState({ newMessage: false })
                        }

                    }}
                    onScrollToIndexFailed={info => {
                        const wait = new Promise(resolve => setTimeout(resolve, 500));
                        wait.then(() => {
                            this.list.scrollToIndex({ index: messagesKeys.length > 19 ? 19 : messagesKeys.length - 1, animated: false });
                        });
                    }}
                    onScroll={
                        (event) =>
                            this.onContentOffsetChanged(event.nativeEvent.contentOffset.y)
                    }
                    ListHeaderComponent={() => (
                        <View style={{ alignSelf: 'center', marginTop: 10 }}>
                            {moreLoading &&
                                <ActivityIndicator
                                    size={'small'}
                                />
                            }
                        </View>
                    )}
                /> */}