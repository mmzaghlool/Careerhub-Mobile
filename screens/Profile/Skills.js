import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Text,
    StatusBar,
    Dimensions,
    FlatList,
    TouchableOpacity,
    Modal,
} from 'react-native';
import Spinner from '../../common/Loading';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import LinearGradient from 'react-native-linear-gradient';
import RadioForm from 'react-native-simple-radio-button';

const { height, width } = Dimensions.get('window')

export default class Skills extends Component {
    constructor(props) {
        super(props);
        this.state = {
            spinner: true,
            modal: false,
            selected: 'Facebook',
            // selectSocial: ['Facebook', 'Twitter', 'Github', 'Behance', 'Instagram'],
            addSkill: [
                { value: 'Facebook', label: 'Facebook' },
                { value: 'Twitter', label: 'Twitter' },
                { value: 'Github', label: 'Github' },
                { value: 'Behance', label: 'Behance' },
                { value: 'Instagram', label: 'Instagram' },
            ],
        };
    }

    async componentDidMount() {
        const { skills } = this.props;
        console.log('-------------------------skills------------------------------');
        console.log('skills', skills);
        if (skills) {
            let FlatListItems = Object.values(skills)
            this.setState({ FlatListItems, spinner: false })
            console.log('FlatListItems', FlatListItems);
        } else {
            this.setState({ spinner: false })
        }
    }

    renderModal() {
        const { avatar, firstName, lastName, user, skills, social, spinner, modal, send, selectSocial, addSkill, selected } = this.state;
        return (
            <View
                style={{
                    flex: 1,
                    backgroundColor: "rgba(0,0,0,0.7)",
                    justifyContent: "center",
                    alignItems: "center",
                }}
            >
                <LinearGradient
                    start={{ x: 0, y: 1 }}
                    end={{ x: 0, y: 0 }}
                    colors={['#5653e2', '#795EE3', '#ae71f2']}
                    style={styles.modalView}>
                    <Text
                        style={{ alignSelf: 'center', color: '#ffffff', fontSize: 23, fontWeight: 'bold', marginBottom: height * 0.02 }}>
                        Select one of:
                    </Text>
                    {/* {send === 'ask' && <Text
                        style={{ alignSelf: 'center', color: '#ffffff', fontSize: 23, fontWeight: 'bold', marginBottom: height * 0.02 }}>
                        Ask {firstName} a question
                    </Text>}
                    {send === 'report' && <Text
                        style={{ alignSelf: 'center', color: '#ffffff', fontSize: 23, fontWeight: 'bold', marginBottom: height * 0.02 }}>
                        Why do you want to report {firstName} ?
                    </Text>} */}
                    {/* <TextInput
                        multiline
                        placeholder={send === 'ask' ? 'Write your question' : 'write your reasons'}
                        style={{
                            backgroundColor: '#ffffff',
                            width: width * 0.75,
                            alignSelf: 'center',
                            alignItems: 'center',
                            justifyContent: "center",
                            borderRadius: 15,
                            padding: 10,
                        }}
                    /> */}
                    <View
                        style={{
                            backgroundColor: '#ffffff',
                            // width: width * 0.75,
                            // alignSelf: 'center',
                            // alignItems: 'center',
                            justifyContent: "center",
                            borderRadius: 15,
                            padding: 15,
                        }}
                    >
                        <RadioForm
                            radio_props={addSkill}
                            initial={0}
                            buttonSize={10}
                            buttonColor={'#382d4b'}
                            selectedButtonColor={'#382d4b'}
                            labelStyle={{ fontSize: 19, marginLeft: width * 0.01, marginBottom: height * 0.01, color: '#382d4b' }}
                            onPress={(selected) => {
                                this.setState({ selected }),
                                    // marketingValue === 4 ? this.setState({ custom: true }) : this.setState({ custom: false })
                                    console.log(selected);
                            }}
                        />

                        {/* <FlatList
                            data={selectSocial}
                            keyExtractor={this._keyExtractor}
                            extraData={this.state}
                            renderItem={({ item }) => (
                                <View>
                                    <View style={{ flexDirection: 'row', marginLeft: width * 0.05, }}>
                                        <Text
                                            style={{
                                                marginLeft: width * 0.03,
                                                fontSize: 18,
                                                color: '#382d4b',
                                                fontWeight: '600',
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
                        /> */}
                    </View>
                    <View style={{ flexDirection: 'row', marginTop: height * 0.025, justifyContent: 'space-around' }}>
                        <TouchableOpacity
                            style={{
                                backgroundColor: '#ffffff',
                                alignItems: 'center',
                                justifyContent: 'center',
                                marginHorizontal: width * 0.025,
                                borderRadius: 30,
                                width: width * 0.2,
                                height: height * 0.045,
                                elevation: 5,
                            }}
                            onPress={() => this.setState({ modal: false })}
                        >
                            <Text
                                style={{ color: '#000', fontSize: 19, fontWeight: 'bold', }}>
                                Cancel
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={{
                                backgroundColor: '#ffffff',
                                alignItems: 'center',
                                justifyContent: 'center',
                                marginHorizontal: width * 0.025,
                                borderRadius: 30,
                                width: width * 0.2,
                                height: height * 0.045,
                                elevation: 5,
                            }}
                            onPress={() => {
                                this.setState({ modal: false, selected })
                                // console.log('selected', selected),
                                { this.addedSkill() }
                            }}
                        >
                            <Text
                                style={{ color: '#000', fontSize: 19, fontWeight: 'bold', }}>
                                Select
                            </Text>
                        </TouchableOpacity>
                    </View>
                </LinearGradient>
            </View>
        );
    }
    addedSkill() {
        const { selected, FlatListItems } = this.state;
        console.log('[][][][][][]');
        console.log('selected', selected);
        console.log('FlatListItems', FlatListItems);
        let newSkills = []
        newSkills.push(selected)
        console.log('newSkills:', newSkills);
        // if (FlatListItems === undefined) {
        //     newSkills.forEach(element => {
        //         FlatListItems.push(element)
        //         console.log('FlatListItems', FlatListItems);
        //         console.log('newSkills:', newSkills);
        //     });
        // }
    }

    render() {
        const { FlatListItems, spinner, modal } = this.state;
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
                    <TouchableOpacity
                        style={{
                            borderRadius: 10,
                            borderColor: 'gray',
                            borderWidth: 1,
                            marginVertical: height * 0.015,
                            // marginLeft: width * 0.075,
                            flexDirection: 'row',
                            alignSelf: 'center',
                            width: width * 0.85,
                            paddingHorizontal: width * 0.01,
                            paddingVertical: width * 0.01
                        }}
                        onPress={() => this.setState({ modal: true })}
                    >
                        <MaterialIcons
                            name='add'
                            style={{ alignSelf: 'center' }}
                            color='gray'
                            size={30}
                        />
                        <Text
                            style={{
                                marginLeft: width * 0.03,
                                fontSize: 19,
                                color: 'gray',
                                fontWeight: '600',
                                // marginTop: height * 0.0125
                            }}
                        >
                            Add new skill 
                        </Text>
                    </TouchableOpacity>

                    <Modal
                        animationType="fade"
                        visible={modal}
                        transparent
                        onRequestClose={() =>
                            this.setState({
                                modal: false,
                            })
                        }
                    >
                        {this.renderModal()}
                    </Modal>
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
    modalView: {
        width: width * 0.85,
        // height: height * 0.3,
        borderRadius: 30,
        padding: 20,
    },
});