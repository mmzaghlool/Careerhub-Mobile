import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Image, Modal, TextInput, ScrollView } from 'react-native';

import Post from './Post';
import WriteCommentModal from './WriteCommentModal';
import CommentsModal from './CommentsModal';

import Style from '../../common/Style'
import Header from '../../common/Header';

export default class Community extends Component {
    constructor(props) {
        super(props);
        this.state = {
            modal: false
        }
    }


    renderModal() {
        const { modal } = this.state;

        if (modal === 'writeComment') {
            return (<WriteCommentModal closeModal={this.closeModal} />);
        } else {
            return (<CommentsModal closeModal={this.closeModal} writeCommentsModal={this.writeCommentsModal} />);
        }
    }

    closeModal = () => this.setState({modal: false});
    openCommentsModal = () => this.setState({ modal: 'comments' });
    writeCommentsModal = () => this.setState({ modal: 'writeComment' });

    render() {
        const { modal } = this.state
        return (
            <View style={[{ backgroundColor: '#795EE3' }, Style.container]}>
                <Header backButton title="Community" />

                {/* Define Modal */}
                <Modal animated animationType='slide' visible={modal !== false} transparent >
                    {this.renderModal()}
                </Modal>

                {/* Write new post */}
                <TouchableOpacity style={[{
                    margin: 7,
                    padding: 10,
                    backgroundColor: 'white',
                    borderRadius: 12,
                    flexDirection: 'row'
                }, Style.elevation]} onPress={() => {
                    this.setState({ modal: 'writeComment' })
                }} >
                    <Image source={require('../../assets/icons/images.jpg')}
                        style={{
                            borderRadius: 30,
                            width: 50,
                            height: 50
                        }}
                    />
                    <View style={{
                        flex: 1,
                        marginLeft: 5,
                        borderColor: 'grey',
                        borderWidth: 0.3,
                        borderRadius: 12,

                    }} >
                        <Text style={{
                            margin: 7,
                            flex: 1,
                            color: 'grey',
                            fontSize: 18
                        }}>
                            Write new Post...
                        </Text>
                    </View>
                </TouchableOpacity>

                <Post openComments={this.openCommentsModal} />

            </View>
        );
    }
}
