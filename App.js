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
import Splash from './screens/splash'
const AppNavigator = createStackNavigator({

  // Drawer:{
  //   screen:Drawer
  // },
  // TestIndicat:{
  //   screen:TestIndicat
  // },
  Splash:{
    screen:Splash
  },
  FirstScreen: {
    screen: FirstScreen
  },
  Qes: {
    screen: Qes
  },
  Login: {
    screen: Login
  },
  Group:{
    screen:Group
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

}, {
  headerMode: 'none'
});


export default createAppContainer(AppNavigator);
