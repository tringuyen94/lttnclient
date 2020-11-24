import React, { useEffect } from "react"
import { domain } from "../../services/baseURL.services"
import { connect } from "react-redux"
import { fetchProductsByCategory } from "../../redux/actions/product.actions"
import { useHistory } from "react-router-dom"

const RelatedProductDetail = ({ dispatch, categoryId, productsByCategory }) => {
  useEffect(() => {
    dispatch(fetchProductsByCategory(categoryId, 1))
  }, [categoryId])
  const history = useHistory()
  const renderProduct = () => {
    return (
      productsByCategory &&
      productsByCategory.productsByPagination.map((product, index) => {
        if (index < 4)
          return (
            <div className="col-md-3 col-xs-6" key={index}>
              <div className="product">
                <div className="product-img">
                  <img
                    alt="#imgProduct"
                    src={domain + "/" + product.image.path}
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
                      history.replace(`/detail/${product._id}`)
                      window.scrollTo({
                        top: 0,
                      })
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
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <div className="section-title text-center">
            <h3 className="title">SẢN PHẨM LIÊN QUAN</h3>
          </div>
          <div class="row">{renderProduct()}</div>
        </div>
      </div>
    </div>
  )
}
const mapStateToProps = (state) => {
  return {
    productsByCategory: state.product.productsByCategory,
  }
}

export default connect(mapStateToProps)(RelatedProductDetail)
