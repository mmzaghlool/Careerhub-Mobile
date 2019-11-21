import {createAppContainer } from "react-navigation";
import { createStackNavigator } from 'react-navigation-stack';
import TestIndicat from './screens/testindicat'
import Qes from './screens/qes'

const AppNavigator = createStackNavigator({

  TestIndicat:{
    screen:TestIndicat
  },
  Qes:{
    screen:Qes
  },
  

}, {
  headerMode: 'none'
});


export default createAppContainer(AppNavigator);
