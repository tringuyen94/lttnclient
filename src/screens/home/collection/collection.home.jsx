import React from "react"

const Collection = () => {
  return (
    <div>
      <div className="shop-section">
        {/* container */}
        <div className="container">
          {/* row */}
          <div className="row">
            <div className="col-md-3 col-xs-6">
              <div className="shop">
                <div className="shop-img">
                  <img
                    src={require("../../../img/bientanCollection.jpg")}
                    alt="#bannerBientan"
                    height="250px"
                  />
                </div>
                <div className="shop-body">
                  <h3>Biến tần</h3>
                </div>
              </div>
            </div>

            <div className="col-md-3 col-xs-6">
              <div className="shop">
                <div className="shop-img">
                  <img
                    src={require("../../../img/HMInhat.jpg")}
                    alt="#bannerHMI"
                    height="250px"
                  />
                </div>
                <div className="shop-body">
                  <h3>PLC</h3>
                </div>
              </div>
            </div>
            <div className="col-md-3 col-xs-6">
              <div className="shop">
                <div className="shop-img">
                  <img
                    src={require("../../../img/PLCCollection.jpg")}
                    alt="#bannerPLC"
                    height="250px"
                  />
                </div>
                <div className="shop-body">
                  <h3>HMI</h3>
                </div>
              </div>
            </div>
            <div className="col-md-3 col-xs-6">
              <div className="shop">
                <div className="shop-img">
                  <img
                    src={require("../../../img/PLCCollection.jpg")}
                    alt="#bannerCambien"
                    height="250px"
                  />
                </div>
                <div className="shop-body">
                  <h3>Cảm biến</h3>
                </div>
              </div>
            </div>
          </div>
          {/* /row */}
        </div>
        {/* /container */}
      </div>
    </div>
  )
}

export default Collection
