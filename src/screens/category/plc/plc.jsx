import React, { Fragment, useEffect, useState } from "react"
import { connect } from "react-redux"
import { fetchProductsByCategory } from "../../../redux/actions/product.actions"
import ProductsPLC from "./products.plc"
import AsidePLC from "./aside.plc"
import ProductsServices from "../../../services/products.services"

const Plc = ({ productsByCategory, dispatch, history }) => {
  const [pageCurrent, setPageCurrent] = useState(1)
  const [plcFilter, setPLCsFilter] = useState()
  useEffect(() => {
    dispatch(fetchProductsByCategory("5e67d1dc616a8d11cc4eacac", 1))
  }, [])
  const getPLCFilter = (value) => {
    ProductsServices.fetchPLCsByFilter(value)
      .then((res) => {
        setPLCsFilter(res.data)
      })
      .catch((err) => console.log)
  }
  return (
    productsByCategory && (
      <Fragment>
        <div className="container">
          <div className="row">
            <div className="col-md-3">
              <AsidePLC getPLCFilter={getPLCFilter} />
            </div>
            <div className="col-md-9">
              <div className="store-filter clearfix">
                <span className="store-qty">
                  Page {productsByCategory.page} of{" "}
                  {productsByCategory.pageCount}
                </span>
                <ul className="store-pagination">
                  {productsByCategory.pageIndex.map((page, index) => {
                    return (
                      <li key={index}>
                        <button
                          autoFocus={true}
                          onClick={() => setPageCurrent(page)}
                        >
                          {page}
                        </button>
                      </li>
                    )
                  })}
                </ul>
              </div>
              <div className="row">
                <ProductsPLC
                  page={pageCurrent}
                  plcFilter={plcFilter}
                  history={history}
                />
              </div>
            </div>
          </div>
        </div>
      </Fragment>
    )
  )
}
const mapStateToProps = (state) => {
  return {
    productsByCategory: state.product.productsByCategory,
  }
}
export default connect(mapStateToProps)(Plc)
