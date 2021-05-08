import { restConnector } from "./baseURL.services"
class BrandServices {
  fetchBrands() {
    return restConnector({
      url: `api/brands`,
      method: "GET"
    })
  }
}

export default new BrandServices()
