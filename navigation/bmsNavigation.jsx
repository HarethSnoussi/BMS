import React from 'react';
import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer,createSwitchNavigator} from 'react-navigation';
import {Platform} from 'react-native';

import {createMaterialBottomTabNavigator} from "react-navigation-material-bottom-tabs"


import {Ionicons,  MaterialIcons,Foundation,Fontisto} from "@expo/vector-icons";
import FirstScreen from '../screens/firstScreen';
import ResellerHomeScreen from '../screens/resellersScreens/resellerHomeScreen';
import MarketerHomeScreen from '../screens/marketersScreens/marketerHomeScreen';



const marketerHomeElements = {
    Magasin : {
            screen : MarketerHomeScreen ,
            navigationOptions : {
              tabBarLabel : "Accueil" ,
              tabBarColor : "#fff",
              tabBarIcon : ({tintColor}) => {
                return( <Ionicons name="ios-home"  
                size = {22} color ={tintColor}/>);
                  },  
          },
         
  
            
    } 
  };


  //Home page with Bottom Navigation Tab

const marketerHomeTabs = createMaterialBottomTabNavigator(marketerHomeElements, 
      
    {
      navigationOptions : {
        title :"",
        headerBackTitle : " " ,
        headerTintColor: Platform.OS === "android"? '#007184' : "rgba(53, 53, 53,1)" ,
        headerStyle:{
          backgroundColor: "transparent",
      },
      headerTransparent: true
      } ,
    activeColor: '#007184',
    inactiveColor : "#9d9da1",
    shifting : false ,
    labeled  : true,
    barStyle : {
        borderTopWidth : 0.5 ,
     backgroundColor : '#fff'
    
    },
    
    
    
    } ) ;


//Main Stack Navigator
const BmsNavigation = createStackNavigator({
    FirstScreen : FirstScreen ,
    MarketerHome : marketerHomeTabs ,
    ResellerHomeScreen : ResellerHomeScreen,
  
 },
 );

 
 const MainNavigation = createSwitchNavigator({

        Main: BmsNavigation
 })
 

export default createAppContainer(MainNavigation);
