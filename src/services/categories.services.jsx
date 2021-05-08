import { restConnector } from "./baseURL.services"
class CategoriesServices {
  fetchCategories() {
    return restConnector({
      url: `api/categories`,
      method: "GET"
    })
  }
}
export default new CategoriesServices()
