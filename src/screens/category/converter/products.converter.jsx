import React, { useEffect } from "react"
import { domain } from "../../../services/baseURL.services"
import { fetchProductsByCategory } from "../../../redux/actions/product.actions"
import { connect } from "react-redux"

const ProductsConverter = ({
  page,
  converters,
  dispatch,
  conFilter,
  history,
}) => {
  useEffect(() => {
    dispatch(fetchProductsByCategory("5e67d1d3616a8d11cc4eacab", page))
  }, [page])
  if (conFilter)
    return (
      conFilter &&
      conFilter.productsByPagination.map((con, index) => {
        return (
          <div className="col-md-4 col-xs-6" key={index}>
            <div className="product">
              <div className="product-img">
                <img alt="#imgProduct" src={domain + "/" + con.image.path} />
              </div>
              <div className="product-body">
                <h5 className="product-name">
                  <a href="#">{con.name}</a>
                </h5>
              </div>
              <div className="view-detail">
                <button
                  className="view-detail-btn"
                  onClick={() => history.push(`/detail/${con._id}`)}
                >
                  Chi tiết
                </button>
              </div>
            </div>
          </div>
        )
      })
    )
  else if (!conFilter)
    return (
      converters &&
      converters.productsByPagination.map((con, index) => {
        return (
          <div className="col-md-4 col-xs-6" key={index}>
            <div className="product">
              <div className="product-img">
                <img alt="#imgProduct" src={domain + "/" + con.image.path} />
              </div>
              <div className="product-body">
                <h5 className="product-name">
                  <a href="#">{con.name}</a>
                </h5>
              </div>
              <div className="view-detail">
                <button
                  className="view-detail-btn"
                  onClick={() => {
                    history.push(`/detail/${con._id}`)
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

const mapStateToProps = (state) => {
  return {
    converters: state.product.productsByCategory,
  }
}
export default connect(mapStateToProps)(ProductsConverter)
