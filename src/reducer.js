export const initialState = {
  basket: [],
  
};

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
      return {state}
      break;
    default:
      return state;
  }
}

export default reducer;