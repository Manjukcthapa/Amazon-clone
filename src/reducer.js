export const initialState = {
  basket: [
      {
    id:"123434",
    title:"New Apple iPad (10.2-inch, Wi-Fi, 32GB) - Space Gray",
    rating:5,
    price:324.99,
    image:"https://ss7.vzw.com/is/image/VerizonWireless/ipad-pro-12-9-in-cellular-space-gray-03182020?fmt=pjpg&hei=520"
  
  },
  ],

  user:null,
  
};

export const getBasketTotal = (basket)  => 
basket?.reduce((amount,item) => item.price +amount, 0)

const reducer =(state, action) =>{
    console.log(action)
  switch (action.type) {
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
    default:
      return state;
  }
}

export default reducer;