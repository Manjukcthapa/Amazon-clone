import { StateContext } from "./StateProvider";

const products = [
  {
    id:"123456",
    title:"Echo Glow - Multicolor smart lamp for kids - requires compatible Alexa device ",
    rating:5,
    price:18.99,
    image:"https://qvc.scene7.com/is/image/QVC/e/78/e305178.001?$aempdzoom$"
  },
  {
    id:"123434",
    title:"New Apple iPad (10.2-inch, Wi-Fi, 32GB) - Space Gray ",
    rating:5,
    price:324.99,
    image:"https://ss7.vzw.com/is/image/VerizonWireless/ipad-pro-12-9-in-cellular-space-gray-03182020?fmt=pjpg&hei=520"
  },
  {
    id:"1234567",
    title:"Blink Mini – Compact indoor plug-in smart security camera,  Works with Alexa – 2 cameras ",
    rating:5,
    price:64.99,
    image:"https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcSJGEpoGs7k9mJyJQtKXyymb3Lq3nYQl-Tom9vlqVUWbTBnUhPt79D7xzejp8-T-ql25VaPjrtOcEJpgWg6VMX6UNcwWYe2"
  },
  {
    id:"123446",
    title:"Echo Show 8 Adjustable Stand - Black ",
    rating:5,
    price:24.99,
    image:"https://i.ebayimg.com/images/g/A9oAAOSwk~Be-iK-/s-l1600.jpg"
  },
  {
    id:"123487",
    title:"2020 Newest HP 14 Inch Non-Touch Premium Laptop, AMD Athlon Silver 3050U up to 3.2",
    rating:5,
    price:400.99,
    image:"https://i.dell.com/is/image/DellContent//content/dam/global-site-design/product_images/dell_client_products/notebooks/vostro_notebooks/14_3480/pdp/notebook-vostro-14-3480-3481-apj-emea-pdp-gallery-504x350.jpg?fmt=jpg&wid=570&hei=400"
  },
  {
    id:"123432",
    title:"Apple iMac 21.5-inch 3.06GHz Core",
    rating:5,
    price:1200.99,
    image:"https://i.ebayimg.com/images/g/aEIAAOSwkupfEd2C/s-l640.png"
  }
]

export const initialState = {
  basket: [],
  user:null,
  products: products,
  searchTerm: ""
};

export const getBasketTotal = (basket)  => 
basket?.reduce((amount,item) => item.price +amount, 0)

const reducer =(state, action) =>{
    console.log(action)
  switch (action.type) {
    case "SET_USER":
      return{
        ...state,
        user:action.user,
      }
   
    case "ADD_TO_BASKET":
      //LOGIC FOR ADDING ITM TO BASKET
      return {
          ...state,
          basket:[...state.basket, action.item]
        }
      break;
    case "REMOVE_FROM_BASKET":
      //LOGIC FOR RMOVING FROM BASKET
      let newBasket = [...state.basket];
      const index = state.basket.findIndex((basketItem) => basketItem.id === action.id)
      if(index>=0){
          newBasket.splice(index,1)
      }else{
          console.warn(
              `canot revome product (id: ${action.id} as a product)`
          )
      }
      return {...state, basket:newBasket};
      break;
    case "UPDATE_SEARCH":   
      return {...state, searchTerm: action.searchTerm};
     break;

    default:
      return state;
  }
}

export default reducer;