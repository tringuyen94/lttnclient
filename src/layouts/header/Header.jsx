import React, { Fragment } from "react"
import Contact from "./contact.header"
import Logo from "./logo.header"
import SearchBar from "./searchbar.header"
import Navigation from "./navigation.header"
import Hotline from "./hotline.header"

const Header = () => {
  return (
    <Fragment>
      <Contact />
      <div id="header">
        <div className="container">
          <div className="row">
            <Logo />
            <SearchBar />
            <Hotline />
          </div>
        </div>      
        <Navigation />
      </div>
    </Fragment>
  )
}

export default Header
