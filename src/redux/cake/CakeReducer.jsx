import { BUY_CAKE } from "./cakeType";
//slice  
const initialState = {
  numOfCake: 10,
};

const CakeReducer = (state = initialState, action) => {
  console.log("reduced")
  switch (action.type) {
    case BUY_CAKE:
      return {
        ...state,
        numOfCake: state.numOfCake - 1,
      };
    default:
      return state;
  }
};

export default CakeReducer;