import React from 'react';
import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer,createSwitchNavigator} from 'react-navigation';
import {Platform} from 'react-native';

import {createMaterialBottomTabNavigator} from "react-navigation-material-bottom-tabs"


import {Ionicons,  MaterialIcons,Foundation} from "@expo/vector-icons";
import FirstScreen from '../screens/firstScreen';
import LoginScreen from '../screens/authentification/login';
import SignupScreen from '../screens/authentification/signup';

//Main Stack Navigator
const BmsNavigation = createStackNavigator({
    FirstScreen : FirstScreen 
 },
 );

 
 const MainNavigation = createSwitchNavigator({

        Main: LoginScreen,
        Signup:SignupScreen
 })
 

export default createAppContainer(MainNavigation);
