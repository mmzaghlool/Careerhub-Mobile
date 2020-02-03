import {createAppContainer } from "react-navigation";
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
import Group from './screens/group'

const AppNavigator = createStackNavigator({
  Group:{
    screen:Group
  },
  Enter:{
    screen:Enter
  },
  Drawer:{
    screen:Drawer
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
Profile:{
  screen: Profile
},

}, {
  headerMode: 'none'
});


export default createAppContainer(AppNavigator);
