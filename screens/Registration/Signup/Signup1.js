import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  Dimensions,
} from 'react-native';

const { height, width } = Dimensions.get('window')

export default class Signup1 extends Component {

  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: ''
    }
  }

  // componentDidUpdate(prevProps, prevState) {
  //   // Dimensions.addEventListener('change')
  //   const { number, email, name } = this.props;
  //   console.log(this.props);
  //   if (this.props === prevProps && this.state === prevState) {
  //     return
  //   }

  //   this.setState({ number, name, email });
  // }

  render() {
    // const { number, email, name } = this.state;
    const { firstName, lastName } = this.state;
    // console.log(this.state);

    return (
      <View>
        <Text style={styles.text2}>First Name</Text>
        <TextInput
          value={firstName}
          style={styles.inputText}
          underlineColorAndroid='gray'
          placeholder="Enter name"
          placeholderTextColor='gray'
          onChangeText={(firstName) => {
            this.setState({ firstName })
            this.props.callBack("firstName", firstName)
          }}
        />

        <Text style={styles.text2}>Last Name</Text>
        <TextInput
          value={lastName}
          style={styles.inputText}
          underlineColorAndroid='gray'
          placeholder="Enter name"
          placeholderTextColor='gray'
          onChangeText={(lastName) => {
            this.setState({ lastName })
            this.props.callBack("lastName", lastName)
          }}
        />

        {/* <Text style={styles.text2}>Email</Text>
        <TextInput
          value={email}
          style={styles.inputText}
          underlineColorAndroid='gray'
          placeholder="Enter email"
          placeholderTextColor='gray'
          onChangeText={(email) => this.props.callBack("email", email)}
        /> */}

        {/* <Text style={styles.text2}>Mobile Number</Text>
        <TextInput
          value={number}
          style={styles.inputText}
          underlineColorAndroid='gray'
          placeholder="Enter number"
          placeholderTextColor='gray'
          onChangeText={(number) => {
            this.setState({ number })
            this.props.callBack("number", number)
          }}
        /> */}
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