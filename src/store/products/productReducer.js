const initialState = [];

export default function productReducer(state = initialState, action) {
  console.log(action);
  switch (action.type) {
    case "FETCHED_PRODUCTS": {
      return action.payload;
    }
    default: {
      return state;
    }
  }
}
