import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Image, FlatList, TextInput, ScrollView } from 'react-native';
import LinearGradient from 'react-native-linear-gradient'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import ImagePicker from 'react-native-image-picker';

import Style from '../../common/Style'

// TODO: customize to comments and posts 
export default class WriteCommentModal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            images: [],
        }
    }

    componentDidMount() {
    }


    selectImage() {
        // try {
        let { images } = this.state;

        // the options for picking the image  
        const options = {
            quality: 0.5,
            // maxWidth: 500,
            // maxHeight: 500,
            storageOptions: {
                skipBackup: true
            }
        };
        // get the image from gallery
        ImagePicker.launchImageLibrary(options, (response) => {

            let imagePath;

            if (Platform.OS === "android") imagePath = response.path;
            else imagePath = response.uri;

            console.log('response', response);
            if (!response.didCancel){
                images.push({
                    path: imagePath,
                    data: response.data,
                    type: response.type
                })
                this.setState({ images });
            }
            // this.uploadImage(response.path);
        });
        // } catch (e) {
        //     console.log(e);
        // }
    }

    async uploadImage(uri) {
        try {
            if (uri) {
                // upload the image to the storage under folder called Uploads with the timestamp of upload
                const imageRef = firebase.storage().ref(`Uploads/${Date.now()}.jpg`)
                await imageRef.putFile(uri, { contentType: 'application/octet-stream' })

                // get the download url of the image 
                let url = await imageRef.getDownloadURL()

                // send the url to the other person at the chat
                this.sendImage(url);
            }
        } catch (e) {
            console.log(e);
        }
    }


    submit() {

        this.props.closeModal()
    }

    renderAddedImage = ({ item }) => {
        console.log('item', item);
        
        return (
            <Image
                // source={{uri: `data:${item.type};base64,${item.data}`}}
                source={{uri: `${item.path}`}}
                style={{
                    width: 50,
                    height: '100%',
                    marginRight: 5
                }}
                resizeMode='contain'
            />
        )
    }

    render() {
        const { images, imagesData } = this.state;
        console.log(images);
        

        return (
            <View style={{
                flex: 1,
                justifyContent: 'center',
                alignContent: 'center',
                backgroundColor: '#000000aa'
            }} >
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
                        height: '40%',
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

                    {/* Text */}
                    <TextInput
                        multiline
                        placeholder="Wright your comment...."
                        style={{
                            flex: 3,
                            width: '90%',
                            backgroundColor: 'white',
                            padding: 10,
                            borderRadius: 15,
                            fontSize: 18
                        }}
                    />

                    <ScrollView
                        style={{
                            flex: 1, width: '90%', backgroundColor: 'white', padding: 10,
                            borderRadius: 15, marginTop: 10, paddingRight: 50
                        }}
                        horizontal
                        showsHorizontalScrollIndicator={false}
                    >

                        <FlatList
                            data={images}
                            extraData={this.state}
                            renderItem={this.renderAddedImage}
                            keyExtractor={(item, index) => `${index}`}
                            horizontal
                        />

                        {/* Add new Image */}
                        <TouchableOpacity
                            style={{
                                borderColor: 'grey',
                                borderWidth: 0.3,
                                alignItems: 'center',
                                justifyContent: 'center',
                                width: 50,
                                height: '100%',
                                marginRight: 70
                            }}
                            onPress={() => this.selectImage()}
                        >
                            <MaterialCommunityIcons name='plus' size={30} color='grey' />
                        </TouchableOpacity>

                    </ScrollView>

                    {/* Actions */}
                    <View style={{
                        flexDirection: 'row',
                        justifyContent: 'space-evenly',
                        margin: 10,
                        alignItems: 'center',
                        width: '100%'
                    }} >
                        <Button text={"Cancel"} onPress={() => this.props.closeModal()} />
                        <Button text={"Done"} onPress={() => this.submit()} />
                    </View>

                </LinearGradient>
            </View>
        )
    }
}

const Button = ({ text, onPress }) => {
    return (
        <TouchableOpacity style={{
            backgroundColor: 'white',
            borderRadius: 20,
            padding: 10,
            paddingHorizontal: 20,
        }} onPress={onPress} >
            <Text >
                {text}
            </Text>
        </TouchableOpacity>

    )
}