import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Text,
    StatusBar,
    Dimensions,
    FlatList,
} from 'react-native';
import Spinner from '../../common/Loading';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const { height, width } = Dimensions.get('window')

export default class Skills extends Component {
    constructor(props) {
        super(props);
        this.state = {
            spinner: true
        };
    }

    async componentDidMount() {
        const { skills } = this.props;
        console.log('-------------------------skills------------------------------');
        console.log('skills', skills);
        let FlatListItems = Object.values(skills)
        this.setState({ skills, FlatListItems, spinner: false })
        console.log('FlatListItems', FlatListItems);
    }

    render() {
        const { FlatListItems, spinner } = this.state;
        if (spinner) {
            return <Spinner />
        } else {
            return (
                <View style={styles.tabView}>
                    <StatusBar backgroundColor='#2c233d' barStyle="light-content" />
                    <View>

                        <FlatList
                            data={FlatListItems}
                            extraData={this.state}
                            renderItem={({ item }) => (
                                <View>
                                    <View style={{ flexDirection: 'row' }}>
                                        <Text style={styles.verticalLine}> | </Text>
                                        <Text style={styles.item}>
                                            {item}
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
                    <View style={{ borderRadius: 10, borderColor: 'gray', borderWidth: 1, width: 35, height: 35, marginVertical: height * 0.015, marginLeft: width * 0.075 }}>
                        <MaterialIcons
                            name='add'
                            style={{ alignSelf: 'center' }}
                            color='gray'
                            size={30}
                        />
                    </View>
                </View>
            );
        }
    };
}

const styles = StyleSheet.create({
    tabView: {
        backgroundColor: '#382d4b',
        height: '100%',
        width: '100%',
        paddingTop: height * 0.025,
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
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