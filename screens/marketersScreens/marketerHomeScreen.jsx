import React ,{useEffect, useState,useCallback,useRef}  from 'react';
import { StyleSheet, Text, View, ImageBackground , Image ,Dimensions , StatusBar,ActivityIndicator,ScrollView, TouchableOpacity,LogBox } from 'react-native';
import Constants from 'expo-constants';
import * as Notifications from 'expo-notifications';
import * as Permissions from 'expo-permissions';
import {Badge} from 'react-native-elements'

import {Ionicons,  MaterialIcons,Foundation} from "@expo/vector-icons";
import {Button ,Overlay} from 'react-native-elements';
import { useDispatch,useSelector } from 'react-redux';
import TopResselersCard from '../../components/TopResselersCard';



const screen = Dimensions.get("window");



const MarketerHomeScreen = props =>{


    return(

        <View style ={styles.container}>
      
        <StatusBar hidden />
     
        <ScrollView  >
  
        <ImageBackground source = {require("../../assets/eclairage.jpg")} style ={{height : screen.height*0.3 , backgroundColor :"#007184",width:"100%",justifyContent :"flex-end",alignItems :"flex-end"}}>


      
             
  <View style = {{width : "100%" ,height:"30%",alignItems :"flex-end"}}>
                   <Image source ={ require ("../../assets/translogo.png") }style = {{height : "100%",width :"60%",resizeMode :"contain"}}/>

                </View>

           



                </ImageBackground>
  
 
            <View style = {styles.textTopBarbers}>
                  <Text style = {styles.bestText}>Meilleurs Revendeurs</Text> 
                  <TouchableOpacity  
                  onPress={() =>props.navigation.navigate("AllBarbers",{type : client[0].sex ==="Homme" ? "coiffeurs" : "coiffeuses",clientID,overCpt : allBookings.length})} >
                  <Text style = {styles.showAll}>
                  Tout Afficher
                  </Text>
                  </TouchableOpacity>
                </View>
             
             <ScrollView  style ={styles.topBarbers}  showsHorizontalScrollIndicator  = {false} >


           

                                                    <TopResselersCard 
                                                            
                                                            name = "Hareth"
                                                            surname = "Snousi"
                                                            phone = "+213 557 11 54 51"
                                                            region = "Blida"
                                                            wilaya = "Blida"
                                                            mark = {2.5}
                                                            
                                                            navigate = {()=>props.navigation.navigate("ResellerHomeScreen")}
                                                            />

                                                <TopResselersCard 
                                                            
                                                            name = "Hareth"
                                                            surname = "Snousi"
                                                            phone = "+213 557 11 54 51"
                                                            region = "Blida"
                                                            wilaya = "Blida"
                                                            mark = {2.5}
                                                            
                                                        
                                                            />


                                                <TopResselersCard 
                                                            
                                                            name = "Hareth"
                                                            surname = "Snousi"
                                                            phone = "+213 557 11 54 51"
                                                            region = "Blida"
                                                            wilaya = "Blida"
                                                            mark = {2.5}
                                                            
                                                        
                                                            />
                                                
   

 </ScrollView>
  
            </ScrollView>
             
         
          
          

  </View>
     
       );    
  
      

    
}

const styles= StyleSheet.create({
    container : {
        flex : 1,
        backgroundColor : "#fff",
        

    },
    /////////////////////////////////////////////
    firstImage : {
      width : screen.width,
      height : screen.height * 0.35 ,
      overflow : "hidden",
     backgroundColor : "#007184",
 
    } ,
    image : {
      height : "100%",
      width : "100%",
     
     
  },
  
  unAvailable : {
    height : "5%",
    width : "90%",
    alignSelf : "center",
    justifyContent : "center"
  
  },
  ////////////////////////////////////////////////////////
   textTopBarbers : {
     flexDirection : "row",
     justifyContent : "space-between",
      marginTop : screen.width/24,
      marginHorizontal : screen.width/24,
     
      alignItems :"center"
   },
   topSalons : {
    width : "100%",
    height : screen.height * 0.4 ,
  
  },
  topBarbers : {
   
    width : "100%",
   
   
  },
  bestText :{
    fontSize : screen.width/22,
   
    color:"black",
    fontWeight :"bold"
  },
  showAll : {
   
    color : "#007184",
    fontSize :screen.width/30,
    
  
  },
  titleText : {
   
      fontSize :screen.width/24,
      color : "#FFF"
  
  },
  ///////////////////////////////////////////////////
  
   /////////////////////////////////////////////////
   searchBar :{
    width : "80%" , 
    alignSelf : "center",
    borderRadius : screen.width/18 , 
    backgroundColor : "rgba(52, 52, 52, 0)" ,
    marginTop : screen.width/24,
    borderTopWidth : 0 , 
    borderBottomWidth : 0 
    },
  
    firstTitle : {
   
      alignSelf : "center",
      alignItems : "center",
    borderRadius : screen.width/24,
    
    justifyContent : "center",
 
  
    },
    centered: {
      flex:1,
     alignItems:'center',
     justifyContent:'center',
     width:'100%',
     height:'100%',
     resizeMode:'cover'
    }
  
     
  
  });
  
export default MarketerHomeScreen ;