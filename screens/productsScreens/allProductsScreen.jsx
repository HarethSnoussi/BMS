
import React, { useState, useEffect, useRef, useMemo } from 'react';
import { ScrollView ,StyleSheet, Text, View , Picker,Image, Dimensions , ActivityIndicator,TextInput, KeyboardAvoidingView,TouchableWithoutFeedback,Keyboard,Button ,StatusBar} from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { HeaderButtons ,Item } from 'react-navigation-header-buttons';
import { useSelector } from 'react-redux';
import ProductCard from '../../components/ProductCards';
import HeaderButton from "../../components/HeaderButton";
const screen = Dimensions.get("window");


//Create the store and the combine reducers

const lightingProducts = [{id :"1",  name :"Ampoule A", quantity :"150",img : require('../../assets/ampoulebms.jpg')},{ id :"2", name :"Ampoule B", quantity :"250",img : require('../../assets/ampoulebms.jpg')},{id :"3",  name :"Ampoule C", quantity :"130",img : require('../../assets/ampoulebms.jpg')}]

const IntereptProducts = [{ id:"1", name :"Intérépteur A", quantity :"50",img : require('../../assets/inteBMS.jpg')},
{id :"2",  name :"Prise C", quantity :"70",img : require('../../assets/prise2bMs.jpg')},
{ id:"3", name :"Intérépteur C", quantity :"200",img : require('../../assets/inteBMS.jpg')}

]



const AllProductsScreen = (props) =>{

const allproducts = useSelector(state => state.products.products);

const [products ,setProducts] = props.navigation.getParam("category") ==="lighting" ? useState (lightingProducts) : useState (IntereptProducts) ;

const ge=  props.navigation.getParam("fromscreen") === "BMS" ? allproducts.filter(e => e.category ===props.navigation.getParam("category") && e.company === "BMS" ) : allproducts.filter(e => e.category ===props.navigation.getParam("category")  )  ;




    return (
        
        <View style={styles.container}>
     
          <FlatList data ={ge} style ={{marginTop : 15}} numColumns = {2} renderItem = {(itemData,index)=>{
              
                
                
                return( <ProductCard 
                                   name = {itemData.item.name} 
                                   quantity ={itemData.item.quantity}
                                   img = {itemData.item.img}
                                   can = {true}
                                   company = {itemData.item.company}

               />
               
               )




          }}>
                


           </FlatList>

        </View>

    )



}


AllProductsScreen.navigationOptions= (navData)=>{
    return {
         headerTitle: "Tous les produits",
         headerRight : () => ( <HeaderButtons HeaderButtonComponent = {HeaderButton} >
            <Item 
                title = "Cart"
                iconName = "add-circle"
                onPress = {()=>{ 

                    
                    navData.navigation.navigate("ManageProduct",{option:"Ajouter Un Produit",category:navData.navigation.getParam("category"),
                    fromscreen:navData.navigation.getParam("fromscreen")})
                    
                    }}
    
            />
    
    
         </HeaderButtons> ) 
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
  


export default AllProductsScreen;