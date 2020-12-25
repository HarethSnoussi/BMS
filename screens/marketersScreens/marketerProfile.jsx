
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
const MarketerProfile = (props) =>{

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
          <View style={{width:'90%',height:'15%',flexDirection:'row',justifyContent:'space-between',paddingTop:25}}>
                <TouchableOpacity>
                 
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>props.navigation.navigate('MarketerParameters')}>
                  <Ionicons title="paramètres" name ='md-settings' color='white' size={23} />
                </TouchableOpacity>
          </View>
          <View style={{width:'70%',height:'15%',justifyContent:'center',alignItems:'center'}}>
            <Text style={{alignSelf:'center',color:'white'}}>*Ces informations sont importantes pour l'identification de nos agents de marketing </Text>
          </View>
          <View style={{width:'90%',height:'70%'}}>
                <CustomInput
                      id='nom'
                      rightIcon={<Ionicons title="name" name ='ios-person' color={Colors.primary} size={23} />}
                      placeholder='Nom'
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
                      initialValue='Raouf'
                      initiallyValid={true}
                      required
                      placeholderTextColor='rgba(50,52,70,0.4)'
                      inputStyle={{fontSize:screen.width/24}}
                    />
                    <CustomInput
                      id='email'
                      rightIcon={<MaterialCommunityIcons title="email" name ='email-open' color={Colors.primary} size={23} />}
                      placeholder='Email'
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
                      id='address'
                      rightIcon={<MaterialCommunityIcons title="address" name ='map' color={Colors.primary} size={23} />}
                      placeholder='Adresse'
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
                <View style={{ width:'100%',borderWidth:1,borderRadius:screen.width/14.4,backgroundColor:'#d3d3d3',borderColor:sex!==sexTypes[0]?'#d3d3d3':Colors.primary,marginVertical:screen.width/120,height:screen.width/8,justifyContent:'center'}}>
                {Platform.OS === 'android' ? 
                    <Picker
                    selectedValue={sex}
                    onValueChange={itemValue => setSex(itemValue)}
                    style={{fontSize:screen.width/30,color:Colors.blue,marginHorizontal:screen.width/25.7}}
                    >
                    {sexTypes.map(el=> <Picker.Item label={el} value={el} key={el} />)}
                    </Picker> :
                    <TouchableOpacity onPress={onPressSex} style={{ width:'100%',flexDirection:'row',alignItems:'center',justifyContent:'space-between',paddingLeft:screen.width/21.2,paddingRight:screen.width/14.4}}>
                    <Text  style={{fontSize:screen.width/30,color:Colors.blue,fontSize:screen.width/24,fontWeight:'500'}}>
                      {sex?sex:sexTypes[0]}
                    </Text>
                    <Ionicons name="ios-arrow-down" size={screen.width/15} color={Colors.blue} onPress={onPressSex} />
                    </TouchableOpacity>}
                </View>

                <Button
                  theme={{colors: {primary:Colors.primary}}} 
                  title="Modifier"
                  titleStyle={styles.labelButton}
                  buttonStyle={styles.confirmedButtonStyle}
                  onPress={()=>props.navigation.navigate('NewReseller')}
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
     marginTop:30
     },
     labelButton:{
      color:'#FFF',
      fontSize:screen.width/22.5,
      textTransform:null,
     },
  });
  


export default MarketerProfile;