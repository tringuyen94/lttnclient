import React from "react"
import { withRouter } from "react-router-dom"

const Navigation = () => {
  return (
    <nav id="navigation">
      {/* container */}
      <div className="container">
        {/* responsive-nav */}
        <div id="responsive-nav">
          {/* NAV */}
          <ul className="main-nav nav navbar-nav">
            <li className="active">
              <a href="/home">Home</a>
            </li>
            {/* <li>
                <a href="/store">Sản phẩm</a>
              </li> */}
            <li>
              <a href="/categories/bien-tan">Biến tần</a>
            </li>
            <li>
              <a href="/categories/plc">PLC</a>
            </li>
            <li>
              <a href="/categories/hmi">HMI</a>
            </li>
            <li>
              <a href="/categories/cam-bien">Cảm biến</a>
            </li>
            <li>
              <a href="/categories/phu-kien">Phụ kiện</a>
            </li>
            <li>
              <a href="#">Sửa chữa</a>
            </li>
            <li>
              <a href="#">Blog</a>
            </li>
            <li>
              <a href="#">Liên hệ</a>
            </li>
          </ul>
          {/* /NAV */}
        </div>
        {/* /responsive-nav */}
      </div>
      {/* /container */}
    </nav>
  )
}

export default withRouter(Navigation)
