import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Text,
    StatusBar,
    Dimensions,
    FlatList,
} from 'react-native';

const { height, width } = Dimensions.get('window')

export default class Posts extends Component {
    constructor(props) {
        super(props);
        this.state = {
            FlatListItems: [
                { key: '1', value: 'HTML' },
                { key: '2', value: 'CSS3' },
                { key: '3', value: 'JavaScript' },
                { key: '4', value: 'Angular' },
                { key: '5', value: 'React' },
                { key: '6', value: 'VUE' },
            ],
        };
    }

    render() {
        return (
            <View style={styles.tabView}>
                <StatusBar backgroundColor='#2c233d' barStyle="light-content" />
                <FlatList
                    showsHorizontalScrollIndicator={false}
                    data={this.state.FlatListItems}
                    renderItem={({ item }) => (
                        <View style={styles.post}>
                            <Text style={styles.item}>
                                {item.value}
                            </Text>
                        </View>
                    )}
                />
            </View>
        );
    };
}

const styles = StyleSheet.create({
    tabView: {
        backgroundColor: '#382d4b',
        height: '100%',
        width: '100%',
        paddingTop: height * 0.05,
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        justifyContent: 'center',
        alignItems: 'center',
    },
    post: {
        backgroundColor: '#ffffff',
        height: height * 0.15,
        width: width * 0.9,
        padding: '5%',
        marginBottom: height * 0.02,
        borderRadius: 30,
    },
    item: {
        color: '#000000',
        paddingVertical: 10,
        alignContent: 'center',
        fontSize: 18,
        height: 44,
        fontWeight: 'bold',
    },
});