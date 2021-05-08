import { FETCH_BRANDS } from "./type.actions"
import BrandsServices from "../../services/brands.services"

export const fetchBrands = () => {
  return dispatch => {
    BrandsServices.fetchBrands()
      .then(res => {
        dispatch(actFetchBrands(res.data))
      })
      .catch(err => console.log)
  }
}
export const actFetchBrands = data => {
  return {
    type: FETCH_BRANDS,
    payload: data
  }
}
