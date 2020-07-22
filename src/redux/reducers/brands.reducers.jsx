import { FETCH_BRANDS } from "../actions/type.actions"

let initialState = {
  brands: null
}
const brandReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_BRANDS:
      state.brands = action.payload
      return { ...state }

    default:
      return state
  }
}
export default brandReducer
