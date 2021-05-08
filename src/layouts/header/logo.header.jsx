import React, { Fragment } from "react"

const Logo = () => {
  return (
    <Fragment>
      <div className="col-md-2">
        <div className="header-logo">
          <a href="/" className="logo">
            <img
              src={require("../../img/logoLTTN.jpg")}
              alt="#logoLTTN"
              width="180px"
              className="rounded-circle"
            />
          </a>
        </div>
      </div>
    </Fragment>
  )
}

export default Logo
