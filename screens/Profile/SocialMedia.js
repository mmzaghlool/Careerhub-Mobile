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
import { SocialIcon } from 'react-native-elements';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const { height, width } = Dimensions.get('window')

const facebook = (
    <SocialIcon
        type='facebook-square'
        style={{ backgroundColor: '#382d4b', width: 35, height: 35 }}
        iconColor='#ffffff'
        iconSize={35}
    />
);

const instagram = (
    <SocialIcon type='instagram'
        style={{ backgroundColor: '#382d4b', width: 35, height: 35 }}
        iconColor='#ffffff'
        iconSize={35}
    />
);
const twitter = (
    <SocialIcon type='twitter'
        style={{ backgroundColor: '#382d4b', width: 35, height: 35 }}
        iconColor='#ffffff'
        iconSize={35}
    />
);
const behance = (
    <SocialIcon type='behance'
        style={{ backgroundColor: '#ffffff', width: 35, height: 35 }}
        iconColor='#382d4b'
        iconSize={25}
    />
);
const github = (
    <SocialIcon type='github'
        style={{ backgroundColor: '#382d4b', width: 35, height: 35 }}
        iconColor='#ffffff'
        iconSize={40}
    />
);

export default class SociaMedia extends Component {
    constructor(props) {
        super(props);
        this.state = {
            spinner: true,
        };
    }

    async componentDidMount() {
        const { social } = this.props;
        console.log('---------------------------social----------------------------');
        console.log('social', social);
        let FlatListItems = Object.values(social)
        this.setState({ social, FlatListItems, spinner: false })
        console.log('FlatListItems', FlatListItems);
    }

    _keyExtractor = (index) => `${index}`
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
                            keyExtractor={this._keyExtractor}
                            extraData={this.state}
                            renderItem={({ item }) => (
                                <View>
                                    <View style={{ flexDirection: 'row', marginLeft: width * 0.05, }}>
                                        <View>
                                            {twitter}
                                        </View>
                                        <Text
                                            style={{
                                                marginLeft: width * 0.03,
                                                fontSize: 20,
                                                color: '#ffffff',
                                                fontWeight: '700',
                                                marginTop: height * 0.0125
                                            }}
                                        >
                                            {item}
                                        </Text>
                                    </View>
                                    <View style={{
                                        height: height * 0.001,
                                        width: '85%',
                                        backgroundColor: 'gray',
                                        marginLeft: width * 0.07,
                                        marginTop: height * 0.01
                                    }} />
                                </View>
                            )}
                        />
                    </View>

                    {/* <View style={styles.social}>
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
                    </View> */}
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
        };
    }
}
const styles = StyleSheet.create({
    tabView: {
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