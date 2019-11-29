import {createAppContainer } from "react-navigation";
import { createStackNavigator } from 'react-navigation-stack';
import TestIndicat from './screens/testindicat'
import Qes from './screens/qes';
import FirstScreen from './FirstScreen';
import Login from './Registration/Login/Login';
import ForgetPassword1 from './Registration/Login/ForgetPassword1';
import ForgetPassword2 from './Registration/Login/ForgetPassword2';
import ForgetPassword3 from './Registration/Login/ForgetPassword3'; 
import Indicator from './Registration/Signup/Indicator';

const AppNavigator = createStackNavigator({

  FirstScreen:{
    screen:FirstScreen
  },

  TestIndicat:{
    screen:TestIndicat
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
