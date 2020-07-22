import React, { useEffect, useState } from "react"
import { connect } from "react-redux"
import { fetchBrands } from "../../../redux/actions/brands.actions"

const AsideConverter = ({ brands, dispatch, getConvertersFilter }) => {
  const [conFilter, setConFilter] = useState()
  const [isNewOne, setIsNewOne] = useState()
  useEffect(() => {
    dispatch(fetchBrands())
  }, [])
  const handleChange = (e) => {
    setConFilter({
      ...conFilter,
      [e.target.name]: e.target.value,
    })
    setIsNewOne({
      ...conFilter,
      [e.target.name]: e.target.value,
    })
  }
  const renderConverterBrands = () => {
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
      <input
        className="form-control mt-3 mb-3"
        type="text"
        placeholder="Nhập công suất"
        name="capacity"
        onChange={handleChange}
      />
      <h4 className="aside-title">TÌNH TRẠNG</h4>
      <div className="input-checkbox">
        <input
          type="radio"
          id="isNewOneTrue"
          value={true}
          name="isNewOne"
          onChange={handleChange}
        />
        <label htmlFor="isNewOneTrue">Mới</label>
        <br />
        <input
          type="radio"
          id="isNewOneFalse"
          value={false}
          name="isNewOne"
          onChange={handleChange}
        />
        <label htmlFor="isNewOneFalse">Cũ</label>
      </div>
      <h4 className="aside-title">NHÃN HÀNG</h4>
      <div className="checkbox-filter">{renderConverterBrands()}</div>
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
export default connect(mapStateToProps)(AsideConverter)
