import React from "react"

const BottomFooter = () => {
  return (
    <div id="bottom-footer" className="section">
      <div className="container">
        {/* row */}
        <div className="row">
          <div className="col-md-12 text-center">
            <span className="copyright">
              Copyright © All rights reserved | LTTN ELectric
              <a href="https://colorlib.com" target="_blank">
                Trí Nguyễn
                <i className="fa fa-heart-o" aria-hidden="true" />
              </a>
              {/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}
            </span>
          </div>
        </div>
        {/* /row */}
      </div>
      {/* /container */}
    </div>
  )
}

export default BottomFooter
