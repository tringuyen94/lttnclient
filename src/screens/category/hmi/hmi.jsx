import React, { Fragment, useEffect, useState } from "react"
import { connect } from "react-redux"
import { fetchProductsByCategory } from "../../../redux/actions/product.actions"
import AsideHmi from "./aside.hmi.jsx"
import ProductsHmi from "./products.hmi"
import ProductsServices from "../../../services/products.services"
const Hmi = ({ productsByCategory, dispatch, history }) => {
    const [pageCurrent, setPageCurrent] = useState(1)
    const [conFilter, setConfilter] = useState()

    useEffect(() => {
        dispatch(fetchProductsByCategory("5e67d1e4616a8d11cc4eacad", 1))
    }, [])
    const getHmisFilter = (value) => {
        ProductsServices.fetchHmisByFilter(value)
            .then((res) => {
                setConfilter(res.data)
            })
            .catch((err) => {
                history.push("/notfound")
            })
    }

    return (
        productsByCategory && (
            <Fragment>
                <div className="container">
                    <div className="row">
                        <div className="col-md-3">
                            <AsideHmi getHmisFilter={getHmisFilter} />
                        </div>
                        <div className="col-md-9">
                            <div className="store-filter clearfix">
                                {conFilter ? (
                                    <span className="store-qty">
                                        Page {conFilter.page} of {conFilter.pageCount}
                                    </span>
                                ) : (
                                        <span className="store-qty">
                                            Page {productsByCategory.page} of{" "}
                                            {productsByCategory.pageCount}
                                        </span>
                                    )}
                                {conFilter ? (
                                    <ul className="store-pagination">
                                        {conFilter.pageIndex.map((page, index) => {
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
                                ) : (
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
                                    )}
                            </div>
                            <div className="row">
                                <ProductsHmi
                                    page={pageCurrent}
                                    conFilter={conFilter}
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
export default connect(mapStateToProps)(Hmi)
