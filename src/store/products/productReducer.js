const initialState = { list: [], cart: [], search: [] };

export default function productReducer(state = initialState, action) {
  console.log(action);
  switch (action.type) {
    case "FETCHED_PRODUCTS": {
      return { ...state, list: action.payload };
    }
    case "CART_ADDED": {
      const productId = action.payload;
      console.log("cat", action.payload);
      const product = state.list.find(p => p.id === productId);

      return {
        ...state,
        cart: [...state.cart, product]
      };
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

/*
{
  type: "CART_ADDED",
  payload: productId
}
*/
