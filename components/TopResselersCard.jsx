import React, { useState } from 'react';
import { StyleSheet, Text, View, Dimensions,Image,ImageBackground,TouchableOpacity,Platform
} from 'react-native'; 
import {Button , Rating, AirbnbRating,Avatar} from "react-native-elements";
import {useSelector } from 'react-redux';
import {Ionicons,  MaterialIcons,Entypo,Fontisto} from "@expo/vector-icons";

const screen = Dimensions.get("window");

const TopResselersCard = (props)=> {

    return(

        <TouchableOpacity onPress={props.navigateToBarberProfil} style = {styles.marketerContainer}>
        <View  style = {styles.marketerPictureContainer}>

         <ImageBackground blurRadius = {0.5} resizeMode = "stretch" style = {{width : "100%" ,height : "100%" ,alignItems : "center" , justifyContent : "center"}} source = {require("../assets/magasin.jpg")}>  
           <Avatar source = {require("../assets/images.jpg")}
              containerStyle = {styles.marketerPicture}
              rounded
              size= "large"
              />
              </ImageBackground>
        </View>
        <View style = {styles.marketerInfo}>
        <View style = {{alignSelf :"flex-start",marginTop : 35,marginLeft : 15,justifyContent :"space-around",}}>
        <Text style = {styles.name}>{props.surname + " "+props.name}</Text>
        <Text style = {styles.activite}>{props.activite}</Text>
        <Text style = {styles.info}>{props.wilaya +" - "+props.region}</Text>
        
        
        <Rating 
              imageSize={screen.width/18} 
              readonly
              startingValue= {props.mark === null ? 2.5 : props.mark}
              value = {props.mark === null ? 2.5 : props.mark}
              style={styles.rating }
                      
              type='custom'
              ratingBackgroundColor={'#323446'}
              tintColor='#fff' />
</View>
        <View style = {{width :"30%",marginRight : 25,marginTop :15,flexDirection :"row",justifyContent :"flex-end"}}>
  
        <Fontisto name="shopping-store"
      size={24}
      color="#007184"
      onPress = {props.navigate}
    /> 

     
        </View>

           

        </View>
    
  </TouchableOpacity>
    )



}


const styles= StyleSheet.create({
   
  ////////////////////////////////////////////////////////

  ///////////////////////////////////////////////////
  marketerContainer : {
    height : screen.height*0.4,
    width : screen.width * 0.95,
    alignSelf : "center",
    borderRadius : screen.width/50,
    overflow : "hidden",
    marginHorizontal : screen.width * 0.03,
    borderWidth : 0.3,
   marginVertical : 5
  },
  marketerPictureContainer : {
    width : "100%",
    height : "55%",
    
    alignItems : "center",
    justifyContent : "center",
  },
  marketerPicture : {
   borderWidth :1,
   width:screen.width/5.5,
   height:screen.width/5.5,
   position : "relative",
   top : 65,
   right : 135,
   borderColor :"white" ,
   borderWidth : 4
  },
  marketerInfo : {
    height : "40%",
    // justifyContent : "space-around",
 
    flexDirection :"row" ,
    justifyContent :"space-between",
    
    
  },
  rating : {
alignItems :"flex-start"
  },
   /////////////////////////////////////////////////
 info : {
   paddingVertical : 25 ,
    color : "#9d9da1",
    
    fontSize : screen.width/30
 },

 activite : {
  paddingTop : 20 ,
   color : "#9d9da1",
   
   fontSize : screen.width/30
},
 name : {
    
    color:"black",
 
    fontSize : screen.width/22,
    fontWeight : 'bold',
    
 },
 button : {
   alignSelf : "center",
   marginBottom:screen.width/72,
   paddingHorizontal:screen.width/14.4,
   borderRadius:screen.width/85
}
  
  });

export default TopResselersCard;