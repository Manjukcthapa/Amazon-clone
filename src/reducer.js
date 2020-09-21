export const initialState = {
  basket: [],
  user: null,
};

function reducer(state, action) {
  switch (action.type) {
    case "ADD_TO_BASKET":
      //LOGIC FOR ADDING ITM TO BASKET
      break;
    case "REMOVE_FROM_BASKET":
      //LOGIC FOR RMOVING FROM BASKET
      break;
    default:
      return state;
  }
}

export default reducer;