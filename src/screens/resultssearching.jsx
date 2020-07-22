import React, { useEffect } from "react"
import { domain } from "../services/baseURL.services"
import { connect } from "react-redux"
import { withRouter } from "react-router-dom"

const ResultsSearching = ({ filter, history }) => {
  const displayResult = () => {
    return (
      filter &&
      filter.productsByPagination.map((f, index) => {
        return (
          <div className="col-md-3 col-xs-6" key={index}>
            <div className="product">
              <div className="product-img">
                <img alt="#imgProduct" src={domain + "/" + f.image.path} />
              </div>
              <div className="product-body">
                <h5 className="product-name">
                  <a href="#">{f.name}</a>
                </h5>
              </div>
              <div className="view-detail">
                <button
                  className="view-detail-btn"
                  onClick={() => history.push(`detail/${f._id}`)}
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
    <div className="row">
      <div className="col-md-3"></div>
      <div className="col-md-9">
        <div className="row">{displayResult()}</div>
      </div>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    filter: state.product.filter,
  }
}
export default withRouter(connect(mapStateToProps)(ResultsSearching))
