
import React, { useState, useEffect, useRef, useMemo } from 'react';
import { ScrollView ,StyleSheet, Text, View , Picker,Image, Dimensions , ActivityIndicator,TextInput, KeyboardAvoidingView,TouchableWithoutFeedback,Keyboard,Button ,StatusBar} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useSelector } from 'react-redux';
import ProductCard from '../../components/ProductCards';

const screen = Dimensions.get("window");


//Create the store and the combine reducers

const lightingProducts = [{  name :"Ampoule A", quantity :"150",img : require('../../assets/ampoulebms.jpg')},{  name :"Ampoule B", quantity :"250",img : require('../../assets/ampoulebms.jpg')},{  name :"Ampoule C", quantity :"130",img : require('../../assets/ampoulebms.jpg')}]

const IntereptProducts = [{  name :"Intérépteur A", quantity :"50",img : require('../../assets/inteBMS.jpg')},
{  name :"Prise C", quantity :"70",img : require('../../assets/prise2bMs.jpg')},
{  name :"Intérépteur C", quantity :"200",img : require('../../assets/inteBMS.jpg')}

]

const ResellerBmsStore = (props) =>{
    
    const allproducts = useSelector(state => state.products.products);
     
 



    return (
        
        <ScrollView style={styles.container}>
        <StatusBar hidden />

        <View style ={{height : screen.height*0.3 , backgroundColor :"#007184",width:"100%",flexDirection :"row",justifyContent:"space-around"}}>
            

            <View style = {{width : "100%" ,height:"100%"}}>
               <Image source ={ require ("../../assets/BMS_4.png") }style = {{height : "100%",width :"100%",resizeMode :"contain"}}/>

            </View>

            </View>

       {/*********************************** * FIRST CAtegory *********************************** */}
            <View style = {styles.textCategory}>
              
                <Text style = {styles.bestText}>Eclairages</Text> 

              
                  
 
          
            <TouchableOpacity  onPress = {()=>{props.navigation.navigate("AllProductsScreen",{category:"lampes",fromscreen :"BMS"})}}   >
                <Text style = {styles.showAll}>
                Tout Afficher
                </Text>
                </TouchableOpacity>
                
                
              
                </View>
            <ScrollView style ={{}} horizontal>
                
                 {

                    allproducts.map((e,index)=>{
                        if(e.category ==="lampes" && e.company ==="BMS")
                            return( <ProductCard 
                                    key = {index}
                                    name = {e.name} 
                                    quantity ={e.quantity}
                                    img = {e.img}
                                    can = {false}
                                    company = "BMS"

                />)


                    })


                 }  
               




            </ScrollView>

      {/*********************************** * Second CAtegory *********************************** */}


      <View style = {styles.textCategory}>
              
              <Text style = {styles.bestText}>Prises et Intérépteurs</Text> 

            
        
          <TouchableOpacity onPress = {()=>{props.navigation.navigate("AllProductsScreen",{category:"intpri",fromscreen :"BMS"})}}  >
              <Text style = {styles.showAll}>
              Tout Afficher
              </Text>
              </TouchableOpacity>
              
              
            
              </View>
          <ScrollView style ={{ marginBottom : 25 }} horizontal>
                 
          {

            allproducts.map((e,index)=>{
                if(e.category==="intpri" && e.company ==="BMS")
                            return( <ProductCard 
                                    key = {index}
                                    name = {e.name} 
                                    quantity ={e.quantity}
                                    img = {e.img}
                                    company = "BMS"
                    />)


                    })


                    }  





          </ScrollView>


        </ScrollView>

    )



}


ResellerBmsStore.navigationOptions= ()=>{
    return {
         headerTitle: "Magasin BMS"
    };
  }

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#dddfde',
   
    },

     ////////////////////////////////////////////////////////
   textCategory : {
    flexDirection : "row",
    justifyContent : "space-between",
     marginVertical : screen.width/24,
     marginHorizontal : screen.width/24,
    
     alignItems :"center"
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
  });
  


export default ResellerBmsStore;