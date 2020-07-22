import React, { useEffect, Fragment } from "react"
import Contact from "./contact/contact.header"
import Logo from "./logo/logo.header"
import SearchBar from "./searchbar/searchbar.header"
import Navigation from "./navigation/navigation.header"
import Hotline from "./hotline/hotline.header"
import { connect } from "react-redux"
import { fetchCategories } from "../../redux/actions/category.actions"

const Header = ({ dispatch, categories }) => {
  useEffect(() => {
    dispatch(fetchCategories())
  }, [])
  return (
    <Fragment>
      <Contact />
      <div id="header">
        {/* container */}
        <div className="container">
          {/* row */}
          <div className="row">
            <Logo />
            <SearchBar />
            <Hotline />
            {/* Menu Toogle */}
            <div className="menu-toggle" style={{ display: "none" }}>
              <a href="#">
                <i className="fa fa-bars" />
                <span>Menu</span>
              </a>
            </div>
            {/* /Menu Toogle */}
          </div>
        </div>
        {/* HOTLINE */}
      </div>
      {/* row */}
      {/* container */}
      {/* /MAIN HEADER */}
      <Navigation categories={categories} />
    </Fragment>
  )
}
const mapStateToProps = (state) => {
  return {
    categories: state.category.categories,
  }
}

export default connect(mapStateToProps)(Header)
