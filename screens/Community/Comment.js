
import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import { ProfileName } from './ProfileName';


export default class Comment extends Component {
    render() {
        return (
            <View style={{
                borderBottomColor: 'grey',
                borderBottomWidth: 1
            }} >
                <ProfileName name={"Mostafa Mahmoud"} time={"2hrs ago"} />
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
                    source={require('../../assets/icons/images.jpg')} />

                <View style={{
                    flexDirection: 'row',
                    marginTop: 10,
                    alignItems: 'center'
                }} >
                    <TouchableOpacity style={{
                        padding: 3
                    }}>
                        <MaterialCommunityIcons name='chevron-up' size={40} color='#795EE3' />
                    </TouchableOpacity>
                    <Text >
                        30
                    </Text>
                    <TouchableOpacity style={{
                        padding: 3
                    }}>
                        <MaterialCommunityIcons name='chevron-down' size={40} color='#795EE3' />
                    </TouchableOpacity>

                </View>
            </View>
        );
    }
}
