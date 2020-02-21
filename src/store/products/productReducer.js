const initialState = { list: [], cart: [], search: [] };

export default function productReducer(state = initialState, action) {
  console.log(action);
  switch (action.type) {
    case "FETCHED_PRODUCTS": {
      return { ...state, list: action.payload };
    }
    case "CART_ADDED": {
      const productId = action.payload;
      const productCart = state.cart.find(p => p.id === productId);

      if (!productCart) {
        const product = state.list.find(p => p.id === productId);
        return {
          ...state,
          cart: [...state.cart, { ...product, quantity: 1 }]
        };
      } else {
        const updatedCart = state.cart.map(p =>
          p.id === productId ? { ...p, quantity: p.quantity + 1 } : p
        );
        return {
          ...state,
          cart: updatedCart
        };
      }
    }

    case "CART_SUBTRACTED": {
      const productId = action.payload;

      const productCart = state.cart.find(p => p.id === productId);

      if (!productCart) {
        return state;
      } else {
        if (productCart.quantity > 1) {
          const updatedCart = state.cart.map(p =>
            p.id === productId ? { ...p, quantity: p.quantity - 1 } : p
          );
          return {
            ...state,
            cart: updatedCart
          };
        } else {
          const updatedCart = state.cart.filter(p => p.id !== productId);
          return {
            ...state,
            cart: updatedCart
          };
        }
      }
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
