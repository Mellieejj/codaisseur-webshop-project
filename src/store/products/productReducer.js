const initialState = { list: [], cart: [] };

export default function productReducer(state = initialState, action) {
  console.log(action);
  switch (action.type) {
    case "FETCHED_PRODUCTS": {
      return { ...state, list: action.payload };
    }
    case "CLICKED_IN_CART": {
      return { ...state };
    }
    default: {
      return state;
    }
  }
}
