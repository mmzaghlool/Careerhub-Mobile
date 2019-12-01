// Docs: https://reactnavigation.org/docs/en/drawer-navigator.html
// Ionicons: http://ionicons.com
// Brent Vatne: https://twitter.com/notbrent
// Eric Vicenti: https://twitter.com/EricVicenti
// Video Tutorial: https://www.youtube.com/watch?v=ZzhOjO-1dCs

import TestIndicator from '../screens/testindicat';
import Qes from '../screens/qes'
import Login from './login'
import * as React from 'react';
import { Text, View, Image, ScrollView, StyleSheet, Button, TouchableOpacity, Dimensions, Icon } from 'react-native';
import {
  createDrawerNavigator,
  createAppContainer,
  createStackNavigator,
  DrawerItems,
  SafeAreaView,
  DrawerNavigator
} from 'react-navigation';

const { height, width } = Dimensions.get('window')
import NavigationDrawerLayout from 'react-native-navigation-drawer-layout';



class B extends React.Component {
  
  render() {


    return (
      <View>
        <View style={{ alignItems: 'center', marginTop: 35, marginBottom: 50, alignItems: 'center' }}>
          <Image
            source={require('../assets/icons/images.jpg')}
            style={{ width: 90, height: 90, borderRadius: 25, borderColor: 'black', borderWidth: 2 }} />
        </View>
        <View>
          <DrawerItems {...this.props}  />
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
    TestIndicator:

  {
    screen: TestIndicator,
    navigationOptions: {
      title: 'View Profile',
      drawerIcon: <Image
        source={require('../assets/icons/cap.png')}
        style={styles.icon} />
    },

  },
  Qes:
  {
    screen: Qes,
    navigationOptions: {
      title: 'Browse recommended courses',
      drawerIcon: <Image
        source={require('../assets/icons/cap.png')}
        style={styles.icon} />


    },
  },
  Header:
  {
    screen: Header,
    navigationOptions: {
      title: 'Messenger',
      drawerIcon: <Image
        source={require('../assets/icons/cap.png')}
        style={styles.icon} />
    },
  },
  groups:
  {
    screen: Header,
    navigationOptions: {
      title: 'Groups And Communities',
      drawerIcon: <Image
        source={require('../assets/icons/cap.png')}
        style={styles.icon} />
    },
  },
  logout:
  {
    screen: Header,
    navigationOptions: {
      title: 'Log Out',
      drawerIcon: <Image
        source={require('../assets/icons/cap.png')}
        style={styles.icon} />
    },
    
  }


},
  {
    contentComponent: B,
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


