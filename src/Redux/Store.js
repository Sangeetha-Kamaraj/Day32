import { configureStore } from "@reduxjs/toolkit";
import Cart from "./Reducers/Cart";
import Product, { saveAllProducts } from "./Reducers/Products";

export default configureStore({
  // Root_reducer
  reducer: {
    Cart: Cart,
    Products: Product,
  },
});