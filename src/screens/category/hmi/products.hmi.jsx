import React, { useEffect } from "react"
import { domain } from "../../../services/baseURL.services"
import { fetchProductsByCategory } from "../../../redux/actions/product.actions"
import { connect } from "react-redux"

const ProductsHmi = ({
    page,
    hmis,
    dispatch,
    conFilter,
    history,
}) => {
    useEffect(() => {
        dispatch(fetchProductsByCategory("5e67d1e4616a8d11cc4eacad", page))
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
            hmis &&
            hmis.productsByPagination.map((hmi, index) => {
                return (
                    <div className="col-md-4 col-xs-6" key={index}>
                        <div className="product">
                            <div className="product-img">
                                <img alt="#imgProduct" src={domain + "/" + hmi.image.path} />
                            </div>
                            <div className="product-body">
                                <h5 className="product-name">
                                    <a href="#">{hmi.name}</a>
                                </h5>
                            </div>
                            <div className="view-detail">
                                <button
                                    className="view-detail-btn"
                                    onClick={() => {
                                        history.push(`/detail/${hmi._id}`)
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
        hmis: state.product.productsByCategory,
    }
}
export default connect(mapStateToProps)(ProductsHmi)
