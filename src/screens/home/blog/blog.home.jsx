import React from "react"

const BlogHome = () => {
  return (
    <div className="section">
      <div className="container">
        <div className="row">
          <div className="col-md-8 text-center">
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/yuogSCO3uqM"
              frameBorder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
          <div className="col-md-4 text-center">
            <div className="border border-secondary m-1">
              <a href="">
                <img
                  src={require("../../../img/fujielectric.png")}
                  alt="#logoFUJI"
                  height="150px"
                />
              </a>
            </div>
            <div className="border border-secondary m-1 mt-2">
              <a href="">
                <img
                  src={require("../../../img/Mitsubishi-Electric.jpg")}
                  alt="#logoMitsubishi"
                  height="150px"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BlogHome
