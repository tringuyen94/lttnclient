import React from "react"
import MenuIcon from "@material-ui/icons/Menu"

const Navigation = () => {
  return (
    <nav id="navigation">
      <div className="container">
        <ul className="main-nav">
          <li className="active">
            <a href="/home">Home</a>
          </li>
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
            <a href="#">Liên hệ</a>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navigation
