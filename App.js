import { StatusBar } from 'expo-status-bar';
import React,{useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import BmsNavigation from './navigation/bmsNavigation';
import {createStore,combineReducers,applyMiddleware} from 'redux';
import ReduxThunk from "redux-thunk";

import {Provider} from 'react-redux';
import {enableScreens} from 'react-native-screens';
import {AppLoading} from 'expo';
import productsReducer from './store/reducers/productsReducer';


export default function App() {

  enableScreens();

  //Create the store and the combine reducers

  const rootReducer = combineReducers({
    products : productsReducer
  });

const store = createStore(rootReducer, applyMiddleware(ReduxThunk));

  return (
    <Provider store={store}><BmsNavigation /></Provider> 
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
