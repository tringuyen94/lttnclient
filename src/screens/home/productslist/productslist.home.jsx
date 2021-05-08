import React, { useEffect, useState } from "react"
import { connect } from "react-redux"
import { fetchCategories } from "../../../redux/actions/category.actions"
import ProductsItem from "./productsitem.home"
const ProductsList = ({ dispatch, categories }) => {
  useEffect(() => {
    dispatch(fetchCategories())
  }, [])
  const [categoryId, setCategoryId] = useState("5e67d1d3616a8d11cc4eacab")
  const renderCategories = () => {
    return (
      categories &&
      categories.map((category, index) => {
        if (index < 4)
          return (
            <div className="col-md-3" key={index}>
              <button
                className="title"
                onClick={() => {
                  setCategoryId(category._id)
                }}
              >
                {category.nameCategory}
              </button>
            </div>
          )
      })
    )
  }
  return (
    <div className="section">
      <div className="container">
        <div className="row">{renderCategories()}</div>
        <ProductsItem categoryId={categoryId} />
      </div>
    </div>
  )
}
const mapStateToProps = state => {
  return {
    categories: state.category.categories
  }
}

export default connect(mapStateToProps)(ProductsList)
