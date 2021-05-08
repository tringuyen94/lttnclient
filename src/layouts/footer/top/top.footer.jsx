import React, { useEffect, useState } from "react"

const TopFooter = () => {
  const [countVisitor, setCountVisitor] = useState('loading...')
  useEffect(() => {
    fetch('https://api.countapi.xyz/update/lttn/visitorcounter/?amount=1')
      .then(res => res.json())
      .then(res => { setCountVisitor(res.value) })
  }, [])
  return (
    <div className="section">
      {/* container */}
      <div className="container">
        {/* row */}
        <div className="row">
          <div className="col-md-3 col-xs-6">
            <div className="footer">
              <h3 className="footer-title"> Công ty chúng tôi</h3>
              <p>
                Chuyên kinh doanh Biến tần, HMI, PLC, Cảm biến Mitsubishi, Fuji
              </p>
              <ul className="footer-links">
                <li>
                  <a href="#">
                    <i className="fa fa-map-marker" />
                    826 Tỉnh lộ 43, KP 3, P. Bình Chiểu, Q. Thủ Đức, TP. Hồ Chí
                    Minh
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa fa-phone" />
                    0931.839.693 (A. Long)
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa fa-envelope-o" />
                    lttnelectric@gmail.com
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-md-3 col-xs-6">
            <div className="footer">
              <h3 className="footer-title">Sản phẩm</h3>
              <ul className="footer-links">
                <li>
                  <a href="#">Biến tần</a>
                </li>
                <li>
                  <a href="#">PLC</a>
                </li>
                <li>
                  <a href="#">HMI</a>
                </li>
                <li>
                  <a href="#">Cảm biến</a>
                </li>
                <li>
                  <a href="#">Phụ kiện</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="clearfix visible-xs" />
          <div className="col-md-3 col-xs-6">
            <div className="footer">
              <h3 className="footer-title">Lượt truy cập</h3>
              <ul className="footer-links">
                <li>
                  <a style={{ fontSize: "100px" }}>{countVisitor}</a><span>lượt</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        {/* /row */}
      </div>
      {/* /container */}
    </div>
  )
}

export default TopFooter
