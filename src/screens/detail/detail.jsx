import React, { useEffect } from "react"
import { connect } from "react-redux"
import {
  fetchProductById,
  fetchProductsByCategory,
} from "../../redux/actions/product.actions"
import { domain } from "../../services/baseURL.services"
import TabPaneDetail from "./tabpane.detail"
import RelatedProductDetail from "./related.detail"
const DetailScreen = ({ match, dispatch, productById, productsByCategory }) => {
  const { productId } = match.params
  useEffect(() => {
    dispatch(fetchProductById(productId))
  }, [productId])
  return (
    productById && (
      <>
        {console.log(productById)}
        <div className="section">
          {/* container */}
          <div className="container">
            {/* row */}
            <div className="row">
              {/* Product main img */}
              <div className="col-md-4 col-md-push-2">
                <div id="product-main-img">
                  <div className="product-preview">
                    <img
                      src={domain + "/" + productById.image.path}
                      alt="#product"
                      width="100px"
                      height="300px"
                    />
                  </div>
                </div>
              </div>
              {/* /Product main img */}

              {/* Product details */}
              <div className="col-md-6 border border-1">
                <div className="product-details">
                  <h2 className="product-name">{productById.name}</h2>
                  <p className="product-keyword">
                    Từ khóa:{" "}
                    <a href="">
                      <small>{productById.category.nameCategory}</small>
                    </a>
                    ,{" "}
                    <a href="">
                      <small>{productById.name}</small>
                    </a>
                  </p>
                  <ul className="product-links">
                    <li>Loại sản phẩm:</li>
                    <li>
                      <a href="#">{productById.category.nameCategory}</a>
                    </li>
                    <li>Tình trạng: </li>
                    <li>
                      <a href="#">{productById.isNewOne ? "Mới" : "Cũ"}</a>
                    </li>
                  </ul>
                </div>
                <div className="product-contact">
                  <div className="product-contact-button">
                    <button className="button">Biến tần chính hãng</button>
                  </div>
                </div>
                <div className="product-contact">
                  <div className="product-contact-button">
                    <button className="button">LTTNElectric</button>
                  </div>
                </div>
              </div>
              {/* /Product details */}
              {/* Product tab */}
              <TabPaneDetail detail={productById.detail} />
              {/* /product tab */}
            </div>
            {/* /row */}
          </div>
          {/* /container */}
        </div>
        <div className="section">
          {/* Related Products */}
          <RelatedProductDetail categoryId={productById.category._id} />
          {/* /Related Products */}
        </div>
      </>
    )
  )
}
const mapStateToProp = (state) => {
  return {
    productById: state.product.productById,
  }
}

export default connect(mapStateToProp)(DetailScreen)
