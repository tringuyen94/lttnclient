import React, { useEffect, useState } from "react"
import { connect } from "react-redux"
import { fetchBrands } from "../../../redux/actions/brands.actions"

const AsideSensor = ({ brands, dispatch, getConvertersFilter }) => {
    const [conFilter, setConFilter] = useState()
    useEffect(() => {
        dispatch(fetchBrands())
    }, [])
    const handleChange = (e) => {
        setConFilter({
            ...conFilter,
            [e.target.name]: e.target.value,
        })
    }
    const renderSensorBrands = () => {
        return (
            brands &&
            brands.map((brand, index) => {
                return (
                    <div className="input-checkbox">
                        <input
                            type="radio"
                            id={brand.nameBrand}
                            value={brand._id}
                            onChange={handleChange}
                            name="brandId"
                        />
                        <label htmlFor={brand.nameBrand}>{brand.nameBrand}</label>
                    </div>
                )
            })
        )
    }
    const handleClick = () => {
        getConvertersFilter(conFilter)
    }
    return (
        <div className="aside">
            <h4 className="aside-title">NHÃN HÀNG</h4>
            <div className="checkbox-filter">{renderSensorBrands()}</div>
            <button className="btn btn-info" onClick={handleClick}>
                Tìm kiếm
      </button>
        </div>
    )
}
const mapStateToProps = (state) => {
    return {
        brands: state.brand.brands,
    }
}
export default connect(mapStateToProps)(AsideSensor)
