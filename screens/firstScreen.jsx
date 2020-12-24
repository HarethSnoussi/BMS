import React, { useState, useEffect, useRef, useMemo } from 'react';
import { StyleSheet, Text, View , Picker,Image, Dimensions , ActivityIndicator,TextInput, KeyboardAvoidingView,TouchableWithoutFeedback,Keyboard} from 'react-native';



//Create the store and the combine reducers


const FirstScreen = (props) =>{


    return (
        <View style={styles.container}>
                <Text>Open  up App.js to start working on your app!</Text>
                
        </View>

    )



}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
  


export default FirstScreen;