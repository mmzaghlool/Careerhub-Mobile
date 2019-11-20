import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import EnterToTest from './entertotest';


import {
    StyleSheet,
    View,
    Text,
    TouchableOpacity,
    Dimensions,
    BackHandler,
    AsyncStorage
} from 'react-native';

export default class TestIndicat extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentPage: 0,
            text: 'Next',
            display: 'entertotest',
        }
    }

    componentDidMount() {
        this.backHandler = BackHandler.addEventListener('hardwareBackPress', this.handleBackPress);
    }

    componentWillUnmount() {
        this.backHandler.remove()
    }

    handleBackPress = () => {
        if (this.state.display === 'entertotest') {
            BackHandler.exitApp()
        } else if (this.state.display === 'One') {
            this.setState({ display: 'entertotest' })
        }
        else if (this.state.display === 'Two') {
            this.setState({ display: 'One' })
        }
        else if (this.state.display === 'Three') {
            this.setState({ display: 'Two' })
        }
        else if (this.state.display === 'Four') {
            this.setState({ display: 'Three' })
        }
        return true;
    }

    renderPage = () => {
        switch (this.state.display) {
            case 'entertotest':
                return <EnterToTest />

        }
    }



    registerPressed = () => {
        if (this.state.display === 'entertotest') {
            this.setState({ display: 'One' })
        } else if (this.state.display === 'One') {
            this.setState({ display: 'Two' })
        }

    }

    render() {
        return (
            <View style={{}}>
                <LinearGradient
                    colors={['#5653e2', '#795EE3', '#ae71f2']}
                    style={styles.linearGradient}>
                    <Text style={{ textAlign: 'center', fontWeight: 'bold', fontSize: 27, marginTop: 15, color: 'white', marginTop: 20 }}>PERSONALITY TEST</Text>
                    <View style={styles.dynamicScreen}>
                        {this.renderPage()}
                    </View>
                    <TouchableOpacity style={{ borderRadius: 30, marginTop: 9, width: '70%', marginLeft: 52, flexDirection: 'column' }}
                        onPress={() => { this.registerPressed() }}>
                        <LinearGradient
                            start={{ x: 0, y: 0 }}
                            end={{ x: 1, y: 0 }}
                            colors={['#5653e2', '#795EE3', '#862deb']}
                            style={styles.linearGradient2}>
                            <Text style={{ color: '#ffffff', fontSize: 20, fontWeight: 'bold', textAlign: 'center', marginTop: 9 }}>Next</Text>
                        </LinearGradient>
                    </TouchableOpacity>
                </LinearGradient>
            </View>
        );
    }
}

const styles = StyleSheet.create({

    dynamicScreen: {
        backgroundColor: 'white',
        marginTop: 10,
        height: '87%',
        borderRadius: 18

    },
    linearGradient: {

        paddingLeft: 15,
        paddingRight: 15,
        borderRadius: 5,
        height: '100%'
    },
    linearGradient2: {

        paddingLeft: 15,
        paddingRight: 15,
        borderRadius: 15,
        height: 40

    }

});

