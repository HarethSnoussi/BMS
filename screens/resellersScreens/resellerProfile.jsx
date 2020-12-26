
import React, { useState, useEffect, useCallback, useReducer } from 'react';
import { StyleSheet,View,ScrollView,KeyboardAvoidingView,TouchableWithoutFeedback,Keyboard,Text,Image,ImageBackground,StatusBar,TextInput,TouchableOpacity,Picker,ActionSheetIOS,Alert,ActivityIndicator,AsyncStorage,Dimensions,Platform} from 'react-native';
import Colors from '../../constants/Colors';
import {Button,Rating} from 'react-native-elements';
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
const ResellerProfile = (props) =>{

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
    nom: '',
    prenom:'',
    email:'',
    address:''
  },
   inputValidities:{
     nom:false,
     prenom:false,
     email:false,
     address:false
   },
   formIsValid:false});
 
 const inputChangeHandler = useCallback((inputIdentifier, inputValue,inputValidity) =>{
 
 disaptchFormState({type:Form_Input_Update,value:inputValue,isValid:inputValidity,inputID:inputIdentifier});
 },[disaptchFormState]);


    return (
        <View style={styles.container}>
         <View style={{height:'40%',width:'90%'}}>
             <Text style={{color:'white',paddingBottom:5}}>Notez votre client à l'aide des 5 étoiles ci-dessous: </Text>
         <Rating 
              imageSize={screen.width/18} 
              startingValue= {props.mark === null ? 2.5 : props.mark}
              value = {props.mark === null ? 2.5 : props.mark}
              style={styles.rating }
              type='custom'
              ratingBackgroundColor={Colors.primary}
              tintColor='#fff' />
              <TextInput
                      style = {{...styles.addressInput}}

                   

                    
                    multiline = {true}
                    numberOfLines={4}
                   
                    placeholder = "Décrire votre revendeur ici!"
                        />
         </View>
          <View style={{width:'90%',hegiht:'60%'}}>
                <CustomInput
                      id='nom'
                      rightIcon={<Ionicons title="name" name ='ios-person' color={Colors.primary} size={23} />}
                      placeholder='Snoussi'
                      keyboardType="default"
                      returnKeyType="next"
                      minLength={3}
                      autoCapitalize='sentences'
                      onInputChange={inputChangeHandler}
                      initialValue='Madani'
                      initiallyValid={true}
                      required
                      placeholderTextColor='rgba(50,52,70,0.4)'
                      inputStyle={{fontSize:screen.width/24}}
                    
                    />
              <CustomInput
                      id='prenom'
                      rightIcon={<Ionicons title="nickname" name ='ios-person' color={Colors.primary} size={23} />}
                      placeholder='Prénom'
                      keyboardType="default"
                      returnKeyType="next"
                      minLength={3}
                      autoCapitalize='sentences'
                      onInputChange={inputChangeHandler}
                      initialValue='El Hareth'
                      initiallyValid={true}
                      required
                      placeholderTextColor='rgba(50,52,70,0.4)'
                      inputStyle={{fontSize:screen.width/24}}
                    />
                    <CustomInput
                      id='phone'
                      rightIcon={<MaterialIcons title="phone" name ='phone' color={Colors.primary} size={23} />}
                      placeholder='Numéro de téléphone'
                      keyboardType="phone-pad"
                      returnKeyType="next"
                      minLength={3}
                      autoCapitalize='sentences'
                      onInputChange={inputChangeHandler}
                      initialValue='+213658341876'
                      initiallyValid={true}
                      required
                      placeholderTextColor='rgba(50,52,70,0.4)'
                      inputStyle={{fontSize:screen.width/24}}
                    
                    />
              <CustomInput
                      id='address'
                      rightIcon={<MaterialCommunityIcons title="address" name ='map' color={Colors.primary} size={23} />}
                      placeholder='Adresse'
                      keyboardType="default"
                      returnKeyType="next"
                      minLength={3}
                      autoCapitalize='sentences'
                      onInputChange={inputChangeHandler}
                      initialValue='Cité 142 logements, Bt G2, N4, Bab Dzair Blida'
                      initiallyValid={true}
                      required
                      placeholderTextColor='rgba(50,52,70,0.4)'
                      inputStyle={{fontSize:screen.width/24}}
                    />
                    
               

                <Button
                  theme={{colors: {primary:Colors.primary}}} 
                  title="Modifier"
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

ResellerProfile.navigationOptions= navData => {
    
    return {
     title:'Profil du Revendeur',
    
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
      height:'100%',
      alignItems: 'center',
      justifyContent:'center',
      backgroundColor:Colors.primary
    },
    
     confirmedButtonStyle:{
      borderColor:Colors.primary,
      width:'90%',
      borderRadius:screen.width/18,
      height:screen.width/8,
      alignSelf:'center',
     marginTop:30
     },
     labelButton:{
      color:'#FFF',
      fontSize:screen.width/22.5,
      textTransform:null,
     },
     rating : {
        alignItems :"flex-start"
          },
          addressInput :{ 
            // borderColor: 'gray', borderWidth: 1,
            backgroundColor :"white",
            borderRadius : screen.width/36,
            height :"60%",
            backgroundColor : "#f0f0f0",
            textAlignVertical: 'top',
            paddingLeft : screen.width/24,
            paddingTop : screen.width/24,
            width : "100%",
            marginTop:10
        },
  });
  


export default ResellerProfile;