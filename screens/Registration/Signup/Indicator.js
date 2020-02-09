import React, { Component } from 'react'
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Dimensions,
  BackHandler,
  ActivityIndicator,
} from 'react-native';

import LinearGradient from 'react-native-linear-gradient';
import StepIndicator from 'react-native-step-indicator';
import AsyncStorage from '@react-native-community/async-storage';
import firebase from "react-native-firebase";

import Signup1 from './Signup1';
import Signup2 from './Signup2';
import Signup3 from './Signup3';

import Footer1 from './Footer1';
import Footer3 from './Footer3';
import { USER, API_LINK } from '../../../common/Constants';

const { height, width } = Dimensions.get('window')

const IndicatorStyles = {
  stepIndicatorSize: 17,
  currentStepIndicatorSize: 23,
  separatorStrokeWidth: 5,
  currentStepStrokeWidth: 3,
  stepStrokeCurrentColor: '#5653e2',
  stepStrokeWidth: 3,
  stepStrokeFinishedColor: '#5653e2',
  stepStrokeUnFinishedColor: '#dedede',
  separatorFinishedColor: '#5653e2',
  separatorUnFinishedColor: '#dedede',
  stepIndicatorFinishedColor: '#5653e2',
  stepIndicatorUnFinishedColor: '#dedede',
  stepIndicatorCurrentColor: '#5653e2',
  stepIndicatorLabelCurrentColor: 'transparent',
  stepIndicatorLabelFinishedColor: 'transparent',
  stepIndicatorLabelUnFinishedColor: 'transparent',
}

export default class Indicator extends Component {
  constructor() {
    super()
    this.state = {
      currentPage: 0,
      text: 'Next',
      display: 'Signup1',
      footer: 'Footer1',
      firstName: '',
      lastName: '',
      email: '',
      number: '',
      password: '',
      confirmPassword: '',
      error: '',
      loading: false,
    }
  }

  componentWillMount() {

  }

  // async componentDidMount() {
  //   let user = await AsyncStorage.getItem(USER);
  //   // console.log('did mount', user);

  //   if (user !== undefined) {
  //     user = await JSON.parse(user);
  //     // this.setState({ number: user.number, name: user.name, email: user.email });
  //     this.setState({
  //       firstName: user.firstName,
  //       lastName: user.lastName,
  //       email: user.email,
  //       number: user.number,
  //       password: user.password,
  //       confirmPassword: user.confirmPassword,
  //     });
  //   }

  //   BackHandler.addEventListener('hardwareBackPress', this.backButtonHandler)
  // }

  componentWillUnmount() {
    BackHandler.removeEventListener('hardwareBackPress', this.backButtonHandler)
  }

  backButtonHandler = () => {

  }

  renderSignup = () => {
    // const { number, name, email } = this.state;
    const { firstName, lastName, email, number, password, confirmPassword } = this.state;
    console.log('indicator', this.state);

    switch (this.state.display) {
      case 'Signup1':
        return <Signup1
          firstName={firstName}
          lastName={lastName}
          callBack={(type, val) => {
            this.setState({ [type]: val })
            console.log('Signup1', this.state);
          }}
        />
      case 'Signup2':
        return <Signup2
          email={email}
          number={number}
          callBack={(type, val) => {
            this.setState({ [type]: val })
            console.log('Signup2', this.state);
          }}
        />
      case 'Signup3':
        return <Signup3
          password={password}
          confirmPassword={confirmPassword}
          callBack={(type, val) => {
            this.setState({ [type]: val })
            console.log('Signup3', this.state);
          }}
        />
    }
  }

  renderFooter = () => {
    switch (this.state.footer) {
      case 'Footer1':
        return <Footer1 />
      case 'Footer2':
        return <Footer1 />
      case 'Footer3':
        return <Footer3 />
    }
  }

  registerPressed = async () => {
    // this.state.currentPage === 0 ? this.setState({ currentPage: 1, text: 'Next' }) : this.setState({ currentPage: 2, text: 'Signup' })
    // this.state.display === 'Signup1' ? this.setState({ display: 'Signup2' }) : this.setState({ display: 'Signup3' })
    // this.state.footer === 'Footer1' ? this.setState({ footer: 'Footer2' }) : this.setState({ footer: 'Footer3' })

    // const { number, email, name, currentPage, password } = this.state;
    console.log('x', this.state);

    const { currentPage, firstName, lastName, email, number, password, confirmPassword } = this.state;
    console.log('y', this.state);

    this.setState({
      error: '',
      loading: true,
    })
    console.log('z1', this.state);

    // const number = this.state.number;
    // const email = this.state.email;
    // const name = this.state.name;
    // let user = { number, email, name };

    // let user = { firstName, lastName, email, number, password, confirmPassword };
    // console.log('z2', this.state);

    // user = JSON.stringify(user);
    // // console.log("sssss", user);

    // AsyncStorage.setItem(USER, user)


    // if (currentPage === 2) {
    //   console.log("fetch");

    //   await fetch(`${API_LINK}/users/registerUser`, {
    //     method: "POST",
    //     headers: {
    //       'Content-Type': "application/json"
    //     },
    //     body: JSON.stringify({
    //       firstName: firstName,
    //       lastName: lastName,
    //       phoneNumber: `+2${number}`,
    //       email,
    //       password,
    //     })
    //   }).then(res => res.json())
    //     .then(res => {

    //       console.log('reg res', res);

    //     })
    //     .catch(err => {
    //       console.log('reg err', err);

    //     })
    // }
    // console.log('z3', this.state);

    if (this.state.currentPage === 0) {
      console.log('page0', this.state);

      if (this.state.firstName == '' || this.state.lastName == '') {
        this.setState({
          error: 'please enter your data',
          loading: false
        })
      }

      else
        if (this.state.firstName != '' && this.state.lastName != '') {
          this.setState({
            currentPage: 1,
            text: 'Next',
            display: 'Signup2',
            footer: 'Footer2',
            loading: false
          })
        }
    }

    else
      if (this.state.currentPage === 1) {
        console.log('page1', this.state);

        this.setState({ error: '' })
        if (this.state.email == '' || this.state.number == '') {
          this.setState({
            error: 'please enter your data',
            loading: false
          })
        }
        else
          if (this.state.email != '' && this.state.number != '') {
            this.setState({
              currentPage: 2,
              text: 'Signup',
              display: 'Signup3',
              footer: 'Footer3',
              loading: false
            })
          }
      }

      else
        if (this.state.currentPage === 2) {
          console.log('page2', this.state);
          // console.log('password', this.state.password)
          // console.log('confirmPassword', this.state.confirmPassword)
          this.setState({ error: '' })
          if (this.state.password == '' || this.state.confirmPassword == '') {
            this.setState({
              error: 'please enter your data',
              loading: false
            })
          }
          else
            // if (this.state.password != '' && this.state.confirmPassword != '') {
            if (this.state.password === this.state.confirmPassword) {
              // this.props.navigation.navigate('Profile')

              await fetch(`${API_LINK}/users/registerUser`, {
                method: "POST",
                headers: {
                  'Content-Type': "application/json"
                },
                body: JSON.stringify({
                  firstName: firstName,
                  lastName: lastName,
                  phoneNumber: `+2${number}`,
                  email,
                  password,
                })
              }).then(res => res.json())
                .then(res => {
                  console.log('reg res', res);
                  this.onSigninSuccess(res)
                })
                .catch(err => {
                  console.log('reg err', err);
                  this.onSigninFail(err)
                })
              // firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.password)
              //   .then(this.onSigninSuccess.bind(this))
              //   .catch(this.onSigninFail.bind(this))
            }
            else {
              this.setState({
                error: 'password and confirm password must be idenical',
                loading: false
              })
            }
          // }
        }
  }

  onSigninSuccess() {
    this.setState({
      loading: false,
    })
    this.props.navigation.navigate('Profile')
  }

  onSigninFail(err) {
    this.setState({
      error: 'Sign up Failed',
      loading: false
    });
  }
  renderButton() {
    if (this.state.loading) {
      return <ActivityIndicator size="large" color="#ffffff" />
    }
    return (
      <Text style={styles.bottonText}>
        {this.state.text}
      </Text>
    )
  }
  render() {
    return (
      <View style={styles.basicBackground}>
        <View style={{ flexDirection: 'row' }}>
          <Text style={styles.header1}>C</Text>
          <Text style={styles.header2}>areer Hub</Text>
        </View>

        <View style={styles.background}>
          <Text style={styles.text}>
            Signup
          </Text>

          <View style={styles.stepIndicator}>
            <StepIndicator
              stepCount={3}
              customStyles={IndicatorStyles}
              currentPosition={this.state.currentPage}
            />
          </View>

          <View style={{ marginTop: height * 0.03, marginBottom: height * 0.03 }}>
            {this.renderSignup()}
            <Text style={styles.error}>
              {this.state.error}
            </Text>
          </View>

          <View>
            <TouchableOpacity
              onPress={this.registerPressed.bind()}>
              <LinearGradient
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}
                colors={['#5653e2', '#795EE3', '#ae71f2']}
                style={styles.linearGradient}>
                {/* <Text style={styles.bottonText}> {this.state.text} </Text> */}
                {this.renderButton()}
              </LinearGradient>
            </TouchableOpacity>
          </View>

          <View style={{ marginTop: height * 0.02 }}>
            {this.renderFooter()}
          </View>

        </View>
      </View>
    )
  }
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
    marginBottom: height * 0.03,
  },
  stepIndicator: {
    marginTop: width * 0.04,
  },
  linearGradient: {
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: width * 0.025,
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
    fontSize: 14,
    marginLeft: width * 0.07,
    width: width * 0.6
  },
})