
export const ADD_PRODUCTS = "ADD_PRODUCTS"

export const addProduct = (product,category,company) => {
   return async (dispatch) =>{
      try {
//   const theImage =  product.img ==="int"  ? require('../../assets/prise2bms.jpg') : require('../../assets/ampoulebms.jpg') ;
         
         const finalProduct = {category :category,
            company : company==="BMS" ? "BMS" : product.company ,
            id :product.name+product.company,
            img :product.img ==="int"  ? require('../../assets/inteBMS.jpg') :  require('../../assets/ampoulebms.jpg'),
            name : product.name ,
            quantity : product.quantity


         }

          dispatch( {type : ADD_PRODUCTS , product :finalProduct });
         
      } catch (error) {
         throw error
      }
  
   }
    };


