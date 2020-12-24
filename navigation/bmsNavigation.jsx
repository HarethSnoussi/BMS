import React from 'react';
import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer,createSwitchNavigator} from 'react-navigation';
import {Platform} from 'react-native';

import {createMaterialBottomTabNavigator} from "react-navigation-material-bottom-tabs"


import {Ionicons,  MaterialIcons,Foundation} from "@expo/vector-icons";
import FirstScreen from '../screens/firstScreen';



//Main Stack Navigator
const BmsNavigation = createStackNavigator({
    FirstScreen : FirstScreen 
 },
 );

 
 const MainNavigation = createSwitchNavigator({

        Main: BmsNavigation
 })
 

export default createAppContainer(MainNavigation);
