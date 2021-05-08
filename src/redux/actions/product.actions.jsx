import {
  FETCH_PRODUCTS,
  FETCH_PRODUCTS_BY_CATEGORY,
  FETCH_PRODUCT_BY_ID,
  FETCH_PRODUCTS_BY_PAGINATION,
  GET_PRODUCTS_BY_SEARCHING,
} from "./type.actions"
import ProductsServices from "../../services/products.services"
import { toast } from "react-toastify"
/**
 * ASYNC
 */
export const fetchProducts = () => {
  return (dispatch) => {
    ProductsServices.fetchProducts()
      .then((res) => {
        dispatch(actFetchProducts(res.data))
      })
      .catch((err) => console.log)
  }
}
export const fetchProductsByCategory = (categoryId, page) => {
  return (dispatch) => {
    ProductsServices.fetchProductByCategory(categoryId, page)
      .then((res) => {
        dispatch(actFetchProductByCategory(res.data))
      })
      .catch((err) => console.log)
  }
}
export const fetchProductById = (productId) => {
  return (dispatch) => {
    ProductsServices.fetchProductById(productId)
      .then((res) => {
        dispatch(actFetchProductById(res.data))
      })
      .catch((err) => console.log)
  }
}
export const fetchProductsByPagination = (page) => {
  return (dispatch) => {
    ProductsServices.fetchProductByPagination(page)
      .then((res) => {
        dispatch(actFetchProductByPagination(res.data))
      })
      .catch((err) => console.log(err))
  }
}
export const getProductsBySearching = (value, history) => {
  return (dispatch) => {
    ProductsServices.fetchProductsBySearch(value)
      .then((res) => {
        dispatch(actGetProductsBySearching(res.data))
        history.push("/result")
      })
      .catch((err) => toast.error("Không tìm thấy sản phẩm nào"))
  }
}

/**
 * ACTIONS
 */
export const actGetProductsBySearching = (data) => {
  return {
    type: GET_PRODUCTS_BY_SEARCHING,
    payload: data,
  }
}

export const actFetchProductByPagination = (data) => {
  return {
    type: FETCH_PRODUCTS_BY_PAGINATION,
    payload: data,
  }
}
export const actFetchProductById = (data) => {
  return {
    type: FETCH_PRODUCT_BY_ID,
    payload: data,
  }
}
export const actFetchProducts = (data) => {
  return {
    type: FETCH_PRODUCTS,
    payload: data,
  }
}
export const actFetchProductByCategory = (data) => {
  return {
    type: FETCH_PRODUCTS_BY_CATEGORY,
    payload: data,
  }
}
