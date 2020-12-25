import React ,{useEffect, useState,useCallback,useRef}  from 'react';
import { StyleSheet, Text, View, ImageBackground , Image ,Dimensions , StatusBar,ActivityIndicator,ScrollView, TouchableOpacity,LogBox } from 'react-native';
import Constants from 'expo-constants';
import {Ionicons,  MaterialIcons,Foundation} from "@expo/vector-icons";
import {Button ,Overlay} from 'react-native-elements';
import { useDispatch,useSelector } from 'react-redux';
import TopResselersCard from '../../components/TopResselersCard';
import { SearchBar } from 'react-native-elements';


const screen = Dimensions.get("window");



const MarketerHomeScreen = props =>{


    return(

        <View style ={styles.container}>
      
        <StatusBar hidden />
     
        <ScrollView  >
  
        <ImageBackground source = {require("../../assets/eclairage.jpg")} style ={{height : screen.height*0.3 , backgroundColor :"#007184",width:"100%",justifyContent :"space-between",alignItems :"flex-end"}}>
        <SearchBar
                placeholder="Wilaya"
                containerStyle = {styles.searchBar}
             
                inputContainerStyle = {{
                        borderRadius : screen.width/14.4
                }}
                lightTheme = {true}
                searchIcon = {{color : "#ffdd2e", size : screen.width/14.4}}

              />

      
             
  <View style = {{width : "100%" ,height:"30%",alignItems :"flex-end"}}>
                   <Image source ={ require ("../../assets/translogo.png") }style = {{height : "100%",width :"60%",resizeMode :"contain"}}/>

                </View>

           



                </ImageBackground>
  
 
            <View style = {styles.textTopMarketers}>
                  <Text style = {styles.bestText}>Nos Revendeurs</Text> 
              
                </View>
             
             <ScrollView  style ={styles.topMarketers}  showsHorizontalScrollIndicator  = {false} >


           

                                                    <TopResselersCard 
                                                            
                                                            name = "1"
                                                            surname = "Revendeur"
                                                            phone = "+213 557 11 54 51"
                                                            region = "Blida"
                                                            wilaya = "Blida"
                                                            mark = {2.5}
                                                            navigate = {()=>props.navigation.navigate("ResellerHomeScreen")}
                                                            activite = "Electricien"
                                                            />

                                                <TopResselersCard 
                                                            
                                                            name = "2"
                                                            surname = "Revendeur"
                                                            phone = "+213 557 11 54 51"
                                                            region = "Kouba"
                                                            wilaya = "Alger"
                                                            mark = {2.5}
                                                            activite = "Quincaillerie"
                                                        
                                                            />


                                                <TopResselersCard 
                                                            
                                                            name = "3"
                                                            surname = "Revendeur"
                                                            phone = "+213 557 11 54 51"
                                                            region = "Adrar"
                                                            wilaya = "Adrar"
                                                            mark = {2.5}
                                                            activite = "Grossiste"
                                                        
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
   textTopMarketers : {
     flexDirection : "row",
     justifyContent : "space-between",
      marginVertical : screen.width/24,
      marginHorizontal : screen.width/24,
     
      alignItems :"center"
   },

  topMarketers : {
   
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
    
    borderTopWidth : 0 , 
    borderBottomWidth : 0 ,
    marginTop :15
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