import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import { ProfileName } from './ProfileName';

import Style from '../../common/Style';

export default class Post extends Component {

    render() {
        return (
            <View style={[{
                margin: 7,
                padding: 10,
                backgroundColor: 'white',
                borderRadius: 12
            }, Style.elevation]} >

                <ProfileName name={"Mostafa Mahmoud"} time={"2hrs ago"} />
                <Text style={{ margin: 7 }}>
                    I found a lot of explanations to resolve this, but nothing seems to work for me. Maybe I'm missing something here, let me know if you can help !
                </Text>

                <Image
                    style={{ marginTop: 7, width: '100%', flexShrink: 1 }}
                    source={require('../../assets/icons/images.jpg')}
                />

                {/* footer icons */}
                <View style={{ flexDirection: 'row', marginTop: 10 }} >
                    <Icon icon={'thumb-up-outline'} onPress={() => { }} num={30} />
                    <Icon icon={'comment-text-multiple-outline'} onPress={() => this.props.openComments()} num={50} />
                </View>
            </View>
        );
    }
}

const Icon = ({ icon, onPress, num }) => {
    return (
        <View style={{ flexDirection: 'row' }}>
            <TouchableOpacity style={{ padding: 3 }} onPress={onPress} >
                <MaterialCommunityIcons name={icon} size={30} color='#795EE3' />
            </TouchableOpacity>

            <Text style={{ fontSize: 20, textAlignVertical: 'center', margin: 5 }} >
                {num}
            </Text>
        </View>
    )
}