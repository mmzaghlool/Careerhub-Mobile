import {createAppContainer } from "react-navigation";
import { createStackNavigator } from 'react-navigation-stack';
import TestIndicat from './screens/testindicat'
import Qes from './screens/qes';
import FirstScreen from './screens/FirstScreen';
import Login from './screens/Registration/Login/Login';
import ForgetPassword1 from './screens/Registration/Login/ForgetPassword1';
import ForgetPassword2 from './screens/Registration/Login/ForgetPassword2';
import ForgetPassword3 from './screens/Registration/Login/ForgetPassword3'; 
import Indicator from './screens/Registration/Signup/Indicator';
import Drawer from './components/drawer'

const AppNavigator = createStackNavigator({

  Drawer:{
    screen:Drawer
  },
  TestIndicat:{
    screen:TestIndicat
  },
  FirstScreen:{
    screen:FirstScreen
  },  
  Qes:{
    screen:Qes
  },
  Login:{
    screen: Login
},
ForgetPassword1:{
    screen: ForgetPassword1
},
ForgetPassword2:{
    screen: ForgetPassword2
},
ForgetPassword3:{
    screen: ForgetPassword3
}, 
Indicator:{
    screen: Indicator
},

}, {
  headerMode: 'none'
});


export default createAppContainer(AppNavigator);
