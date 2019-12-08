import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Text,
    StatusBar,
    Dimensions,
    FlatList,
} from 'react-native';

import { SocialIcon } from 'react-native-elements';

const { height, width } = Dimensions.get('window')

export default class SociaMedia extends Component {
    constructor(props) {
        super(props);
        this.state = {
            FlatListItems: [
                { key: '1', value: 'facebook' },
                { key: '2', value: 'instagram' },
                { key: '3', value: 'twitter' },
                { key: '4', value: 'behance' },
                { key: '5', value: 'github' },
            ],
        };
    }

    render() {
        return (
            <View style={styles.tabView}>
                <StatusBar backgroundColor='#2c233d' barStyle="light-content" />
                <View style={{ flexDirection: 'column' }}>
                </View>
                <View style={styles.social}>
                    <View style={{ marginBottom: height * 0.003 }}>
                        <SocialIcon
                            type='facebook-square'
                            style={{ backgroundColor: '#382d4b', width: 35, height: 35 }}
                            iconColor='#ffffff'
                            iconSize={35}
                        />
                    </View>
                    <View style={{ marginBottom: height * 0.003 }}>
                        <SocialIcon type='instagram'
                            style={{ backgroundColor: '#382d4b', width: 35, height: 35 }}
                            iconColor='#ffffff'
                            iconSize={35}
                        />
                    </View>
                    <View style={{ marginBottom: height * 0.003 }}>
                        <SocialIcon type='twitter'
                            style={{ backgroundColor: '#382d4b', width: 35, height: 35 }}
                            iconColor='#ffffff'
                            iconSize={35}
                        />
                    </View>
                    <View style={{ marginBottom: height * 0.003 }}>
                        <SocialIcon type='behance'
                            style={{ backgroundColor: '#ffffff', width: 35, height: 35 }}
                            iconColor='#382d4b'
                            iconSize={25}
                        />
                    </View>
                    <View style={{ marginBottom: height * 0.003 }}>
                        <SocialIcon type='github'
                            style={{ backgroundColor: '#382d4b', width: 35, height: 35 }}
                            iconColor='#ffffff'
                            iconSize={40}
                        />
                    </View>
                </View>
                <FlatList
                    data={this.state.FlatListItems}
                    renderItem={({ item }) => (
                        <View>
                            <View>
                                <Text style={styles.item}>
                                    {item.value}
                                </Text>
                                <View style={{
                                    height: height * 0.001,
                                    width: '90%',
                                    backgroundColor: '#bbc0c4',
                                    marginLeft: width * 0.02,
                                }} />
                            </View>
                        </View>
                    )}
                />
            </View>
        );
    };
}

const styles = StyleSheet.create({
    tabView: {
        flexDirection: 'row',
        backgroundColor: '#382d4b',
        height: '100%',
        width: '100%',
        paddingTop: height * 0.03,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
    },
    item: {
        color: '#ffffff',
        paddingVertical: 10,
        fontSize: 18,
        height: 50,
        fontWeight: 'bold',
        marginLeft: width * 0.02,
    },
    social: {
        flexDirection: 'column',
        marginLeft: width * 0.04,
    },
});