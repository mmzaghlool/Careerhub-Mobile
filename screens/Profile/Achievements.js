import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    StatusBar,
    Dimensions,
} from 'react-native';


const { height, width } = Dimensions.get('window')

export default class Achievements extends Component {
    render() {
        return (
            <View style={styles.tabView}>
                <StatusBar backgroundColor='#2c233d' barStyle="light-content" />


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
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
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