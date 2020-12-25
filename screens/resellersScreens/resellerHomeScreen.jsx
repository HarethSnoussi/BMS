
import React, { useState, useEffect, useRef, useMemo } from 'react';
import { ScrollView ,StyleSheet, Text, View , Picker,Image, Dimensions , ActivityIndicator,TextInput, KeyboardAvoidingView,TouchableWithoutFeedback,Keyboard,Button ,StatusBar} from 'react-native';

const screen = Dimensions.get("window");


//Create the store and the combine reducers


const ResellerHomeScreen = (props) =>{


    return (
        
        <ScrollView style={styles.container}>
        <StatusBar hidden />

        

        {/* ********************************************************************************** */}
  
                <View style ={{height : screen.height*0.3 , backgroundColor :"#007184",width:"100%",flexDirection :"row",justifyContent:"space-around"}}>
                <View style = {{width : "50%" ,height:"100%",justifyContent :"center",alignItems:"center"}}>
               
                   <Text style = {{fontSize : 28,color :"#fff",textAlign: 'center', 
    fontWeight: 'bold',}}>
                          Prises et Intérepteurs
                   </Text>
                  
<View style ={{marginTop : 15}}>
                   <Button title ="Tous les elements"  color ="#80b265"/>
</View>
                </View>


                <View style = {{width : "40%" ,height:"100%"}}>
                   <Image source ={ require ("../../assets/priseinterepteur.png") }style = {{height : "100%",width :"100%",resizeMode :"contain"}}/>

                </View>



                </View>
{/* ******************************************************************************************************************************* */}


                <View style ={{height : screen.height*0.3 , backgroundColor :"#ffdd2e",width:"100%",flexDirection :"row",justifyContent:"space-between"}}>
            

                <View style = {{width : "40%" ,height:"100%"}}>
                   <Image source ={ require ("../../assets/filetcable.png") }style = {{height : "100%",width :"100%",resizeMode :"contain"}}/>

                </View>

                <View style = {{width : "50%" ,height:"100%",justifyContent :"center",alignItems:"center",marginRight :15}}>
               
               <Text style = {{fontSize : 28,color :"#fff",textAlign: 'center', 
fontWeight: 'bold',}}>
                      Fil Et Cable Electrique
               </Text>
              
<View style ={{marginTop : 15}}>
               <Button title ="Tous les elements"  color ="#80b265"/>
</View>
            </View>



                </View>

{/* ******************************************************************************************************************************* */}

<View style ={{height : screen.height*0.3 , backgroundColor :"#dddfde",width:"100%",flexDirection :"row",justifyContent:"space-around"}}>
                <View style = {{width : "50%" ,height:"100%",justifyContent :"center",alignItems:"center"}}>
               
                   <Text style = {{fontSize : 28,color :"#fff",textAlign: 'center', 
    fontWeight: 'bold',}}>
                          Eclairage
                   </Text>
                  
<View style ={{marginTop : 15}}>
                   <Button title ="Tous les elements"  color ="#80b265"/>
</View>
                </View>


                <View style = {{width : "40%" ,height:"100%"}}>
                   <Image source ={ require ("../../assets/ampoule.png") }style = {{height : "100%",width :"100%",resizeMode :"contain"}}/>

                </View>



                </View>

{/* ********************************************************************************** */}
<View style ={{height : screen.height*0.3 , backgroundColor :"#ebd2ef",width:"100%",flexDirection :"row",justifyContent:"space-around"}}>
            

            <View style = {{width : "40%" ,height:"100%"}}>
               <Image source ={ require ("../../assets/bmsLogotr.png") }style = {{height : "100%",width :"100%",resizeMode :"contain"}}/>

            </View>

            <View style = {{width : "50%" ,height:"100%",justifyContent :"center",alignItems:"center",marginRight :15}}>
           
           <Text style = {{fontSize : 28,color :"#fff",textAlign: 'center', 
fontWeight: 'bold',}}>
                  Fil Et Cable Electrique
           </Text>
          
<View style ={{marginTop : 15}}>
           <Button title ="Tous les elements"  color ="#80b265"/>
</View>
        </View>



            </View>
        </ScrollView>

    )



}


ResellerHomeScreen.navigationOptions= ()=>{
    return {
         headerTitle: "Magasin"
    };
  }

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#454555',
   
    },
  });
  


export default ResellerHomeScreen;