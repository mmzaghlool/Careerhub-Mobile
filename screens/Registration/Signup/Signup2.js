import React, { Component, useEffect, useState } from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  Dimensions
} from 'react-native';
import Signup3 from './Signup3';

const { height, width } = Dimensions.get('window')

// export default Signup2 = (props) => {

//   const [hamada, setHamada] = useState(0)
//   const [user, setUser] = useState({
//     email: "",
//     name: ""
//   })

//   useEffect(() => {

//   }, [hamada])

//   sss =() => {
//     setUser({ ...user, name: "" });
//     setHamada(3)
//   }

//   return (
//     <View>
//       <Text style={styles.text2}>Name</Text>
//       <TextInput
//         style={styles.inputText}
//         underlineColorAndroid='gray'
//         placeholder="Enter name"
//         placeholderTextColor='gray'
//         onChangeText={name => setUser({ ...user, name })}

//       />

//       <Text style={styles.text2}>Password</Text>
//       <TextInput
//         style={styles.inputText}
//         underlineColorAndroid='gray'
//         placeholder="Enter Password"
//         secureTextEntry={true}
//         placeholderTextColor='gray'
//         onChangeText={(password) => props.callBack("password", password)}
//       />

//       <Text style={styles.text2}>Confirm Password</Text>
//       <TextInput
//         style={styles.inputText}
//         underlineColorAndroid='gray'
//         placeholder="Enter Password"
//         secureTextEntry={true}
//         placeholderTextColor='gray'
//       />
//     </View>
//   )
// }


export default class Signup2 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      number: '',
    }
  }
  render() {
    const { email, number, } = this.state;

    return (
      <View>
        {/* <Text style={styles.text2}>Name</Text>
        <TextInput
          style={styles.inputText}
          underlineColorAndroid='gray'
          placeholder="Enter name"
          placeholderTextColor='gray'
        /> */}

        {/* <Text style={styles.text2}>Password</Text>
        <TextInput
          style={styles.inputText}
          underlineColorAndroid='gray'
          placeholder="Enter Password"
          secureTextEntry={true}
          placeholderTextColor='gray'
          onChangeText={(password) => this.props.callBack("password", password)}
        /> */}

        {/* <Text style={styles.text2}>Confirm Password</Text>
        <TextInput
          style={styles.inputText}
          underlineColorAndroid='gray'
          placeholder="Enter Password"
          secureTextEntry={true}
          placeholderTextColor='gray'
        /> */}

        <Text style={styles.text2}>Email</Text>
        <TextInput
          value={email}
          style={styles.inputText}
          underlineColorAndroid='gray'
          placeholder="Enter email"
          placeholderTextColor='gray'
          onChangeText={(email) => {
            this.setState({ email })
            this.props.callBack("email", email)
          }}
        />

        <Text style={styles.text2}>Mobile Number</Text>
        <TextInput
          // ref='mobileNo'
          // keyboardType="numeric"
          value={number}
          style={styles.inputText}
          underlineColorAndroid='gray'
          placeholder="Enter number"
          placeholderTextColor='gray'
          onChangeText={(number) => {
            this.setState({ number })
            this.props.callBack("number", number)
          }}
        // onChangeText={(value) => 
        //   let num = value.replace(".", '');
        //     if(isNaN(num)){
        //         // Its not a number
        //     }else{
        //        this.handleChange('mobileNo', num)}  
        //     }
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