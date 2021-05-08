import { FETCH_CATEGORIES } from "./type.actions"
import CategoriesServices from "../../services/categories.services"

/**
 * ASYNC
 */
export const fetchCategories = () => {
  return dispatch => {
    CategoriesServices.fetchCategories()
      .then(res => {
        dispatch(actFetchCategories(res.data))
      })
      .catch(err => console.log)
  }
}

/**
 * ACTIONS
 */
export const actFetchCategories = data => {
  return {
    type: FETCH_CATEGORIES,
    payload: data
  }
}
