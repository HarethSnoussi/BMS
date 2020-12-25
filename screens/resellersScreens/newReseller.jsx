
import React, { useState, useEffect, useCallback, useReducer } from 'react';
import { StyleSheet,View,ScrollView,KeyboardAvoidingView,TouchableWithoutFeedback,Keyboard,Text,Image,ImageBackground,StatusBar,TextInput,TouchableOpacity,Picker,ActionSheetIOS,Alert,ActivityIndicator,AsyncStorage,Dimensions,Platform} from 'react-native';
import Colors from '../../constants/Colors';
import {Button} from 'react-native-elements';
import InputProfile from '../../components/InputProfile';
import {MaterialIcons,MaterialCommunityIcons,Ionicons} from "@expo/vector-icons";
import { LinearGradient } from 'expo-linear-gradient';

//Create the store and the combine reducers
const screen = Dimensions.get('window');
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
const NewReseller = (props) =>{

  const sexTypes= ['Homme','Femme'];
  const [sex,setSex] = useState(undefined);
  const [isEye,setIsEye]=useState(false);

   const eye=()=>{
     setIsEye(prevValue=>!prevValue);
   };
   
  
  
  

//picker only iOS gender function 
const onPressLevel = () =>{

    const [hour,setHour] = useState(!currentServiceID?0:currentUserService.durationHour.toString());
   const hours = ['0','1','2','3','4','5','6','7','8','9','10','11','12'];
   const [minute,setMinute] = useState(!currentServiceID?0:currentUserService.durationMinute.toString());
   const minutes = ['0','5','10','15','20','25','30','35','40','45','50','55']; 

 const sexIOS = ['Homme','Femme'];    
 ActionSheetIOS.showActionSheetWithOptions(
   {
     options: sexIOS,
     cancelButtonIndex: -1
   },
   buttonIndex => {
     if (buttonIndex === -1) {
       // cancel action
     } else {
      setSex(sexIOS[buttonIndex]);
     } 
   }
 );  
}

const[formState,disaptchFormState] = useReducer(formReducer,
  {inputValues:{
    nom: '',
    prenom:'',
    phone:'',
    address:'',
    bmsproduct:'',
    nonebmsproduct:''
  },
   inputValidities:{
     nom:false,
     prenom:false,
     phone:false,
     address:false
   },
   formIsValid:false});
 
 const inputChangeHandler = useCallback((inputIdentifier, inputValue,inputValidity) =>{
 
 disaptchFormState({type:Form_Input_Update,value:inputValue,isValid:inputValidity,inputID:inputIdentifier});
 },[disaptchFormState]);


    return (
        <View style={styles.container}>
          <View style={{flexDirection:'row',width:'90%',alignItems:'center',alignSelf:'center'}}>
                   <View style={{width:'50%'}}>
                    <Text style={{fontSize:screen.width/30,color:'white',alignSelf:'flex-start'}}>Nom du revendeur</Text>
                   </View>
                  
                    <InputProfile
                        id="nom" 
                        placeholder='Ex: Snoussi'
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
                    <Text style={{fontSize:screen.width/30,color:'white',alignSelf:'flex-start'}}>Prénom du revendeur</Text>
                   </View>
                   <InputProfile
                        id="prenom" 
                        placeholder='Ex: El Hareth'
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
                    <Text style={{fontSize:screen.width/30,color:'white',alignSelf:'flex-start'}}>Numéro de téléphone</Text>
                   </View>
                   <InputProfile
                        id="phone" 
                        placeholder='+21367777773'
                        placeholderTextColor={Platform.OS=='android'?'rgba(50,52,70,0.4)':'#d3d3d3'}
                        keyboardType="phone-pad"
                        onInputChange={inputChangeHandler}
                        initialValue={''}
                        initiallyValid={true}
                        required
                        phone
                        autoCapitalize='sentences'
                        widthView='50%'
                        backgroundColor={Platform.OS=='ios'?Colors.blue:'#d3d3d3'}
                        height={screen.width/9}
                        /> 
                 </View>

                 <View style={{flexDirection:'row',width:'90%',marginVertical:screen.width/72,alignItems:'center',alignSelf:'center'}}>
                   <View style={{width:'50%'}}>
                    <Text style={{fontSize:screen.width/30,color:'white',alignSelf:'flex-start'}}>Adresse actuelle</Text>
                   </View>
                   <InputProfile
                        id="address" 
                        placeholder='Activer GPS'
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
                    <Text style={{fontSize:screen.width/30,color:'white',alignSelf:'flex-start'}}>Nombre de produits BMS</Text>
                   </View>
                   <InputProfile
                        id="bmsproduct" 
                        placeholder='Ex: 64'
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
                 
                 <View style={{flexDirection:'row',width:'90%',marginVertical:screen.width/72,alignItems:'center',alignSelf:'center'}}>
                   <View style={{width:'50%'}}>
                    <Text style={{fontSize:screen.width/30,color:'white',alignSelf:'flex-start'}}>Nombre de produits non BMS</Text>
                   </View>
                   <InputProfile
                      id='nonebmsproduct'
                      placeholder='Ex: 39'
                      keyboardType="number-pad"
                      onInputChange={inputChangeHandler}
                      initialValue={''}
                      initiallyValid={true}
                      required
                      placeholderTextColor={Platform.OS==='android'?'rgba(50,52,70,0.4)':'#d3d3d3'}
                      style={{height:screen.width/18}}
                      widthView='50%'
                      backgroundColor={Platform.OS==='ios'?Colors.blue:'#d3d3d3'}
                      height={screen.width/9}
                      inputStyle={{color:'white'}}
                    />
                 </View>
                 <View>

                <Button
                  theme={{colors: {primary:Colors.secondary}}} 
                  title="Ajouter"
                  titleStyle={styles.labelButton}
                  buttonStyle={styles.confirmedButtonStyle}
               
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

NewReseller.navigationOptions= navData => {
    
    return {
     title:'Nouveau Revendeur',
    
     headerBackTitle : " ",
     headerTintColor: Colors.primary,
     headerTitleStyle:{
       fontWeight:'bold',
       marginTop:screen.width/72,
     }
    
    };
  
  };

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:Colors.primary,
        width:'100%',
        height:'100%',
        justifyContent:'center'
      },
     
      labelButton:{
       color:'#FFF',
       fontSize:screen.width/22.5,
       textTransform:null,
      },
      confirmedButtonStyle:{
        borderColor:Colors.secondary,
        width:'90%',
        borderRadius:screen.width/18,
        height:screen.width/8,
        alignSelf:'center',
       marginTop:30
       },
  });
  


export default NewReseller;