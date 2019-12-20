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

export default class Skills extends Component {
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
                    data={this.state.FlatListItems}
                    renderItem={({ item }) => (
                        <View>
                            <View style={{ flexDirection: 'row' }}>
                                <Text style={styles.verticalLine}> | </Text>
                                <Text style={styles.item}>
                                    {item.value}
                                </Text>
                            </View>
                            <View style={{
                                height: height * 0.001,
                                width: '85%',
                                backgroundColor: '#bbc0c4',
                                marginLeft: width * 0.07,
                                marginRight: width * 0.07,
                            }} />
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
        paddingTop: height * 0.025,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
    },
    verticalLine: {
        color: '#bbc0c4',
        paddingVertical: 10,
        fontSize: 18,
        height: 44,
        marginLeft: width * 0.06,
    },
    item: {
        color: '#ffffff',
        paddingVertical: 10,
        fontSize: 18,
        height: 44,
        fontWeight: 'bold',
    },
});