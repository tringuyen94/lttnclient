import React, { useState, useEffect } from "react"
import { withRouter } from "react-router-dom"
import { connect } from "react-redux"
import { getProductsBySearching } from "../../redux/actions/product.actions"

const SearchBar = ({ dispatch, history }) => {
  const [productFilter, setProductFilter] = useState()
  const handleSearch = (e) => {
    e.preventDefault()
    dispatch(getProductsBySearching(productFilter, history))
  }
  const handleChange = (e) => {
    setProductFilter({
      ...productFilter,
      [e.target.name]: e.target.value,
    })
  }
  return (
    <div className="col-md-6">
      <div className="header-search">
        <form className="form-group">
          <input
            className="input"
            placeholder="Nhập tên sản phẩm...."
            onChange={handleChange}
            name="name"
          />
          <button className="search-btn" onClick={handleSearch}>
            Tìm
          </button>
        </form>
      </div>
    </div>
  )
}

export default withRouter(connect()(SearchBar))
