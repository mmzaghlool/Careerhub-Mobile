// Docs: https://reactnavigation.org/docs/en/drawer-navigator.html
// Ionicons: http://ionicons.com
// Brent Vatne: https://twitter.com/notbrent
// Eric Vicenti: https://twitter.com/EricVicenti
// Video Tutorial: https://www.youtube.com/watch?v=ZzhOjO-1dCs

import Qes from '../screens/qes'
import FirstScreen from '../screens/FirstScreen';
import Enter from '../screens/entertotest';

import * as React from 'react';
import { Text, View, Image, ScrollView, StyleSheet, Button, TouchableOpacity, Dimensions, Icon } from 'react-native';
import {
  createAppContainer,
  createStackNavigator,
  SafeAreaView,
  DrawerNavigator
} from 'react-navigation';
import { createDrawerNavigator , DrawerItems} from 'react-navigation-drawer';
const { height, width } = Dimensions.get('window')



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
    Enter:

  {
    screen: Enter,
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
      title: 'Groups And Communities',
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


