// Docs: https://reactnavigation.org/docs/en/drawer-navigator.html
// Ionicons: http://ionicons.com
// Brent Vatne: https://twitter.com/notbrent
// Eric Vicenti: https://twitter.com/EricVicenti
// Video Tutorial: https://www.youtube.com/watch?v=ZzhOjO-1dCs

import Qes from '../screens/qes'
import FirstScreen from '../screens/FirstScreen';
import Enter from '../screens/entertotest';
import HomeScreen from '../screens/HomeScreen'
import Profile from '../screens/Profile/Profile'

import * as React from 'react';
import { Text, View, Image, ScrollView, StyleSheet, Button, TouchableOpacity, Dimensions, Icon } from 'react-native';
import {
  createAppContainer,
  createStackNavigator,
  SafeAreaView,
  DrawerNavigator
} from 'react-navigation';
import { createDrawerNavigator, DrawerItems } from 'react-navigation-drawer';
const { height, width } = Dimensions.get('window')



class Drawer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

      avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg'
    };
  }
  async componentDidMount() {
    const user = await this.props.navigation.state.params.haz;
    console.log('ff', this.props.navigation.state.params.haz)
    console.log('user Profile', this.props.navigation.state.params.haz);
    console.log('user Profile', user);

    this.setState({ ...user })
    console.log(this.state)
  }
  render() {
    const { avatar, firstName, lastName, user, skills, social, spinner, modal, show, send } = this.state;
    console.log(avatar)

    return (
      <View>
        <View style={{ alignItems: 'center', marginTop: 35, marginBottom: 50, alignItems: 'center' }}>
          <Image
            source={require('../assets/icons/images.jpg')}
            source={{
              uri:
                avatar,
            }}
            style={{ width: 90, height: 90, borderRadius: 25, borderColor: 'black', borderWidth: 2 }} />
        </View>
        <View>
          <DrawerItems {...this.props} />
        </View>

      </View>

    );
  }
}

const styles = StyleSheet.create({
  icon: {
    width: 20,
    height: 20,
    borderRadius: 20,
    marginLeft: 5,
    tintColor: 'black'
  },
});
const MyDrawerNavigator = createDrawerNavigator({
  HomeScreen:

  {
    screen: HomeScreen,
    navigationOptions: {
      title: 'Home',
      drawerIcon: <Image
        source={require('../assets/icons/cap.png')}
        style={styles.icon} />
    },

  },
  Profile:
  {
    screen: Profile,
    navigationOptions: {
      title: 'View Profile',
      drawerIcon: <Image
        source={require('../assets/icons/cap.png')}
        style={styles.icon} />


    },
  },
  FirstScreen:
  {
    screen: FirstScreen,
    navigationOptions: {
      title: 'Messenger',
      drawerIcon: <Image
        source={require('../assets/icons/cap.png')}
        style={styles.icon} />
    },
  },
  groups:
  {
    screen: Enter,
    navigationOptions: {
      title: 'Personality Test',
      drawerIcon: <Image
        source={require('../assets/icons/cap.png')}
        style={styles.icon} />
    },
  },
  logout:
  {
    screen: Enter,
    navigationOptions: {
      title: 'Log Out',
      drawerIcon: <Image
        source={require('../assets/icons/cap.png')}
        style={styles.icon} />
    },

  }


},
  {
    contentComponent: Drawer,
    drawerType: 'slide',
    contentOptions: {
      labelStyle: {
        marginLeft: 0,

      },
      activeTintColor: 'red',

    },



  }
)


export default createAppContainer(MyDrawerNavigator);


