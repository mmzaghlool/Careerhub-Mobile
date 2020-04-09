import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  StatusBar,
  TouchableOpacity,
  Dimensions,
  FlatList,
  Modal,
  TextInput,
  Button,
  Alert,
  ScrollView
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { TabView, SceneMap } from 'react-native-tab-view';
import { TabBar } from 'react-native-tab-view';
import { Avatar, Icon } from 'react-native-elements';
import firebase from 'react-native-firebase';
import AsyncStorage from '@react-native-community/async-storage';
import { USER } from '../../common/Constants';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { StackActions, NavigationActions } from 'react-navigation';
import {
  SCLAlert,
  SCLAlertButton
} from 'react-native-scl-alert'

import Spinner from '../../common/Loading';
import Posts from './Posts';
import Skills from './Skills';
import Achievements from './Achievements';
import SociaMedia from './SocialMedia';

const { height, width } = Dimensions.get('window')

// const FirstRoute = () => (
//   <Posts />
// );

export default class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      spinner: true,
      modal: false,
      show: false,
      index: 0,
      routes: [
        { key: 'first', title: 'Posts' },
        { key: 'second', title: 'Skills' },
        { key: 'third', title: 'Achievements' },
        { key: 'fourth', title: 'Social Media' },
      ],
      background: '#ffffff',
      color: '#ffffff',
      width: '',
      avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg'
    };
  }

  async componentDidMount() {
    const user = await this.props.navigation.state.params.user;
    // const { user } = this.props;
    this.setState({edit:user})
    console.log('==================================');
    console.log('user Profile', user);
    this.setState({ ...user, spinner: false })
  }

  FirstRoute = () => {
    // const {  } = this.state;
    return <Posts />
  }

  SecondRoute = () => {
    const { skills, spinner } = this.state;
    console.log('------------------------profile-------------------------------');
    console.log('skills', skills);
    if (!spinner) {
      return <Skills skills={skills} />
    }
  }

  ThirdRoute = () => {
    const { achievement, spinner } = this.state;
    return <Achievements />
  }

  FourthRoute = () => {
    const { social, spinner } = this.state;
    if (!spinner) {
      return <SociaMedia social={social} />
    }
  }

  // FirstRoute = () => (
  //   <Posts />
  // );

  renderModal() {
    const { avatar, firstName, lastName, user, skills, social, spinner, modal, show, send } = this.state;
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
          {send === 'ask' && <Text
            style={{ alignSelf: 'center', color: '#ffffff', fontSize: 23, fontWeight: 'bold', marginBottom: height * 0.02 }}>
            Ask {firstName} a question
          </Text>}
          {send === 'report' && <Text
            style={{ alignSelf: 'center', color: '#ffffff', fontSize: 23, fontWeight: 'bold', marginBottom: height * 0.02 }}>
            Why do you want to report {firstName} ?
          </Text>}
          <TextInput
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
          />
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
                elevation: 5
              }}
              onPress={() => this.setState({ modal: false })}
            >
              <Text
                style={{ color: '#000', fontSize: 17 }}>
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
                elevation: 5
              }}
              onPress={() => { this.setState({ modal: false, show: true }) }}
            >
              <Text
                style={{ color: '#000', fontSize: 17 }}>
                Send
                </Text>
            </TouchableOpacity>
          </View>
        </LinearGradient>
      </View >
    );
  }

  render() {
    const { avatar, firstName, lastName, user, skills, social, spinner, modal, show, send } = this.state;
    if (spinner) {
      return <Spinner />
    }
    else {
      return (
        <ScrollView>
          <View style={styles.screen}>
            {/* visitor header */}
            {/* <View style={styles.header}>
              <View style={styles.headerIcon}>
                <Icon
                  name="keyboard-backspace"
                  size={35}
                  color='#382d4b'
                />
              </View>
              <View style={[styles.headerIcon, { marginTop: height * 0.02 }]}>
                <MaterialCommunityIcons
                  name="alert-octagon"
                  size={40}
                  color='#382d4b'
                  onPress={() => this.setState({
                    send: 'report', modal: true
                  })}
                />
              </View>
            </View> */}
            {/*  */}

            {/* current user header */}
            <View style={styles.header}>
              <View style={styles.headerIcon}>
                <FontAwesome
                  name="edit"
                  size={35}
                  color='#382d4b'
                  onPress={() => {
                    this.props.navigation.navigate('EditProfile',{user:this.state.edit})
                    // const user = firebase.auth().currentUser;
                    console.log('user', user);
                  }}
                />
              </View>
              <TouchableOpacity
                onPress={() => {
                  firebase.auth().signOut();
                  AsyncStorage.removeItem(USER)
                  this.props.navigation.navigate('FirstScreen')
                }}
              >
                <View style={[styles.headerIcon, { marginTop: height * 0.02 }]}>
                  <Text style={{ color: '#382d4b', fontSize: 20, fontWeight: '700' }}>
                    Log out
              </Text>
                </View>
              </TouchableOpacity>
            </View>
            {/*  */}

            <View style={styles.basicBackground}>
              <Avatar
                style={styles.image}
                rounded
                size="xlarge"
                // source={{
                //   uri:
                //     avatar,
                // }}
                source={require('../../assets/icons/images.jpg')}

              />
              <Text style={styles.text}>
                {firstName + ' ' + lastName}
              </Text>

              {/* Ask button */}
              {/* <View>
                <TouchableOpacity
                  style={styles.bottonText}
                  onPress={() => this.setState({
                    send: 'ask', modal: true
                  })}
                >
                  <LinearGradient
                    start={{ x: 0, y: 0 }}
                    end={{ x: 1, y: 0 }}
                    colors={['#5653e2', '#795EE3', '#ae71f2']}
                    style={styles.linearGradient}>
                    <Text
                      style={styles.bottonText}>
                      ASK
                </Text>
                  </LinearGradient>
                </TouchableOpacity>
              </View> */}
              {/*  */}
            </View >
            <TabView
              style={styles.tabView}
              navigationState={this.state}
              renderScene={SceneMap({
                first: this.FirstRoute,
                second: this.SecondRoute,
                third: this.ThirdRoute,
                fourth: this.FourthRoute,
              })}
              renderTabBar={props =>
                <TabBar
                  {...props}
                  indicatorStyle={{ height: 8, backgroundColor: '#382d4b' }}
                  style={{ backgroundColor: '#ffffff' }}
                  tabStyle={{
                    width: 'auto',
                    marginHorizontal: 5.5,
                    marginVertical: 10,
                  }}
                  renderLabel={({ route }) => (
                    <Text
                      style={styles.tabBarLabel}>
                      {route.title}
                    </Text>
                  )}
                />
              }
              onIndexChange={index => this.setState({ index })}
            />
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
            {show == true &&
              <View>
                <SCLAlert
                  theme="success"
                  show={this.state.show}
                  title={send === 'ask' ? 'Your question has been' : 'Your report has been'}
                  subtitle='sent successfully'
                  titleStyle={{ fontWeight: 'bold', fontSize: 20, color: '#000000' }}
                  subtitleStyle={{ fontWeight: 'bold', fontSize: 20, color: '#000000' }}
                  onRequestClose={() => this.setState({ show: true })}
                >
                  <SCLAlertButton
                    theme="success"
                    onPress={() => this.setState({ show: false })}
                  >
                    Okey
              </SCLAlertButton>
                </SCLAlert>
              </View>}
          </View>
        </ScrollView>
      );
    }
  }
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  header: {
    justifyContent: 'space-between',
    width: '100%',
    flexDirection: 'row',
  },
  headerIcon: {
    marginTop: width * 0.03,
    marginLeft: width * 0.04,
    marginRight: width * 0.04,
  },
  basicBackground: {
    flex: 1,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 125,
    height: 125,
    borderRadius: 125 / 2,
  },
  text: {
    color: '#000000',
    fontSize: 30,
    fontWeight: '900',
    textAlign: 'center',
    marginVertical: height * 0.02,
  },
  linearGradient: {
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: width * 0.025,
    marginBottom: height * 0.02,
    borderRadius: 30,
    width: width * 0.3,
    height: height * 0.045,
  },
  bottonText: {
    color: '#ffffff',
    fontSize: 20,
    fontWeight: 'bold',
  },
  tabBarLabel: {
    color: '#000000',
    textAlign: 'center',
    fontSize: 17,
    fontWeight: '900',
  },
  tabView: {
    flex: 2,
    backgroundColor: '#ffffff',
    marginTop: height * 0.01,
  },
  modalView: {
    width: width * 0.85,
    // height: height * 0.3,
    borderRadius: 30,
    padding: 20,
  },
});