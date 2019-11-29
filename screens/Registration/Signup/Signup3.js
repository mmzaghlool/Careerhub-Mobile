import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  Dimensions
} from 'react-native';

const { height, width } = Dimensions.get('window')

export default class Signup3 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      password: '',
      confirmPassword: '',
    }
  }
  render() {
    const { password, confirmPassword, } = this.state;
    return (
      <View>
        {/* <Text style={styles.text2}>Name</Text>
        <TextInput
          style={styles.inputText}
          underlineColorAndroid= 'gray'
          placeholder="Enter name"
          placeholderTextColor= 'gray'
        /> */}

        <Text style={styles.text2}>Password</Text>
        <TextInput
          value={password}
          style={styles.inputText}
          underlineColorAndroid='gray'
          placeholder="Enter Password"
          secureTextEntry={true}
          placeholderTextColor='gray'
          onChangeText={(password) => {
            this.setState({ password })
            this.props.callBack("password", password)
          }}

        />

        <Text style={styles.text2}>Confirm Password</Text>
        <TextInput
          value={confirmPassword}
          style={styles.inputText}
          underlineColorAndroid='gray'
          placeholder="Enter Password"
          secureTextEntry={true}
          placeholderTextColor='gray'
          onChangeText={(confirmPassword) => {
            this.setState({ confirmPassword })
            this.props.callBack("confirmPassword", confirmPassword)
          }}
        />
      </View>
    );
  };
}

const styles = StyleSheet.create({
  text2: {
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
});