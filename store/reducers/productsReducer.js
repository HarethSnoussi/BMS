import { ADD_PRODUCTS } from "../actions/productsActions";



const initialState = {
    products :[
    {id:"4", name :"Intérépteur A", quantity :"50",img : require('../../assets/inteBMS.jpg'),category:"intpri",company:"BMS"},
    {id:"6", name :"Intérépteur C", quantity :"200",img : require('../../assets/inteBMS.jpg'),category:"intpri",company:"BMS"},
    {id :"7",  name :"Prise D", quantity :"70",img : require('../../assets/prise2bMs.jpg'),category:"intpri",company:"BMS"},

    {id :"1",  name :"Ampoule A", quantity :"150",img : require('../../assets/ampoulebms.jpg'),category:"lampes",company:"BMS"},
    {id :"2", name :"Ampoule B", quantity :"250",img : require('../../assets/ampoulebms.jpg'),category:"lampes",company:"BMS"},
    {id :"3",  name :"Ampoule C", quantity :"130",img : require('../../assets/ampoulebms.jpg'),category:"lampes",company:"BMS"},
],
  
};


const productsReducer =(state=initialState,action)=>{
    switch(action.type) {
     case ADD_PRODUCTS : 
     const temp = [];
     temp.push(action.product);
     return {...state , product : [...state.product,...temp]};



        default : return state ;
    }



}





export default productsReducer;