import {
  FETCH_PRODUCTS,
  FETCH_PRODUCTS_BY_CATEGORY,
  FETCH_PRODUCT_BY_ID,
  FETCH_PRODUCTS_BY_PAGINATION,
  GET_PRODUCTS_BY_SEARCHING,
} from "../actions/type.actions"

let initialState = {
  products: null,
  productsByCategory: null,
  productById: null,
  pagination: null,
  filter: null,
  loader: true,
}
const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_PRODUCTS:
      state.products = action.payload
      return { ...state }
    case FETCH_PRODUCT_BY_ID:
      state.productById = action.payload
      return { ...state }
    case FETCH_PRODUCTS_BY_CATEGORY:
      state.productsByCategory = action.payload
      return {
        ...state,
        loader: setTimeout(() => true, 3000),
      }

    case GET_PRODUCTS_BY_SEARCHING:
      state.filter = action.payload
      return { ...state }
    default:
      return state
  }
}
export default productReducer
