import {createAppContainer } from "react-navigation";
import { createStackNavigator } from 'react-navigation-stack';
import TestIndicat from './screens/testindicat'

const AppNavigator = createStackNavigator({

  TestIndicat:{
    screen:TestIndicat
  },
  

}, {
  headerMode: 'none'
});


export default createAppContainer(AppNavigator);
