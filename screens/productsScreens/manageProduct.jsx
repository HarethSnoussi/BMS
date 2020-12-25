
import React, { useState, useEffect, useCallback, useReducer } from 'react';
import { StyleSheet,View,ScrollView,KeyboardAvoidingView,TouchableWithoutFeedback,Keyboard,Text,Image,ImageBackground,StatusBar,TextInput,TouchableOpacity,Picker,ActionSheetIOS,Alert,ActivityIndicator,AsyncStorage,Dimensions,Platform} from 'react-native';
import Colors from '../../constants/Colors';
import {Button} from 'react-native-elements';
import InputProfile from '../../components/InputProfile';
import {MaterialIcons,MaterialCommunityIcons,Ionicons} from "@expo/vector-icons";
import { LinearGradient } from 'expo-linear-gradient';
import { useDispatch, useSelector } from 'react-redux';
import { addProduct } from '../../store/actions/productsActions';

const screen = Dimensions.get('window');


//Create the store and the combine reducers
const Form_Input_Update = 'Form_Input_Update';
const formReducer=(state,action) =>{
    if(action.type === Form_Input_Update){
        const updatedValues = {
          ...state.inputValues,
          [action.inputID]:action.value
        };
        const updatedValidities = {
          ...state.inputValidities,
          [action.inputID]:action.isValid
        };
        let formIsValidUpdated = true;
        for(const key in updatedValidities){
          formIsValidUpdated = formIsValidUpdated && updatedValidities[key];
        }
        return{
          inputValues:updatedValues,
          inputValidities:updatedValidities,
          formIsValid:formIsValidUpdated
        };
    }
   
     return state;
    
};

const ManageProduct = (props) =>{

    const dispatch = useDispatch(); 

    

  const[formState,disaptchFormState] = useReducer(formReducer,
    {inputValues:{
     
      name: '',
      category:props.navigation.getParam("category"),
      img:'',
      quantity:'',
      company:''
    },
     inputValidities:{
       name:false,
       category:false,
       
       img:false
     },
     formIsValid:false});

  

   
   const inputChangeHandler = useCallback((inputIdentifier, inputValue,inputValidity) =>{
   
   disaptchFormState({type:Form_Input_Update,value:inputValue,isValid:inputValidity,inputID:inputIdentifier});
   },[disaptchFormState]);

   const sendConfirmation = async  (product)=>{
    await dispatch( addProduct(product,props.navigation.getParam("category"),props.navigation.getParam("fromscreen")));
    props.navigation.goBack();
    
    
    };

    return (
        <View style={styles.container}>
        <View style={{flexDirection:'row',width:'90%',alignItems:'center',alignSelf:'center'}}>
                 <View style={{width:'50%'}}>
                  <Text style={{fontSize:screen.width/30,color:'white',alignSelf:'flex-start'}}>Nom du produit</Text>
                 </View>
                
                  <InputProfile
                      id="name" 
                      
                      placeholderTextColor={Platform.OS=='android'?'rgba(50,52,70,0.4)':'#d3d3d3'}
                      keyboardType="default"
                      onInputChange={inputChangeHandler}
                      initialValue={''}
                      initiallyValid={true}
                      required
                      minLength={3}
                      autoCapitalize='sentences'
                      widthView='50%'
                      backgroundColor={Platform.OS=='ios'?Colors.blue:'#d3d3d3'}
                      height={screen.width/9}
                      /> 
                
               </View>



             

               <View style={{flexDirection:'row',width:'90%',marginVertical:screen.width/72,alignItems:'center',alignSelf:'center'}}>
                 <View style={{width:'50%'}}>
                  <Text style={{fontSize:screen.width/30,color:'white',alignSelf:'flex-start'}}>Image du produit</Text>
                 </View>
                 <InputProfile
                      id="img" 
                      
                      placeholderTextColor={Platform.OS=='android'?'rgba(50,52,70,0.4)':'#d3d3d3'}
                      keyboardType="default"
                      onInputChange={inputChangeHandler}
                      initialValue={''}
                      initiallyValid={true}
                      required
                      minLength={3}
                      autoCapitalize='sentences'
                      widthView='50%'
                      backgroundColor={Platform.OS=='ios'?Colors.blue:'#d3d3d3'}
                      height={screen.width/9}
                      /> 
               </View>
               
               <View style={{flexDirection:'row',width:'90%',marginVertical:screen.width/72,alignItems:'center',alignSelf:'center'}}>
                 <View style={{width:'50%'}}>
                  <Text style={{fontSize:screen.width/30,color:'white',alignSelf:'flex-start'}}>Quantité du produit</Text>
                 </View>
                 <InputProfile
                      id="quantity" 
                      
                      placeholderTextColor={Platform.OS=='android'?'rgba(50,52,70,0.4)':'#d3d3d3'}
                      keyboardType="number-pad"
                      onInputChange={inputChangeHandler}
                      initialValue={''}
                      initiallyValid={true}
                      required
                      minLength={3}
                      autoCapitalize='sentences'
                      widthView='50%'
                      backgroundColor={Platform.OS=='ios'?Colors.blue:'#d3d3d3'}
                      height={screen.width/9}
                      /> 
               </View>
{
    props.navigation.getParam("fromscreen") !== "BMS" && 
               <View style={{flexDirection:'row',width:'90%',marginVertical:screen.width/72,alignItems:'center',alignSelf:'center'}}>
                 <View style={{width:'50%'}}>
                  <Text style={{fontSize:screen.width/30,color:'white',alignSelf:'flex-start'}}>Société du produit</Text>
                 </View>
                 <InputProfile
                      id="company" 
                      
                      placeholderTextColor={Platform.OS=='android'?'rgba(50,52,70,0.4)':'#d3d3d3'}
                      keyboardType="number-pad"
                      onInputChange={inputChangeHandler}
                      initialValue={''}
                      initiallyValid={true}
                      required
                      minLength={3}
                      autoCapitalize='sentences'
                      widthView='50%'
                      backgroundColor={Platform.OS=='ios'?Colors.blue:'#d3d3d3'}
                      height={screen.width/9}
                      /> 
               </View>
            }
               <View>

              <Button
                theme={{colors: {primary:Colors.secondary}}} 
                title="Ajouter"
                titleStyle={styles.labelButton}
                buttonStyle={styles.confirmedButtonStyle}
                onPress = {()=>{sendConfirmation(formState.inputValues)}}
                ViewComponent={LinearGradient} 
                linearGradientProps={{
                    colors: [Colors.secondary, Colors.secondary],
                    start: {x: 0, y: 0} ,
                    end:{x: 1, y: 0}
                    
                }} />
          </View>
              
      </View>


    )



}

ManageProduct.navigationOptions= (navData)=>{
    return {
         headerTitle: navData.navigation.getParam("option") 
    };
  }

const styles = StyleSheet.create({
    container:{
        flex:1,
        width:'100%',
        height:'100%',
        
        backgroundColor:Colors.primary,
        paddingTop : "10%"

      },
     
      labelButton:{
       color:'#FFF',
       fontSize:screen.width/22.5,
       textTransform:null,
      },
      confirmedButtonStyle:{
        
        width:'90%',
        borderRadius:screen.width/18,
        height:screen.width/8,
        alignSelf:'center',
       marginTop:30
       },
  });
  


export default ManageProduct;