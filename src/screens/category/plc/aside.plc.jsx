import React, { useEffect, useState } from "react"
import { connect } from "react-redux"
import { fetchBrands } from "../../../redux/actions/brands.actions"

const AsidePLC = ({ brands, dispatch, getPLCFilter }) => {
  useEffect(() => {
    dispatch(fetchBrands())
  }, [])
  const [plcFilter, setPLCFilter] = useState()
  const renderPLCBrands = () => {
    return (
      brands &&
      brands.map((brand, index) => {
        return (
          <div className="input-checkbox" key={index}>
            <input
              type="radio"
              id={brand.nameBrand}
              name="brandId"
              value={brand._id}
              onChange={handleChange}
            />
            <label htmlFor={brand.nameBrand}>{brand.nameBrand}</label>
          </div>
        )
      })
    )
  }
  const handleChange = (e) => {
    setPLCFilter({
      ...plcFilter,
      [e.target.name]: e.target.value,
    })
  }
  const handleClick = () => {
    getPLCFilter(plcFilter)
  }
  return (
    <div className="aside">
      <h4 className="aside-title">NHÃN HÀNG</h4>
      <div className="checkbox-filter">{renderPLCBrands()}</div>
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
export default connect(mapStateToProps)(AsidePLC)
