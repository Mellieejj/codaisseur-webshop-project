import productsFetched from "./actionFetched";
import { render } from "@testing-library/react";

export function fetchProducts(dispatch, getState) {
  fetch("http://localhost:4000/products")
    .then(res => res.json())
    .then(product => {
      dispatch(productsFetched(product));
    });
}
