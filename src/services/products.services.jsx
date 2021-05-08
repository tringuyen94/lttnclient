import { restConnector } from "./baseURL.services"

class ProductsServices {
  fetchProducts() {
    return restConnector({
      url: `/api/products`,
      method: "GET",
    })
  }
  fetchProductByCategory(categoryId, page) {
    return restConnector({
      url: `/api/products/byCategory/${categoryId}/${page}`,
      method: "GET",
    })
  }
  fetchProductById(productId) {
    return restConnector({
      url: `/api/products/${productId}`,
      method: "GET",
    })
  }
  fetchProductByPagination(page) {
    return restConnector({
      url: `/api/products/byPagination/${page}`,
      method: "GET",
    })
  }
  fetchConvertersByFilter(conFilter) {
    return restConnector({
      url: `/api/products/byConverters/1`,
      method: "POST",
      data: conFilter,
    })
  }
  fetchPLCsByFilter(plcFilter) {
    return restConnector({
      url: `api/products/byPLcs/1`,
      method: "POST",
      data: plcFilter,
    })
  }
  fetchProductsBySearch(value) {
    return restConnector({
      url: `api/products/byName/1`,
      method: "POST",
      data: value,
    })
  }
}
export default new ProductsServices()
