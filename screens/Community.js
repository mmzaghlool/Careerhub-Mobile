import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Image, Modal, TextInput, ScrollView } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import LinearGradient from 'react-native-linear-gradient'
import Style from '../common/Style'
import Header from '../common/Header';

export default class Community extends Component {
    render() {
        return (
            <View style={[{ backgroundColor: '#795EE3' }, Style.container]}>
                <Header backButton title="Community" />
                <Modal animated animationType='slide' visible={true} transparent >
                    {/* <CommentsModal /> */}
                    <WrightCommentModal />
                </Modal>
                <Post />
                <Post />
            </View>
        );
    }
}

class Post extends Component {


    render() {
        return (
            <View style={[{
                margin: 7,
                padding: 10,
                backgroundColor: 'white',
                borderRadius: 12
            }, Style.elevation]} >
                <ProfileName />
                <Text style={{
                    margin: 7
                }}>
                    I found a lot of explanations to resolve this, but nothing seems to work for me. Maybe I'm missing something here, let me know if you can help !
                </Text>
                <Image style={{
                    marginTop: 7,
                    width: '100%',
                    flexShrink: 1
                }}
                    // resizeMode='c' 
                    source={require('../assets/icons/images.jpg')} />

                <View style={{
                    flexDirection: 'row',
                    marginTop: 10
                }} >
                    <TouchableOpacity style={{
                        padding: 3
                    }}>
                        <MaterialCommunityIcons name='thumb-up-outline' size={30} color='#795EE3' />
                    </TouchableOpacity>
                    <TouchableOpacity style={{
                        padding: 3
                    }}>
                        <MaterialCommunityIcons name='comment-text-multiple-outline' size={30} color='#795EE3' />
                    </TouchableOpacity>
                </View>

            </View>
        );
    }
}

class CommentsModal extends Component {


    render() {
        return (
            <TouchableOpacity style={{
                flex: 1,
                justifyContent: 'center',
                alignContent: 'center',
                backgroundColor: '#000000aa'
            }} >
                <TouchableOpacity
                    activeOpacity={1}
                    style={[{
                        backgroundColor: 'white',
                        width: '90%',
                        height: '90%',
                        alignSelf: 'center',
                        borderRadius: 20,
                        padding: 10
                    }, Style.elevation]} >
                    <ScrollView>
                        
                    <Comment />
                    <Comment />
                    <Comment />
                    </ScrollView>

                </TouchableOpacity>

            </TouchableOpacity>
        )
    }
}

class Comment extends Component {
    render() {
        return (
            <View style={{
                borderBottomColor: 'grey',
                borderBottomWidth: 1
            }} >
                <ProfileName />
                <Text style={{
                    margin: 7
                }}>
                    I found a lot of explanations to resolve this, but nothing seems to work for me. Maybe I'm missing something here, let me know if you can help !
                </Text>
                <Image style={{
                    marginTop: 7,
                    width: '100%',
                    flexShrink: 1
                }}
                    resizeMode='contain' 
                    source={require('../assets/icons/images.jpg')} />

                <View style={{
                    flexDirection: 'row',
                    marginTop: 10,
                    alignItems: 'center'
                }} >
                    <TouchableOpacity style={{
                        padding: 3
                    }}>
                        <MaterialCommunityIcons name='thumb-up' size={30} color='#795EE3' />
                    </TouchableOpacity>
                    <Text >
                        30
                    </Text>
                </View>
            </View>
        );
    }
}

class WrightCommentModal extends Component {


    render() {
        return (
            <View style={{
                flex: 1,
                justifyContent: 'center',
                alignContent: 'center',
                backgroundColor: '#000000aa'
            }} >
                {/* <TouchableOpacity
                    activeOpacity={1}
                    style={[{
                        backgroundColor: 'white',
                        width: '85%',
                        height: '30%',
                        alignSelf: 'center',
                        borderRadius: 20,
                        justifyContent: 'center',
                        alignItems: 'center'
                    }, Style.elevation]} > */}
                    <LinearGradient
                    //     start={{ x: 0, y: 0 }}
                    // end={{ x: 1, y: 0 }}
                        colors={['#ae71f2', '#795EE3', '#5653e2']}
                        // style={{
                        //     width: '100%',
                        //     height: '100%'
                        // }}
                        style={[{
                        backgroundColor: 'white',
                        width: '85%',
                        height: '30%',
                        alignSelf: 'center',
                        borderRadius: 20,
                        justifyContent: 'center',
                        alignItems: 'center'
                    }, Style.elevation]}
                    >
                        <Text style={{
                            color: 'white',
                            margin: 10,
                            fontSize: 25
                        }} >
                            Wright your comment:
                        </Text>
                        <TextInput
                            multiline
                            placeholder="Wright your comment...."
                            style={{
                                flex: 1,
                                width:'90%',
                                backgroundColor: 'white',
                                padding: 10,
                                borderRadius: 15

                            }}

                        />

                        <View style={{
                            flexDirection: 'row',
                            justifyContent: 'space-evenly',
                            margin: 10,
                            alignItems: 'center',
                            width: '100%'
                        }} >
                            <TouchableOpacity style={{
                                backgroundColor: 'white',
                                borderRadius: 20,
                                padding: 10,
                                paddingHorizontal: 20,
                            }} >
                                <Text >
                                    Cancel
                                </Text>
                            </TouchableOpacity>

                            <TouchableOpacity style={{
                                backgroundColor: 'white',
                                borderRadius: 20,
                                padding: 10,
                                paddingHorizontal: 20,
                            }}  >
                                <Text >
                                    Done
                                </Text>
                            </TouchableOpacity>

                        </View>

                    </LinearGradient>


                {/* </TouchableOpacity> */}

            </View>
        )
    }
}

class ProfileName extends Component {

    render() {
        return (
            <View style={{
                flexDirection: 'row',
                justifyContent: 'flex-start',
                alignItems: 'center',
                marginVertical: 7
            }} >
                <Image source={require('../assets/icons/images.jpg')}
                    style={{
                        borderRadius: 30,
                        width: 50,
                        height: 50
                    }}
                />
                <View style={{
                    marginHorizontal: 7
                }} >
                    <Text style={{
                        fontSize: 18,
                        fontWeight: '600'
                    }} >
                        MR. Mostafa Mahmoud
                    </Text>
                    <Text >
                        1 hr
                    </Text>
                </View>
            </View>
        )
    }
}