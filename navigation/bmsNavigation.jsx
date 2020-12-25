import React from 'react';
import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer,createSwitchNavigator} from 'react-navigation';
import {Platform} from 'react-native';

import {createMaterialBottomTabNavigator} from "react-navigation-material-bottom-tabs"


import {AntDesign,MaterialIcons} from "@expo/vector-icons";

import ResellerHomeScreen from '../screens/resellersScreens/resellerHomeScreen';
import MarketerHomeScreen from '../screens/marketersScreens/marketerHomeScreen';


import LoginScreen from '../screens/authentification/login';
import SignupScreen from '../screens/authentification/signup';
import MarketerProfile from '../screens/marketersScreens/marketerProfile';
import MyResellers from '../screens/marketersScreens/myResellers';
import AddReseller from '../screens/marketersScreens/addReseller';

const marketerHomeElements = {
    Accueil : {
            screen : MarketerHomeScreen ,
            navigationOptions : {
              tabBarLabel : "Accueil" ,
              tabBarColor : "#fff",
              tabBarIcon : ({tintColor}) => {
                return( <AntDesign name="home"  
                size = {22} color ={tintColor}/>);
                  },  
          },
         
  
            
    } ,

    Profile : {
      screen : MarketerProfile ,
      navigationOptions : {
        tabBarLabel : "Profile" ,
        tabBarColor : "#fff",
        tabBarIcon : ({tintColor}) => {
          return( <MaterialIcons name="person-outline"  
          size = {22} color ={tintColor}/>);
            },  
    },
   

      
} ,

MyResellers : {
  screen : MyResellers ,
  navigationOptions : {
    tabBarLabel : "Mes Revenderus" ,
    tabBarColor : "#fff",
    tabBarIcon : ({tintColor}) => {
      return( <AntDesign name="home"  
      size = {22} color ={tintColor}/>);
        },  
},


  
} ,

Add : {
  screen : AddReseller ,
  navigationOptions : {
    tabBarLabel : "Ajouter" ,
    tabBarColor : "#fff",
    tabBarIcon : ({tintColor}) => {
      return( <AntDesign name="home"  
      size = {22} color ={tintColor}/>);
        },  
},


  
} ,

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
    
    MarketerHome : marketerHomeTabs ,
    ResellerHomeScreen : ResellerHomeScreen,
  
 },
 );

 
 const MainNavigation = createSwitchNavigator({
  Main: LoginScreen,
  Signup:SignupScreen,
     navigation : BmsNavigation ,
        
 })
 

export default createAppContainer(MainNavigation);
