import React, { useState } from 'react';
import { StyleSheet, Text, View, Dimensions,Image,ImageBackground,TouchableOpacity,Platform
} from 'react-native'; 
import {Button , Rating, AirbnbRating,Avatar} from "react-native-elements";
import {useSelector } from 'react-redux';


const screen = Dimensions.get("window");

const TopResselersCard = (props)=> {

    return(

        <TouchableOpacity onPress={props.navigateToBarberProfil} style = {styles.barberContainer}>
        <View  style = {styles.barberPictureContainer}>

         <ImageBackground blurRadius = {1} resizeMode = "stretch" style = {{width : "100%" ,height : "100%" ,alignItems : "center" , justifyContent : "center"}} source = {require("../assets/magasin.jpg")}>  
           <Avatar source = {require("../assets/images.jpg")}
              containerStyle = {styles.barberPicture}
              rounded
              size= "large"
              />
              </ImageBackground>
        </View>
        <View style = {styles.barberInfos}>
            <Text style = {styles.name}>{props.surname + " "+props.name}</Text>
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

        
          
                    
            <Button 
              buttonStyle ={styles.button}
              title = "Magasin" 
              titleStyle = {{color :"#fff",fontSize : screen.width/30}}
              onPress = {props.navigate}
              linearGradientProps={{
                        colors: ['#007184', '#007188'],
                        start: {x: 0, y: 0} ,
                        end:{x: 1, y: 0}
                    }}
              />

        </View>
    
  </TouchableOpacity>
    )



}


const styles= StyleSheet.create({
   
  ////////////////////////////////////////////////////////

  ///////////////////////////////////////////////////
  barberContainer : {
    height : screen.height*0.4,
    width : screen.width * 0.95,
    alignSelf : "center",
    borderRadius : screen.width/50,
    overflow : "hidden",
    marginHorizontal : screen.width * 0.03,
    borderWidth : 0.3,
   marginVertical : 5
  },
  barberPictureContainer : {
    width : "100%",
    height : "60%",
    overflow : "hidden",
    alignItems : "center",
    justifyContent : "center",
  },
  barberPicture : {
   borderWidth :1,
   width:screen.width/5.5,
   height:screen.width/5.5
  },
  barberInfos : {
    height : "40%",
    justifyContent : "space-around",
    overflow : "hidden"
  },
  rating : {
  
  },
   /////////////////////////////////////////////////
 info : {
   
    color : "#9d9da1",
    alignSelf : "center",
    fontSize : screen.width/30
 },
 name : {
    
    color:"black",
    alignSelf : "center",
    fontSize : screen.width/24
 },
 button : {
   alignSelf : "center",
   marginBottom:screen.width/72,
   paddingHorizontal:screen.width/14.4,
   borderRadius:screen.width/18
}
  
  });

export default TopResselersCard;