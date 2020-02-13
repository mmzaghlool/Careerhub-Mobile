import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Image, Modal, TextInput, ScrollView } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

import Comment from './Comment'
import Style from '../../common/Style'


export default class CommentsModal extends Component {


    render() {
        return (
            <TouchableOpacity style={{
                flex: 1,
                justifyContent: 'center',
                alignContent: 'center',
                backgroundColor: '#000000aa'
            }} onPress={() => this.props.closeModal()} >
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
                    
                    {/* Header */}
                    <View style={{ flexDirection: 'row', borderBottomWidth: 0.3, borderColor: 'grey',
                        paddingBottom: 5, marginBottom: 5, alignItems: 'center', justifyContent: 'space-between' }} >
                        <Icon icon={'arrow-left'} onPress={() => this.props.closeModal()} />
                        <Text style={{ fontSize: 25 }} >Comments</Text>
                        <Icon icon={'plus'} onPress={() => this.props.writeCommentsModal()} />
                    </View>

                    {/* Comments */}
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

const Icon = ({ icon, onPress }) => {
    return (
        <View style={{ flexDirection: 'row' }}>
            <TouchableOpacity style={{ padding: 3 }} onPress={onPress} >
                <MaterialCommunityIcons name={icon} size={30} color='#795EE3' />
            </TouchableOpacity>
        </View>
    )
}