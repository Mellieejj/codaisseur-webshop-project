export default function productsFetched(product) {
  return {
    type: "FETCHED_PRODUCTS",
    payload: product
  };
}

export function fetchProducts(dispatch, getState) {
  fetch("http://localhost:4000/products")
    .then(res => res.json())
    .then(product => {
      console.log("hello this is", product);
      dispatch(productsFetched(product));
    });
}

export function filterSearch(FilterString) {
  return {
    type: "FITLER_SEARCH",
    payload: FilterString
  };
}

export function cartAdd(id) {
  return {
    type: "CART_ADDED",
    payload: id
  };
}
