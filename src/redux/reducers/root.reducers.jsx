import { combineReducers } from "redux"
import userReducer from "./user.reducers"
import productReducer from "./product.reducers"
import categoryReducer from "./categories.reducers"
import brandReducer from "./brands.reducers"

export const rootReducer = combineReducers({
  brand: brandReducer,
  user: userReducer,
  product: productReducer,
  category: categoryReducer
})
