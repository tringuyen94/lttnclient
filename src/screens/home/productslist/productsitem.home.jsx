import React, { useEffect } from "react"
import { connect } from "react-redux"
import { fetchProductsByCategory } from "../../../redux/actions/product.actions"
import { domain } from "../../../services/baseURL.services"
import { withRouter } from "react-router-dom"
const ProductsItem = ({
  dispatch,
  productsByCategory,
  categoryId,
  history,
}) => {
  useEffect(() => {
    dispatch(fetchProductsByCategory(categoryId, 1))
  }, [categoryId])
  const renderProducts = () => {
    return (
      productsByCategory &&
      productsByCategory.productsByPagination.map((product, index) => {
        if (index < 4)
          return (
            <div className="col-md-3" key={index}>
              <div className="product">
                <div className="product-img">
                  <img
                    src={domain + "/" + product.image.path}
                    alt="#imgProduct"
                    height="160px"
                  />
                </div>
                <div className="product-body">
                  <h5 className="product-name">
                    <a href="#">{product.name}</a>
                  </h5>
                </div>
                <div className="view-detail">
                  <button
                    className="view-detail-btn"
                    onClick={() => {
                      history.push(`detail/${product._id}`)
                    }}
                  >
                    Chi tiết
                  </button>
                </div>
              </div>
            </div>
          )
      })
    )
  }

  return <div className="row">{renderProducts()}</div>
}
const mapStateToProps = (state) => {
  return {
    productsByCategory: state.product.productsByCategory,
  }
}
export default withRouter(connect(mapStateToProps)(ProductsItem))
