
import React, { useState, useEffect, useCallback, useReducer } from 'react';
import { StyleSheet,View,ScrollView,KeyboardAvoidingView,TouchableWithoutFeedback,Keyboard,Text,Image,ImageBackground,StatusBar,TextInput,TouchableOpacity,Picker,ActionSheetIOS,Alert,ActivityIndicator,AsyncStorage,Dimensions,Platform} from 'react-native';
import Colors from '../../constants/Colors';
import {Button} from 'react-native-elements';
import CustomInput from '../../components/Input';
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
const MarketerParameters = (props) =>{

  const sexTypes= ['Homme','Femme'];
  const [sex,setSex] = useState(undefined);
  const [isEye,setIsEye]=useState(false);

   const eye=()=>{
     setIsEye(prevValue=>!prevValue);
   };
   
  
  
  

//picker only iOS gender function 
const onPressSex = () =>{
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
    phone: '',
    password:'',
    
  },
   inputValidities:{
     phone:false,
     password:false,
   
   },
   formIsValid:false});
 
 const inputChangeHandler = useCallback((inputIdentifier, inputValue,inputValidity) =>{
 
 disaptchFormState({type:Form_Input_Update,value:inputValue,isValid:inputValidity,inputID:inputIdentifier});
 },[disaptchFormState]);


    return (
        <View style={styles.container}>
          
          <View style={{width:'70%',height:'30%',justifyContent:'center',alignItems:'center'}}>
                <Text style={{alignSelf:'center',color:'white'}}>Modifiez vos paramètres afin d'assurer la sécurité de votre compte BMS.</Text>
          </View>
         
          <View style={{width:'90%',height:'70%'}}>
                   <CustomInput
                      id='phone'
                      rightIcon={<MaterialIcons title = "phone" name ='phone' color={Colors.primary} size={screen.width/15.7} />}
                      leftIcon={<View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-around',borderRightWidth:1,borderRightColor:Colors.blue,paddingRight:screen.width/72}}><Image source={{uri:'http://173.212.234.137/assets/tahfifabarber/algeriaFlag.png'}} style={{width:screen.width/15,height:screen.width/12.85,marginRight:screen.width/72}}></Image><Text style={styles.phoneNumber}>+213</Text></View>}
                      placeholder=' 555555555'
                      returnKeyType="next"
                      keyboardType="phone-pad"
                      onInputChange={inputChangeHandler}
                      initialValue=' 658341876'
                      initiallyValid={true}
                      phone
                      required
                      placeholderTextColor='rgba(50,52,70,0.4)'
                    />

                <Button
                  theme={{colors: {primary:Colors.primary}}} 
                  title="Enregistrer"
                  titleStyle={styles.labelButton}
                  buttonStyle={styles.confirmedButtonStyle}
               
                  ViewComponent={LinearGradient} 
                  linearGradientProps={{
                      colors: [Colors.green, Colors.green],
                      start: {x: 0, y: 0} ,
                      end:{x: 1, y: 0}
                      
                  }} />
                  <View style={{marginTop:40}}>
                    <CustomInput
                      id='password'
                      rightIcon={<MaterialCommunityIcons title="lock" onPress={eye} name ={!isEye?'eye':'eye-off'} color={Colors.primary} size={screen.width/15.7} />}
                      placeholder='Nouveau Mot de Passe'
                      keyboardType="default"
                      secureTextEntry={!isEye?true:false}
                      minLength={6}
                      autoCapitalize='none'
                      onInputChange={inputChangeHandler}
                      initialValue=''
                      initiallyValid={true}
                      required
                      placeholderTextColor='rgba(50,52,70,0.4)'
                    />
                 </View>
                <Button
                  theme={{colors: {primary:Colors.primary}}} 
                  title="Enregistrer"
                  titleStyle={styles.labelButton}
                  buttonStyle={styles.confirmedButtonStyle}
               
                  ViewComponent={LinearGradient} 
                  linearGradientProps={{
                      colors: [Colors.green, Colors.green],
                      start: {x: 0, y: 0} ,
                      end:{x: 1, y: 0}
                      
                  }} />
            </View>
                
        </View>

    )



}

MarketerParameters.navigationOptions= navData => {
    
    return {
     title:'Paramètres',
    
     headerBackTitle : " ",
     headerTintColor: Colors.primary,
     headerTitleStyle:{
       fontWeight:'bold',
       marginTop:screen.width/72,
     }
    
    };
  
  };

const styles = StyleSheet.create({
    container: {
      flex: 1,
    
      alignItems: 'center',
     
      backgroundColor:Colors.primary
    },
    
     confirmedButtonStyle:{
      borderColor:Colors.primary,
      width:'90%',
      borderRadius:screen.width/18,
      height:screen.width/8,
      alignSelf:'center',
     marginTop:15
     },
     labelButton:{
      color:'#FFF',
      fontSize:screen.width/22.5,
      textTransform:null,
     },
  });
  


export default MarketerParameters;