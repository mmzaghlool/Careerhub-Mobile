import { createAppContainer } from "react-navigation";
import { createStackNavigator } from 'react-navigation-stack';
import Qes from './screens/qes';
import FirstScreen from './screens/FirstScreen';
import Login from './screens/Registration/Login/Login';
import ForgetPassword1 from './screens/Registration/Login/ForgetPassword1';
import ForgetPassword2 from './screens/Registration/Login/ForgetPassword2';
import ForgetPassword3 from './screens/Registration/Login/ForgetPassword3';
import Indicator from './screens/Registration/Signup/Indicator';
import Enter from './screens/entertotest';
import Drawer from './components/drawer'
import Profile from './screens/Profile/Profile'
import EditProfile from './screens/Profile/EditProfile'
import Group from './screens/group'
import HomeScreen from './screens/HomeScreen'
import Community from './screens/Community'
import Courses from './screens/Courses';
import Tracks from './screens/Tracks';
import ChatList from './screens/chats/chatList'
import ChatBot from './screens/chats/chatBot'

import Chat from './screens/chats/chat'
const AppNavigator = createStackNavigator({
  FirstScreen: {
    screen: FirstScreen
  },

  ChatBot: {
    screen: ChatBot
  },
  HomeScreen: {
    screen: HomeScreen
  },
  Chat: {
    screen: Chat
  },
  ChatList: {
    screen: ChatList
  },
  Login: {
    screen: Login
  },
  Drawer: {
    screen: Drawer
  },
  Qes: {
    screen: Qes
  },
  // TestIndicat:{
  //   screen:TestIndicat
  // },

  Group: {
    screen: Group
  },
  ForgetPassword1: {
    screen: ForgetPassword1
  },
  ForgetPassword2: {
    screen: ForgetPassword2
  },
  ForgetPassword3: {
    screen: ForgetPassword3
  },
  Indicator: {
    screen: Indicator
  },
  Profile: {
    screen: Profile
  },
  EditProfile: {
    screen: EditProfile
  },
  Community: {
    screen: Community
  },
  Tracks: {
    screen: Tracks
  },
  Courses: {
    screen: Courses
  },
}, {
  headerMode: 'none'
});


export default createAppContainer(AppNavigator);
