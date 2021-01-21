import React, { Fragment, useState } from "react"

const Navigation = () => {

  const [isVisbleNav, setisVisibleNav] = useState(true)
  const activeNav = () => {
    setisVisibleNav(!isVisbleNav)
  }
  return (
    <nav id="navigation">
      <div className='burger' onClick={activeNav}>
        <div className="bar__1"></div>
        <div className="bar__2"></div>
        <div className="bar__3"></div>
      </div>
      <div className="container">
        <ul className={isVisbleNav ? "main-nav" : 'main-nav-active'}>
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
