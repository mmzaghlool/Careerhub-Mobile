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
import { SocialIcon } from 'react-native-elements';

import firebase from "react-native-firebase";
import { API_LINK } from '../../../common/Constants';

const { height, width } = Dimensions.get('window')

export default class Login extends Component {
  constructor() {
    super()
    this.state = {
      email: '',
      password: '',
      error: '',
      emailError: '',
      passwordError: '',
      loading: false,
    }
  }
  onButtonPress = () => {
    const { email, password } = this.state;
    this.setState({
      error: '',
      emailError: '',
      passwordError: '',
      loading: true
    })

    if (this.state.email == '') {
      this.setState({ emailError: 'please enter email', loading: false })
    }
    if (this.state.password == '') {
      this.setState({ passwordError: 'please enter password', loading: false })
    }
    if (this.state.email != '' && this.state.password != '') {
      firebase.auth().signInWithEmailAndPassword(email, password)
        .then(this.onLoginSuccess.bind(this))
        .catch(this.onLoginFail.bind(this))
    }

    // console.log('err', email, password);
    // console.log('err', firebase);

    // const x = firebase.auth().currentUser;
    // console.log("x", x);

    // firebase.auth().signOut()

    //   firebase.auth().signInWithEmailAndPassword(email, password)
    //     .then(async res => {
    //       console.log('res', res);

    //       await fetch(`${API_LINK}/users/getUser/${res.user.uid}`)
    //         .then(ress => ress.json())
    //         .then(log => {
    //           console.log('log22', log);

    //         })

    //       // this.props.navigation.navigate('Profile')
    //     })
    //     .catch(err => {
    //       console.log('err', err);
    //     })
    // }}

  }

  onLoginSuccess() {
    this.setState({
      loading: false,
    })
    // onPress={() => AsyncStorage.setItem('Login', 1)}
    this.props.navigation.navigate('Profile')
  }

  onLoginFail() {
    this.setState({
      error: 'wrong email or password',
      loading: false
    });
  }

  renderButton() {
    if (this.state.loading) {
      return <ActivityIndicator size="large" color="#ffffff" />
    }
    return (
      <Text
        style={styles.bottonText}>
        Log in
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
            <Text style={styles.text}>Login</Text>

            <Text style={styles.text2}>Email</Text>
            <TextInput
              style={styles.inputText}
              underlineColorAndroid='gray'
              placeholder="Enter Email"
              placeholderTextColor='gray'
              value={this.state.email}
              onChangeText={(email) => this.setState({ email })}
            />

            <Text style={styles.error}>
              {this.state.emailError}
            </Text>

            <Text style={styles.text2}>
              Password
            </Text>
            <TextInput
              style={styles.inputText}
              underlineColorAndroid='gray'
              placeholder="Enter Password"
              secureTextEntry={true}
              placeholderTextColor='gray'
              value={this.state.password}
              onChangeText={(password) => this.setState({ password })}
            />
            <Text style={styles.error}>
              {this.state.passwordError}
              {this.state.error}
            </Text>

            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('ForgetPassword1')}>
              <Text
                style={styles.subtittle1}
                underlineColorAndroid='5653e2'>
                Forget Password?
              </Text>
            </TouchableOpacity>

            <View style={{ marginTop: height * 0.05 }}>
              <TouchableOpacity
                onPress={this.onButtonPress.bind(this)}
              // onPress={() => {
              //   // this.props.navigation.navigate('Profile')
              //   const { email, password } = this.state;
              //   console.log('err', email, password);
              //   console.log('err', firebase);

              //   // const x = firebase.auth().currentUser;
              //   // console.log("x", x);

              //   // firebase.auth().signOut()

              //   //   firebase.auth().signInWithEmailAndPassword(email, password)
              //   //     .then(async res => {
              //   //       console.log('res', res);

              //   //       await fetch(`${API_LINK}/users/getUser/${res.user.uid}`)
              //   //         .then(ress => ress.json())
              //   //         .then(log => {
              //   //           console.log('log22', log);

              //   //         })

              //   //       // this.props.navigation.navigate('Profile')
              //   //     })
              //   //     .catch(err => {
              //   //       console.log('err', err);
              //   //     })
              //   // }}
              >
                <LinearGradient
                  start={{ x: 0, y: 0 }}
                  end={{ x: 1, y: 0 }}
                  colors={['#5653e2', '#795EE3', '#ae71f2']}
                  style={styles.linearGradient}>
                  {/* <Text
                    style={styles.bottonText}>
                    Log in
                  </Text> */}
                  {this.renderButton()}
                </LinearGradient>
              </TouchableOpacity>
            </View>

            <Text style={styles.or}>
              ───────── OR ─────────
            </Text>

            <View style={styles.social}>
              <View>
                <SocialIcon
                  type='facebook'
                />
              </View>
              <View>
                <SocialIcon
                  type='twitter'
                />
              </View>
            </View>

            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('Indicator')}>
              <Text
                style={styles.subtittle2}
                underlineColorAndroid='5653e2'>
                don't have an account?
            </Text>
            </TouchableOpacity>

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
    paddingLeft: width * 0.09,
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
  },
  text2: {
    color: '#000000',
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: height * 0.02,
  },
  inputText: {
    color: '#000000',
    fontSize: 17,
    textAlign: 'left',
    fontWeight: 'normal',
    width: width * 0.75,
    height: height * 0.065,
  },
  subtittle1: {
    color: '#795EE3',
    fontSize: 14,
    textDecorationLine: 'underline',
    textAlign: 'right',
    marginRight: width * 0.05,
  },
  linearGradient: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 15,
    width: width * 0.75,
    height: height * 0.055,
  },
  bottonText: {
    color: '#ffffff',
    fontSize: 20,
    fontWeight: 'bold',
  },
  or: {
    color: 'gray',
    fontSize: 20,
    textAlign: 'center',
    marginTop: height * 0.035,
    width: width * 0.75,
  },
  social: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginTop: height * 0.02,
    marginHorizontal: width * 0.13,
    width: width * 0.5,
  },
  subtittle2: {
    color: '#795EE3',
    fontSize: 14,
    textAlign: 'center',
    marginTop: height * 0.03,
    textDecorationLine: 'underline',
  },
  error: {
    color: 'red',
    fontSize: 13,
    marginLeft: width * 0.01,
  },
});