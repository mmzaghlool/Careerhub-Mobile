import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  StatusBar,
  TouchableOpacity,
  TextInput,
  Dimensions,
  ActivityIndicator,
} from 'react-native';

import LinearGradient from 'react-native-linear-gradient';
import firebase from "react-native-firebase";
const { height, width } = Dimensions.get('window')

export default class ForgetPassword1 extends Component {
  constructor() {
    super()
    this.state = {
      email: '',
      emailError: '',
      loading: false,
    }
  }
  onButtonPress = () => {
    const { email } = this.state;
    this.setState({
      emailError: '',
      loading: true
    })
    if (this.state.email == '') {
      this.setState({ emailError: 'please enter email', loading: false })
    }
    if (this.state.email != '') {
      firebase.auth().sendPasswordResetEmail(email)
      .then(res => {

        console.log('reset email res ', res);
      }) 
      .catch(err => {
        console.log('reset email err ', err.code);
        console.log('reset email err ', err.message);
        switch (err.code) {
          case "auth/invalid-email":
            
            break;
        
          default:
            break;
        }
      });

      // this.props.navigation.navigate('ForgetPassword2')
      this.setState({ loading: false })
    }
  }

  renderButton() {
    if (this.state.loading) {
      return <ActivityIndicator size="large" color="#ffffff" />
    }
    return (
      <Text
        style={styles.bottonText}>
        Next
      </Text>
    )
  }

  render() {
    return (
      <View>
        <StatusBar backgroundColor='#2c233d' barStyle="light-content" />
        <View style={styles.basicBackground}>

          <View style={{ flexDirection: 'row' }}>
            <Text style={styles.header1}>C</Text>
            <Text style={styles.header2}>areer Hub</Text>
          </View>

          <View style={styles.background}>
            <Text style={styles.text}>Forget Password</Text>

            <Text
              style={styles.text2}>
              enter your email below to check if that {"\n"} email registered with us or no
            </Text>

            <TextInput
              style={styles.inputText}
              underlineColorAndroid='gray'
              placeholder="Enter email to reset password"
              placeholderTextColor='gray'
              value={this.state.email}
              onChangeText={(email) => this.setState({ email })}
            />
            <Text style={styles.error}>
              {this.state.emailError}
            </Text>

            <View>
              <TouchableOpacity
                onPress={this.onButtonPress.bind(this)}
              // onPress={() => this.props.navigation.navigate('ForgetPassword2')}
              >
                <LinearGradient
                  start={{ x: 0, y: 0 }}
                  end={{ x: 1, y: 0 }}
                  colors={['#5653e2', '#795EE3', '#ae71f2']}
                  style={styles.linearGradient}>
                  {this.renderButton()}
                  {/* <Text
                    style={styles.bottonText}>
                    Enter
                  </Text> */}
                </LinearGradient>
              </TouchableOpacity>
            </View>

          </View>
        </View>
      </View>
    );
  };
}



const styles = StyleSheet.create({
  basicBackground: {
    backgroundColor: '#382d4b',
    height: '100%',
    width: '100%',
  },
  background: {
    backgroundColor: '#ffffff',
    height: '80%',
    width: '90%',
    borderTopRightRadius: 30,
    borderBottomRightRadius: 30,
    marginTop: height * 0.01,
    paddingTop: height * 0.05,
    paddingLeft: width * 0.05,
  },
  header1: {
    color: '#ffffff',
    fontSize: 60,
    fontWeight: 'bold',
    marginTop: height * 0.025,
    marginLeft: width * 0.06,
  },
  header2: {
    color: '#ffffff',
    fontSize: 40,
    fontWeight: 'bold',
    marginTop: height * 0.05,
    marginLeft: width * 0.005,
  },
  text: {
    color: '#000000',
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'left',
    marginLeft: width * 0.05,
  },
  text2: {
    color: '#000000',
    fontSize: 17,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: height * 0.07,
    marginRight: width * 0.1,
  },
  inputText: {
    color: '#000000',
    fontSize: 20,
    textAlign: 'left',
    fontWeight: 'normal',
    width: width * 0.7,
    height: height * 0.065,
    marginTop: height * 0.05,
    marginHorizontal: width * 0.05,
  },
  linearGradient: {
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: width * 0.025,
    marginTop: height * 0.03,
    borderRadius: 15,
    width: width * 0.75,
    height: height * 0.055,
  },
  bottonText: {
    color: '#ffffff',
    fontSize: 20,
    fontWeight: 'bold',
  },
  error: {
    color: 'red',
    fontSize: 13,
    marginLeft: width * 0.01,
  },
  error: {
    color: 'red',
    fontSize: 15,
    marginHorizontal: width * 0.06,
  }
});