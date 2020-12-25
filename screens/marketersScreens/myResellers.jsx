
import React, { useState, useEffect, useRef, useMemo } from 'react';
import { StyleSheet, Text, View ,Button,Image, Dimensions , ActivityIndicator,TextInput, KeyboardAvoidingView,TouchableWithoutFeedback,Keyboard} from 'react-native';



//Create the store and the combine reducers


const MyResellers = (props) =>{


    return (
        <View style={styles.container}>
                <Text>Resselers that i have provided Informations</Text>
             
                
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
  


export default MyResellers;