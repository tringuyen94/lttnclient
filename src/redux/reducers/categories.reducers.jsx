import { FETCH_CATEGORIES } from "../actions/type.actions"

let initialState = {
  categories: null
}
const categoryReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_CATEGORIES:
      state.categories = action.payload
      return { ...state }
    default:
      return state
  }
}
export default categoryReducer
