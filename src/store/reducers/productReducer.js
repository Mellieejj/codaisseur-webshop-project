const initialState = [];

export default function productReducer(state = initialState, action) {
  console.log("product reducer just received an action", action);
  switch (action.type) {
    case "": {
      console.log("hi");
      return action.payload;
    }
    default: {
      return state;
    }
  }
}
