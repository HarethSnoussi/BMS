
import React ,{useEffect, useState,useCallback,useRef}  from 'react';
import { StyleSheet, Text, View, ImageBackground , Image ,Dimensions , StatusBar,ActivityIndicator,ScrollView, TouchableOpacity,LogBox } from 'react-native';
import Constants from 'expo-constants';
import {Ionicons,  Feather,MaterialIcons} from "@expo/vector-icons";
import {Button ,Overlay} from 'react-native-elements';
import { useDispatch,useSelector } from 'react-redux';
import TopResselersCard from '../../components/TopResselersCard';
import { SearchBar } from 'react-native-elements';

const screen = Dimensions.get("window");


//Create the store and the combine reducers


const resellers = [
  {name:"1",surname:"Revendeur",phone : "+213 557 11 54 51",region : "Blida",wilaya : "Blida",mark : 2.5,activite : "Electricien"},
  {name:"4",surname:"Revendeur",phone : "+213 552 12 54 51",region : "Kouba",wilaya : "Alger",mark : 2.5,activite : "Grossiste"},

]
const MyResellers = props =>{

  const [searchState,setSearchState] = useState("");

  const [foundResellers,setFoundResellers] = useState([]);
  const [foundRegions,setFoundRegions] = useState([]);


  // const confirmedBookings = useSelector(state =>state.bookings.confirmedBookings);

 

  const regions = ["Blida,Alger"];

useEffect(()=>{

const a= regions.filter((e)=>{

  const itemData = e ? e.toUpperCase() : ''.toUpperCase();
  
  const textData = searchState.toUpperCase();
  
  return itemData.startsWith(textData);

})
const resultResellers = resellers.filter(e=>e.wilaya.toUpperCase() === searchState.toUpperCase());

setFoundResellers([...resultResellers]);

searchState === "" ? setFoundRegions([]): setFoundRegions(a);

},[searchState,setFoundResellers]);


//on Press on search result 

const searchResult = async (s)=>{

setSearchState(s);


}


const searchedResult = searchState === "" ? resellers :  foundResellers ;
    return(

        <View style ={styles.container}>
      
        <StatusBar hidden />
     
        <ScrollView  >
  
        <ImageBackground source = {require("../../assets/eclairage.jpg")} style ={{height : screen.height*0.3 , backgroundColor :"#007184",width:"100%",justifyContent :"space-between",alignItems :"flex-end"}}>
        <SearchBar
        placeholder ="Wilaya"
                containerStyle = {styles.searchBar}
                onChangeText = {(text)=>setSearchState(text)}
                inputContainerStyle = {{
                        borderRadius : screen.width/14.4
                }}
                lightTheme = {true}
               
                value={searchState}
                onClear={text => setSearchState('')}
                searchIcon = {{color : "#ffdd2e", size : screen.width/14.4}}

              />

      
             
  <View style = {{width : "100%" ,height:"30%",alignItems :"flex-end"}}>
                   <Image source ={ require ("../../assets/translogo.png") } style = {{height : "100%",width :"60%",resizeMode :"contain"}}/>

                </View>

           



                </ImageBackground>
  {
    searchedResult.length !==0 && 
            <View style = {styles.textTopMarketers}>
              {
                searchState === "" ?
              
                <View style = {{flexDirection :"row"}}>
                <Text style = {styles.bestText}>Mes Revendeurs</Text>
                <MaterialIcons onPress ={()=>{props.navigation.navigate("NewReseller")}} name="add-circle" size={24} color="#80b265" /> 
                </View>
                  :   <View style = {{flexDirection :"row"}}>
                  <Text style = {styles.bestText}>Mes Revendeurs à : {searchState}</Text>
                  <MaterialIcons onPress ={()=>{props.navigation.navigate("NewReseller")}} name="add-circle" size={24} color="#80b265" /> 
                  </View>
              }
                  
          {    
            searchedResult.length !==0 &&
            <View  >
            
                <Text style = {styles.showAll}>
                Total : {searchedResult.length}
                </Text>
                </View>
                
                }
              
                </View>
}
                {
  searchState !== "" && foundResellers.length === 0 &&foundRegions.map((e,index)=>{
return(
  
  <TouchableOpacity  onPress={()=>{searchResult(e)}} key ={index} style={styles.searchedRegion} >
  <Feather name="arrow-right" size={screen.width/19.2} color="black" style = {{marginRight : "5%"}} />
    <Text style = {{fontSize : screen.width/26}} >{e}</Text>
   
    </TouchableOpacity>

 
)


  })
 

}
                
             
             <ScrollView  style ={styles.topMarketers}  showsHorizontalScrollIndicator  = {false} >

                                                      {
                                                        searchedResult.map((e,index)=>{

                                                          return (    <TopResselersCard 
                                                            key = {index}
                                                            name = {e.name}
                                                            surname = {e.surname}
                                                            phone =  {e.phone}
                                                            region = {e.region}
                                                            wilaya = {e.wilaya}
                                                            mark = {2.5}
                                                            navigate = {()=>props.navigation.navigate("ResellerHomeScreen")}
                                                            activite = {e.activite}
                                                            localisation = {()=>props.navigation.navigate("NewPlace")}

                                                            />);

                                                        })
                                            
                                          }
                                                

                                               

 </ScrollView>
  
            </ScrollView>
             
         
          
          

  </View>
     
       );    
  
      

    
}

const styles= StyleSheet.create({
    container : {
        flex : 1,
        backgroundColor : "#fff",
        

    },

    /////////////////////////////////////////////
    firstImage : {
      width : screen.width,
      height : screen.height * 0.35 ,
      overflow : "hidden",
     backgroundColor : "#007184",
 
    } ,
    image : {
      height : "100%",
      width : "100%",
     
     
  },
  
  unAvailable : {
    height : "5%",
    width : "90%",
    alignSelf : "center",
    justifyContent : "center"
  
  },
  ////////////////////////////////////////////////////////
   textTopMarketers : {
     flexDirection : "row",
     justifyContent : "space-between",
      marginVertical : screen.width/24,
      marginHorizontal : screen.width/24,
     
      alignItems :"center"
   },

  topMarketers : {
   
    width : "100%",
   
   
  },
  bestText :{
    fontSize : screen.width/22,
    marginRight:5,
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
  ///////////////////////////////////////////////////
  
   /////////////////////////////////////////////////
   searchBar :{
    width : "80%" , 
    alignSelf : "center",
    
    backgroundColor : "rgba(52, 52, 52, 0)" ,
    
    borderTopWidth : 0 , 
    borderBottomWidth : 0 ,
    marginTop :15
    },

    searchedRegion : 
    {
      paddingVertical : screen.width/26,
            borderBottomWidth:0.6,
            flexDirection :"row",
            paddingLeft : 10,
            borderColor : "#c9c9c9"
          },
  
    firstTitle : {
   
      alignSelf : "center",
      alignItems : "center",
    borderRadius : screen.width/24,
    
    justifyContent : "center",
 
  
    },
    centered: {
      flex:1,
     alignItems:'center',
     justifyContent:'center',
     width:'100%',
     height:'100%',
     resizeMode:'cover'
    }
  
     
  
  });


export default MyResellers;