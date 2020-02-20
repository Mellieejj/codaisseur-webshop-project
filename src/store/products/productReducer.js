const initialState = { list: [], cart: [], search: [] };

export default function productReducer(state = initialState, action) {
  console.log(action);
  switch (action.type) {
    case "FETCHED_PRODUCTS": {
      return { ...state, list: action.payload };
    }
    case "CLICKED_IN_CART": {
      return { ...state };
    }
    case "FITLER_SEARCH": {
      const searchString = action.payload;

      return {
        ...state,
        search: state.list.filter(product => {
          return product.name.toLowerCase().includes(searchString);
        })
      };
    }
    default: {
      return state;
    }
  }
}
