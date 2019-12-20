import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  StatusBar,
  TouchableOpacity,
  Dimensions,
} from 'react-native';

import LinearGradient from 'react-native-linear-gradient';
import { TabView, SceneMap } from 'react-native-tab-view';
import { TabBar } from 'react-native-tab-view';
import { Avatar, Icon } from 'react-native-elements';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';


import Posts from './Posts'
import Skills from './Skills'
import Achievements from './Achievements'
import SociaMedia from './SocialMedia'

const { height, width } = Dimensions.get('window')

const FirstRoute = () => (
  <Posts />
);

const SecondRoute = () => (
  <Skills />
);

const ThirdRoute = () => (
  <Achievements />
);

const FourthRoute = () => (
  <SociaMedia />
);

export default class Profile extends Component {
  state = {
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
  };

  render() {
    return (
      <View style={styles.screen}>
        <View style={styles.header}>
          <View style={styles.headerIcon}>
            <Icon
              name="keyboard-backspace"
              size={35}
              color='#382d4b'
            />
          </View>

          <View style={[styles.headerIcon, {marginTop: height * 0.02}]}>
            <MaterialCommunityIcons
              name="alert-octagon"
              size={40}
              color='#382d4b'
            />
          </View>
        </View>

        <View style={styles.basicBackground}>
          <Avatar
            style={styles.image}
            rounded
            size="xlarge"
            source={{
              uri:
                'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
            }}
          />

          <Text style={styles.text}>
            Name
          </Text>

          <View>
            <TouchableOpacity
              style={styles.bottonText}
              onPress={() => this.props.navigation.navigate('')}>
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
          </View>
        </View >

        <TabView
          style={styles.tabView}
          navigationState={this.state}
          renderScene={SceneMap({
            first: FirstRoute,
            second: SecondRoute,
            third: ThirdRoute,
            fourth: FourthRoute,
          })}

          renderTabBar={props =>
            <TabBar
              {...props}
              indicatorStyle={{ height: 0 }}
              style={{ backgroundColor: '#ffffff' }}
              tabStyle={{
                width: 'auto',
                height: 25,
                backgroundColor: '#382d4b',
                borderRadius: 30,
                marginHorizontal: 7,
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
      </View >
    );
  }
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#ffffff'
  },
  header: {
    justifyContent: 'space-between',
    height: '7%',
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
    color: '#ffffff',
    textAlign: 'center',
    fontSize: 17,
    fontWeight: '900',
  },
  tabView: {
    flex: 2,
    backgroundColor: '#ffffff',
    marginTop: height * 0.01,
  },
});