export default function productsFetched(product) {
  return {
    type: "FETCHED_PRODUCTS",
    payload: product
  };
}
