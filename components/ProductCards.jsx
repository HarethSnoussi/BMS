
import React, { useState, useEffect, useRef, useMemo } from 'react';
import { ScrollView ,StyleSheet, Text, View , Picker,Image, Dimensions , ActivityIndicator,TextInput, KeyboardAvoidingView,TouchableWithoutFeedback,Keyboard,Button ,StatusBar} from 'react-native';
import {MaterialIcons} from "@expo/vector-icons";

const screen = Dimensions.get("window");

const ProductCard = props =>{

return(
<View style ={{height : screen.height*0.35  ,width :screen.width * 0.45,borderWidth : 0.3,backgroundColor :"#fff",justifyContent:"space-between", marginLeft : screen.width/24,marginBottom : screen.width/24}}>

<View style = {{width : "100%" ,height : "60%"}}>
<Image source ={props.img} style = {{height : "100%",width :"100%",resizeMode :"contain"}}/>

         </View>
<View style = {{height : "30%",marginLeft : 15,flexDirection :"row",justifyContent :"space-between"}}>
<View>
<Text style = {{fontWeight :"bold"}}>{props.name}</Text>
<Text style = {{fontWeight :"bold",color :"#80b265"}}>Quantité : {props.quantity}</Text>
<Text style = {{fontWeight :"bold",color :"#007184"}}>Société : {props.company}</Text>

</View>
 {
props.can === true &&
    <View style ={{justifyContent :"space-between",marginRight : 4,marginBottom : 4}}>
<MaterialIcons  name="edit" size={20} color="#007184" />

<MaterialIcons name="delete-forever" size={20} color="red" />
</View>

 }


</View>


</View>

)



}


export default ProductCard;