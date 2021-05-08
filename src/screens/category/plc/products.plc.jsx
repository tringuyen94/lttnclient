import React, { useEffect } from "react"
import { domain } from "../../../services/baseURL.services"
import { fetchProductsByCategory } from "../../../redux/actions/product.actions"
import { connect } from "react-redux"

const ProductsPLC = ({ page, PLCs, dispatch, plcFilter, history }) => {
  useEffect(() => {
    dispatch(fetchProductsByCategory("5e67d1dc616a8d11cc4eacac", page))
  }, [page])
  if (plcFilter)
    return (
      plcFilter &&
      plcFilter.productsByPagination.map((plc, index) => {
        return (
          <div className="col-md-4 col-xs-6" key={index}>
            <div className="product">
              <div className="product-img">
                <img alt="#imgProduct" src={domain + "/" + plc.image.path} />
              </div>
              <div className="product-body">
                <h5 className="product-name">
                  <a href="#">{plc.name}</a>
                </h5>
              </div>
              <div className="view-detail">
                <button
                  className="view-detail-btn"
                  onClick={() => {
                    history.push(`/detail/${plc._id}`)
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
  else if (!plcFilter)
    return (
      PLCs &&
      PLCs.productsByPagination.map((plc, index) => {
        return (
          <div className="col-md-4 col-xs-6" key={index}>
            <div className="product">
              <div className="product-img">
                <img alt="#imgProduct" src={domain + "/" + plc.image.path} />
              </div>
              <div className="product-body">
                <h5 className="product-name">
                  <a href="#">{plc.name}</a>
                </h5>
              </div>
              <div className="view-detail">
                <button
                  className="view-detail-btn"
                  onClick={() => {
                    history.push(`/detail/${plc._id}`)
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
    PLCs: state.product.productsByCategory,
  }
}
export default connect(mapStateToProps)(ProductsPLC)
