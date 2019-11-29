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

export default class ForgetPassword2 extends Component {
  constructor() {
    super()
    this.state = {
      password: '',
      passwordError: '',
      loading: false,
    }
  }
  onButtonPress = () => {
    const { password } = this.state;
    this.setState({
      passwordError: '',
      loading: true
    })
    if (this.state.password == '') {
      this.setState({ passwordError: 'please enter password', loading: false })
    }
    if (this.state.password != '') {
      // confirmPasswordReset(code, newPassword) returns Promise containing void;
      // confirmPasswordReset(code, newPassword) returns Promise containing void;

      this.props.navigation.navigate('ForgetPassword3')
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
        <StatusBar barStyle='"dark-content"' />
        <View style={styles.basicBackground}>

          <View style={{ flexDirection: 'row' }}>
            <Text style={styles.header1}>C</Text>
            <Text style={styles.header2}>areer Hub</Text>
          </View>

          <View style={styles.background}>
            <Text style={styles.text}>Forget Password</Text>

            <Text
              style={styles.text2}>
              For your security, a one time password{"\n"}
              has been sent to your email address.{"\n"}
              Please enter it below to continue.
            </Text>

            <TextInput
              style={styles.inputText}
              underlineColorAndroid='gray'
              placeholder="Enter received password"
              secureTextEntry={true}
              placeholderTextColor='gray'
              onChangeText={(password) => this.setState({ password })}
            />
            <Text style={styles.error}>
              {this.state.passwordError}
            </Text>

            <View>
              <TouchableOpacity
                onPress={this.onButtonPress.bind(this)}
              // onPress={() => this.props.navigation.navigate('ForgetPassword3')}
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
    marginTop: height * 0.035,
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
    fontSize: 15,
    marginHorizontal: width * 0.06,
  }
});