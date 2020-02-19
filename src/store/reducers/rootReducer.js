import { combineReducers } from "redux";
import productReducer from "../products/productReducer";

export default combineReducers({
  products: productReducer
});
