import React,{useState,useCallback,useRef,useReducer} from 'react';
import { StyleSheet,View,ScrollView,KeyboardAvoidingView,TouchableWithoutFeedback,Keyboard,Text,Image,ImageBackground,StatusBar,TextInput,TouchableOpacity,Picker,ActionSheetIOS,Alert,ActivityIndicator,AsyncStorage,Dimensions,Platform} from 'react-native';
import {MaterialIcons,MaterialCommunityIcons,Ionicons} from "@expo/vector-icons";
import { LinearGradient } from 'expo-linear-gradient';
import CustomInput from '../../components/Input';
import Colors from '../../constants/Colors';
import {Button} from 'react-native-elements';


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

const SignupScreen = (props) =>{

  const prefix='+213';
    
  //States for complex information textInputs
  const [isSignup,setIsSignup] = useState(false);
  const [wilaya,setWilaya] = useState(undefined);
  const levelTypes= ['Fonction','Chef','Agent','Gérant'];
  const [level,setLevel] = useState(undefined);
  const [isEye,setIsEye]=useState(false);

   const eye=()=>{
     setIsEye(prevValue=>!prevValue);
   };
   
  
  
  

//picker only iOS gender function 
const onPressLevel = () =>{
 const levelIOS = ['Homme','Femme'];    
 ActionSheetIOS.showActionSheetWithOptions(
   {
     options: levelIOS,
     cancelButtonIndex: -1
   },
   buttonIndex => {
     if (buttonIndex === -1) {
       // cancel action
     } else {
      setLevel(levelIOS[buttonIndex]);
     } 
   }
 );  
}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///Input management

const[formState,disaptchFormState] = useReducer(formReducer,
 {inputValues:{
   phone: '',
   password:'',
   region:''
 },
  inputValidities:{
    phone:false,
    password:false,
    region:false
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

const signupHandler = async () => {



if(formState.formIsValid && level!==levelTypes[0] && wilaya!==undefined && level!==undefined){
 
}

setIsSignup(prevValue=>!prevValue);

};

const sendCode = async () => {


};






    return (
      <TouchableWithoutFeedback onPress = {()=>{Keyboard.dismiss()}}>
      <ImageBackground style={styles.container}>
        <KeyboardAvoidingView keyboardVerticalOffset={screen.width/36}  behavior={Platform.OS === "ios" ? "padding" : null}>
        <StatusBar hidden />
       
        
            <View style={{width:'85%',height:'30%',alignSelf:'center',alignItems:'flex-start',justifyContent:'flex-end'}}>
               <Image source={require('../../images/BMStransparent.png')} style={styles.icon}/>
               <Text style={styles.slogan}>Inscrivez-vous dans notre application exclusive</Text>
            </View>
            <View style={styles.secondContainer}>
           <View>
              <CustomInput
                  id='phone'
                  rightIcon={<MaterialIcons title = "phone" name ='phone' color={Colors.primary} size={screen.width/15.7} />}
                  leftIcon={<View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-around',borderRightWidth:1,borderRightColor:Colors.blue,paddingRight:screen.width/72}}><Image source={{uri:'http://173.212.234.137/assets/tahfifabarber/algeriaFlag.png'}} style={{width:screen.width/15,height:screen.width/12.85,marginRight:screen.width/72}}></Image><Text style={styles.phoneNumber}>+213</Text></View>}
                  placeholder=' 555555555'
                  keyboardType="phone-pad"
                  returnKeyType="next"
                  onInputChange={inputChangeHandler}
                  initialValue=''
                  initiallyValid={true}
                  phone
                  required
                  placeholderTextColor='rgba(50,52,70,0.4)'
                
                  inputStyle={{fontSize:15}}
                  />
               <CustomInput
                      id='password'
                      rightIcon={<MaterialCommunityIcons title="lock" onPress={eye} name ={!isEye?'eye':'eye-off'} color={Colors.primary} size={screen.width/15.7} />}
                      placeholder='Mot de Passe'
                      keyboardType="default"
                      returnKeyType="next"
                      secureTextEntry={!isEye?true:false}
                      minLength={6}
                      autoCapitalize='none'
                      onInputChange={inputChangeHandler}
                      initialValue=''
                      initiallyValid={true}
                      required
                      placeholderTextColor='rgba(50,52,70,0.4)'
                      inputStyle={{fontSize:screen.width/24}}
                
                    />
              
             
                <CustomInput
                      id='nom'
                      rightIcon={<Ionicons title="name" name ='ios-person' color={Colors.primary} size={23} />}
                      placeholder='Nom'
                      keyboardType="default"
                      returnKeyType="next"
                      minLength={3}
                      autoCapitalize='sentences'
                      onInputChange={inputChangeHandler}
                      initialValue=''
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
                      initialValue=''
                      initiallyValid={true}
                      required
                      placeholderTextColor='rgba(50,52,70,0.4)'
                      inputStyle={{fontSize:screen.width/24}}
                    />
                <View style={{ width:'100%',borderWidth:1,borderRadius:screen.width/14.4,backgroundColor:'#d3d3d3',borderColor:level!==levelTypes[0]?'#d3d3d3':Colors.primary,marginVertical:screen.width/120,height:screen.width/8,justifyContent:'center'}}>
                {Platform.OS === 'android' ? 
                    <Picker
                    selectedValue={level}
                    onValueChange={itemValue => setLevel(itemValue)}
                    style={{fontSize:screen.width/30,color:Colors.blue,marginHorizontal:screen.width/25.7}}
                    >
                    {levelTypes.map(el=> <Picker.Item label={el} value={el} key={el} />)}
                    </Picker> :
                    <TouchableOpacity onPress={onPressLevel} style={{ width:'100%',flexDirection:'row',alignItems:'center',justifyContent:'space-between',paddingLeft:screen.width/21.2,paddingRight:screen.width/14.4}}>
                    <Text  style={{fontSize:screen.width/30,color:Colors.blue,fontSize:screen.width/24,fontWeight:'500'}}>
                      {level?level:levelTypes[0]}
                    </Text>
                    <Ionicons name="ios-arrow-down" size={screen.width/15} color={Colors.blue} onPress={onPresLevel} />
                    </TouchableOpacity>}
                </View>
           
             { !isSignup?<View><Button
                  theme={{colors: {primary:'#fd6c57'}}} 
                  title="S'inscrire"
                  titleStyle={styles.labelButton}
                  buttonStyle={styles.buttonStyle}
                  onPress={signupHandler}
                  ViewComponent={LinearGradient} 
                  linearGradientProps={{
                      colors: [Colors.secondary, Colors.secondary],
                      start: {x: 0, y: 0} ,
                      end:{x: 1, y: 0}
                      
                  }}
                />
                
                </View>:undefined}
                </View>
              
                {isSignup?<View style={{height:'10%'}}>
                  <View style={{width:'100%',borderWidth:1, borderRadius:screen.width/14.4,backgroundColor:'#d3d3d3',borderColor:Colors.primary,marginVertical:screen.width/120,height:screen.width/8,alignItems:'center',justifyContent:'center'}}>
                    <TextInput
                            placeholder='Entrez les 6 chiffres'
                            keyboardType='number-pad'
                            autoCapitalize='none'
                            returnKeyType="next"
                            
                            placeholderTextColor='rgba(50,52,70,0.4)'
                            style={{color:'#323446'}}
                          />
                </View>
                <View style={styles.cofirmResendContainer}>
                <Button
                  theme={{colors: {primary:'#fd6c57'}}} 
                  title="Confirmer"
                  titleStyle={styles.labelButton}
                  buttonStyle={styles.confirmedButtonStyle}
                  onPress = {()=> props.navigation.navigate("navigation")}
                  ViewComponent={LinearGradient} 
                  linearGradientProps={{
                      colors: [Colors.secondary, Colors.secondary],
                      start: {x: 0, y: 0} ,
                      end:{x: 1, y: 0}
                      
                  }}
                />
                <Button
                  theme={{colors: {primary:'#fd6c57'}}} 
                  title="Renvoyer"
                  titleStyle={styles.labelButton}
                  buttonStyle={styles.confirmedButtonStyle}
               
                  ViewComponent={LinearGradient} 
                  linearGradientProps={{
                      colors: [Colors.green, Colors.green],
                      start: {x: 0, y: 0} ,
                      end:{x: 1, y: 0}
                      
                  }}
                />
                </View>
              
                <Text style={styles.smsText}>Un code de 6 chiffres a été envoyé sur votre SMS</Text>

                </View>:undefined}
                
                
                { !isSignup?<View style={styles.loginContainer}>
                  <Text style={styles.doYouHaveAnAccount}>Avez-vous déjà un compte? </Text>
                  <TouchableOpacity onPress={()=>props.navigation.navigate('Main')}>
                    <Text style={styles.loginText}>Se connecter</Text>
                  </TouchableOpacity>
                </View>:undefined}
            </View>
          
           
        </KeyboardAvoidingView>
      </ImageBackground>
     </TouchableWithoutFeedback>

    )



}

SignupScreen.navigationOptions= ()=>{
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
    resizeMode:'cover',
    width:'100%',
    flex:1,
    backgroundColor:Colors.primary
   },
  firstContainer:{
    width:'85%',
    height:'30%',
    alignSelf:'center',
    alignItems:'flex-start',
    justifyContent:'flex-end',
    backgroundColor:'red'
  },
  icon:{
    width:screen.width/1.5,
    height:screen.width/6,
  },
  slogan:{
    fontSize:screen.width/20,
    color:'#FFF',
    paddingTop:screen.width/72
  },
  secondContainer:{
    width:'85%',
    alignSelf:'center',
    paddingTop:screen.width/18
  },
  labelButton:{
    color:'#FFF',
    fontSize:screen.width/22.5,
    textTransform:null,
   },
   buttonStyle:{
    borderColor:Colors.primary,
    width:'100%',
    borderRadius:screen.width/18,
    height:screen.width/8,
    alignSelf:'center',
    marginTop:screen.width/24
   },
   confirmedButtonStyle:{
    borderColor:Colors.primary,
    width:'80%',
    borderRadius:screen.width/18,
    height:screen.width/8,
    alignSelf:'center',
    marginTop:screen.width/120
   },
   loginContainer:{
    flexDirection:'row',
    paddingTop:screen.width/24,
    alignSelf:'center'
  },
  doYouHaveAnAccount:{
    fontSize:14,
    color:'#fff'
  },
  loginText:{
    fontSize:screen.width/25.7,
    fontWeight:'bold',
    color:Colors.secondary
  },
  loader: {
    marginTop: screen.width/36,
  },
  confirmErrorText:{
    color:Colors.primary,
    fontSize:screen.width/27.7,
    alignSelf:'center'
  },
  smsText:{
    color:'white',
    fontSize:screen.width/32.7,
    paddingTop:screen.width/36,
    alignSelf:'center',
    fontWeight:'bold'
  },
  phoneNumber:{
    fontSize:screen.width/24,
    color:Colors.blue,
  },
  cofirmResendContainer:{
    flexDirection:'row',
    justifyContent:'space-around',
    alignItems:'center',
    width:'100%',
    marginTop:screen.width/24
  }
  
  });
  


export default SignupScreen;