import React from "react"

const Contact = () => {
  return (
    <div id="top-header">
      <div className="container">
        <ul className="header-links pull-left">
          <li>
            <a href="#">
              <i className="fa fa-phone" /> 0931.839.693 - A.Long
            </a>
          </li>
          <li>
            <a href="#">
              <i className="fa fa-envelope-o" /> lttnelectric@gmail.com
            </a>
          </li>
          <li>
            <a href="#">
              <i className="fa fa-map-marker" /> 826 Tỉnh lộ 43, KP 3, P. Bình
              Chiểu, Q. Thủ Đức, TP. Hồ Chí Minh
            </a>
          </li>
        </ul>
        <ul className="header-links pull-right">
          {/* <li>
            <a href="#">
              <i className="fa fa-dollar" /> Đăng nhập
            </a>
          </li> */}
          {/* <li>
            <a href="#">
              <i className="fa fa-user-o" /> Đăng nhập
            </a>
          </li> */}
        </ul>
      </div>
    </div>
  )
}

export default Contact
