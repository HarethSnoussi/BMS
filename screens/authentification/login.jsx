import React,{useState,useCallback,useReducer} from 'react';
import { StyleSheet,View,KeyboardAvoidingView,TouchableWithoutFeedback,Keyboard,Text,Image,Dimensions,TouchableOpacity, StatusBar,Alert,ActivityIndicator,AsyncStorage,Platform} from 'react-native';
import {MaterialIcons,MaterialCommunityIcons} from "@expo/vector-icons";
import {Button } from 'react-native-elements';
import Colors from '../../constants/Colors';
import { LinearGradient } from 'expo-linear-gradient';
import CustomInput from '../../components/Input';


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
const LoginScreen = (props) =>{

  const [isLogin,setIsLogin]= useState(false);//ActivityIndicator handling
const prefix='+213';
const [isEye,setIsEye]=useState(false);


const eye=()=>{//eye icon for password
  setIsEye(prevValue=>!prevValue);
};

const[formState,disaptchFormState] = useReducer(formReducer,
    {inputValues:{
      phone: '',
      password:''
    },
     inputValidities:{
       phone:false,
       password:false
     },
     formIsValid:false});


const inputChangeHandler = useCallback((inputIdentifier, inputValue,inputValidity) =>{

disaptchFormState({type:Form_Input_Update,value:inputValue,isValid:inputValidity,inputID:inputIdentifier});
},[disaptchFormState]);
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////

const saveDataToStorage = (token,userID,expirationDate,gender,id) => {

  AsyncStorage.setItem('userData',
                        JSON.stringify({
                        token:token,
                        userID:userID,
                        expiryDate: expirationDate.toISOString(),
                        gender:gender,
                        id:id
                       }) 
                       );
        };

        const login = async ()=>{

          if(formState.formIsValid){
           
          }else{
            Alert.alert('Erreur!','Numéro de téléphone ou mot de passe invalide.',[{text:"OK"}]);
          } 
      
        };

    return (
        <TouchableWithoutFeedback onPress = {()=>Keyboard.dismiss()}>
        <View style={styles.container}>
         <KeyboardAvoidingView  keyboardVerticalOffset={10}  behavior={Platform.OS === "ios" ? "padding" : null}>
           <StatusBar hidden />
            <View style={styles.backgroundContainer}>
            <Image source={require('../../images/BMStransparent.png')} style={{resizeMode:'cover',width:300,height:80}}/>
            </View>
            <View style={styles.secondContainer}>
               <View style={styles.logoContainer}>
                   <Image source={require('../../images/BMStransparent.png')} style={styles.logo}/>
                   <Text style={styles.callToAction}>Fabrication d'appareillages et accessoires électriques</Text>
               </View>
                <View style={styles.inputsContainer}>
                    <CustomInput
                      id='phone'
                      rightIcon={<MaterialIcons title = "phone" name ='phone' color={Colors.primary} size={screen.width/15.7} />}
                      leftIcon={<View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-around',borderRightWidth:1,borderRightColor:Colors.blue,paddingRight:screen.width/72}}><Image source={{uri:'http://173.212.234.137/assets/tahfifabarber/algeriaFlag.png'}} style={{width:screen.width/15,height:screen.width/12.85,marginRight:screen.width/72}}></Image><Text style={styles.phoneNumber}>+213</Text></View>}
                      placeholder=' 555555555'
                      returnKeyType="next"
                      keyboardType="phone-pad"
                      onInputChange={inputChangeHandler}
                      initialValue=''
                      initiallyValid={true}
                      phone
                      required
                      placeholderTextColor='rgba(50,52,70,0.4)'
                    />
                    <CustomInput
                      id='password'
                      rightIcon={<MaterialCommunityIcons title="lock" onPress={eye} name ={!isEye?'eye':'eye-off'} color={Colors.primary} size={screen.width/15.7} />}
                      placeholder='Mot de Passe'
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
               <View style={styles.footerContainer}>
                  {!isLogin?<Button
                      theme={{colors: {primary:Colors.primary}}} 
                      title="Se connecter"
                      titleStyle={styles.labelButton}
                      buttonStyle={styles.buttonStyle}
                      ViewComponent={LinearGradient} 
                      onPress={login}
                      linearGradientProps={{
                          colors: [Colors.primary, Colors.primary],
                          start: {x: 0, y: 0} ,
                          end:{x: 1, y: 0}
                          
                      }}
                    />:<ActivityIndicator color={Colors.primary} />}
                    <TouchableOpacity>
                     <Text style={styles.forgotPassword}>Mot de passe oublié?</Text>
                    </TouchableOpacity>
                    <View style={styles.signupContainer}>
                      <Text style={styles.doYouHaveAnAccount}>Vous n'avez pas un compte? </Text>
                      <TouchableOpacity onPress={()=>props.navigation.navigate('Signup')}>
                       <Text style={styles.signupText}>S'inscrire</Text>
                      </TouchableOpacity>
                    </View>
                    
               </View>
            </View>
         </KeyboardAvoidingView> 
       </View>
       </TouchableWithoutFeedback>

    )



}

LoginScreen.navigationOptions= ()=>{
  return {
    headerTransparent : true ,
    headerStyle:{
        backgroundColor: 'white'
    },
    headerBackTitle : " ",
    headerTitle: () => (
      <Image 
      resizeMode="cover"
      style={{
        width:screen.width/2.4,
        height:screen.width/9,
        resizeMode:'contain',
        alignSelf: 'center'}}
      
      />
    ),
    headerLeft:()=>null,
  
  };
}


const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: Colors.primary,
    width:'100%'
   },
   backgroundContainer:{
     height:'35%',
     backgroundColor:Colors.primary,
     justifyContent:'center',
     alignItems:'center'
  },
  secondContainer:{
    height:'65%',
    width:'100%',
    backgroundColor:'#fff',
    borderTopLeftRadius:screen.width/12,
    borderTopRightRadius:screen.width/12,
    overflow:'hidden'
  },
  logoContainer:{
    height:'25%',
    width:'100%',
    justifyContent:'center',
    alignItems:'center'
  },
  logo:{
    width:screen.width/2,
    height:screen.width/8.6,
    marginVertical:screen.width/24
  },
  callToAction:{
    fontSize:screen.width/28,
    fontFamily:'poppins',
    color:'#323446'
  },
  inputsContainer:{
    height:'40%',
    width:'90%',
    justifyContent:'center',
    alignSelf:'center'
  },
  footerContainer:{
    height:'35%',
    width:'100%',
  },
  labelButton:{
    color:'#FFF',
    fontFamily:'poppins',
    fontSize:screen.width/22.5,
    textTransform:null,
   },
   buttonStyle:{
    borderColor:Colors.primary,
    width:'90%',
    borderRadius:screen.width/18,
    height:screen.width/8,
    alignSelf:'center'
   },
  forgotPassword:{
    fontSize:screen.width/26,
    fontFamily:'poppins',
    color:'#323446',
    alignSelf:'center',
    paddingTop:screen.width/24
  },
  signupContainer:{
    flexDirection:'row',
    paddingTop:screen.width/36,
    alignSelf:'center'
  },
  doYouHaveAnAccount:{
    fontSize:screen.width/28,
    fontFamily:'poppins',
    color:'grey'
  },
  signupText:{
    fontSize:screen.width/28,
    fontFamily:'poppins-bold',
    color:Colors.green
  }
  });
  


export default LoginScreen;