import { StatusBar } from 'expo-status-bar';
import React,{useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import BmsNavigation from './navigation/bmsNavigation';
import {createStore,combineReducers,applyMiddleware} from 'redux';
import ReduxThunk from "redux-thunk";

import {Provider} from 'react-redux';
import {enableScreens} from 'react-native-screens';
import {AppLoading} from 'expo';
const fetchFonts = () =>{
  return Font.loadAsync({
     'poppins': require('./assets/fonts/Poppins-Regular.ttf'),
     'poppins-bold': require('./assets/fonts/Poppins-Bold.ttf')
  });
};

export default function App() {


//   const rootReducer = combineReducers({
   
//   });

// const store = createStore(rootReducer, applyMiddleware(ReduxThunk));
const [fontLoaded, setFontLoaded] = useState(false);

if(!fontLoaded){
  return(
    <AppLoading 
     startAsync={fetchFonts}
     onFinish={()=> setFontLoaded(true)}
    />
  )
}
  return (
    <BmsNavigation />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
