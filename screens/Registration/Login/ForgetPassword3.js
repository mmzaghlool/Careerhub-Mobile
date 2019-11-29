import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  StatusBar,
  TouchableOpacity,
  TextInput,
  Dimensions,
  ActivityIndicator
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const { height, width } = Dimensions.get('window')

export default class ForgetPassword3 extends Component {
  constructor() {
    super()
    this.state = {
      password: '',
      confirmPassword: '',
      error: '',
      passwordError: '',
      confirmPasswordError: '',
      loading: false,
    }
  }
  onButtonPress = () => {
    const { password, confirmPassword } = this.state;
    this.setState({
      error: '',
      passwordError: '',
      confirmPasswordError: '',
      loading: true
    })
    if (this.state.password == '') {
      this.setState({
        passwordError: 'please enter new password',
        loading: false
      })
    }
    if (this.state.confirmPassword == '') {
      this.setState({
        confirmPasswordError: 'please enter confirm password',
        loading: false
      })
    }
    if (this.state.password != '' && this.state.confirmPassword != '') {
      if (this.state.password == this.state.confirmPassword) {
        this.props.navigation.navigate('Profile')
        this.setState({
          loading: false
        })
      }
      else {
        this.setState({
          error: 'password and confirm password must be idenical',
          loading: false
        })
      }
    }
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
            <Text style={styles.text}>Forget Password</Text>

            <Text
              style={styles.text2}>
              Please enter a new password and{"\n"}
              confirm the password.
            </Text>

            <Text style={styles.text3}>Password</Text>
            <TextInput
              style={styles.inputText}
              underlineColorAndroid='gray'
              placeholder="Enter password"
              secureTextEntry={true}
              placeholderTextColor='gray'
              onChangeText={(password) => this.setState({ password })}
            />
            <Text style={styles.error}>
              {this.state.passwordError}
              {/* {this.state.error} */}
            </Text>

            <Text style={styles.text3}>Confirm password</Text>
            <TextInput
              style={styles.inputText}
              underlineColorAndroid='gray'
              placeholder="Enter password"
              secureTextEntry={true}
              placeholderTextColor='gray'
              onChangeText={(confirmPassword) => this.setState({ confirmPassword })}
            />
            <Text style={styles.error}>
              {this.state.confirmPasswordError}
              {this.state.error}
            </Text>

            <View>
              <TouchableOpacity
                onPress={this.onButtonPress.bind(this)}
              // onPress={() => this.props.navigation.navigate('Profile')}
              >
                <LinearGradient
                  start={{ x: 0, y: 0 }}
                  end={{ x: 1, y: 0 }}
                  colors={['#5653e2', '#795EE3', '#ae71f2']}
                  style={styles.linearGradient}>
                  {/* <Text
                    style={styles.bottonText}>
                    Submit
                  </Text> */}
                  {this.renderButton()}
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
    marginTop: height * 0.05,
    marginBottom: height * 0.01,
    marginRight: width * 0.1,
  },
  text3: {
    color: '#000000',
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: height * 0.02,
    marginLeft: width * 0.05,
  },
  inputText: {
    color: '#000000',
    fontSize: 17,
    textAlign: 'left',
    fontWeight: 'normal',
    width: width * 0.7,
    height: height * 0.05,
    marginHorizontal: width * 0.05,
  },
  linearGradient: {
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: width * 0.025,
    marginTop: height * 0.05,
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
    marginLeft: width * 0.06,
  },
});