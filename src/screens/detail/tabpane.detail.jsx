import React from "react"
import { Tab, Tabs, TabList, TabPanel } from "react-tabs"

const TabPaneDetail = ({ detail }) => {
  return (
    <div className="col-md-12">
      <Tabs>
        <TabList>
          <Tab>Thông tin sản phẩm</Tab>
          <Tab>Đánh giá</Tab>
        </TabList>
        {/* product tab content */}
        <div className="tab-content">
          {/* tab1  */}
          <TabPanel>
            <p dangerouslySetInnerHTML={{ __html: detail }}></p>
          </TabPanel>
          {/* /tab1  */}
          {/* tab2  */}
          <TabPanel>
            <div className="row">
              {/* Rating */}
              <div className="col-md-3">
                <div id="rating">
                  <div className="rating-avg">
                    <span>4.5</span>
                    <div className="rating-stars">
                      <i className="fa fa-star" />
                      <i className="fa fa-star" />
                      <i className="fa fa-star" />
                      <i className="fa fa-star" />
                      <i className="fa fa-star-o" />
                    </div>
                  </div>
                  <ul className="rating">
                    <li>
                      <div className="rating-stars">
                        <i className="fa fa-star" />
                        <i className="fa fa-star" />
                        <i className="fa fa-star" />
                        <i className="fa fa-star" />
                        <i className="fa fa-star" />
                      </div>
                      <div className="rating-progress">
                        <div style={{ width: "80%" }} />
                      </div>
                      <span className="sum">3</span>
                    </li>
                    <li>
                      <div className="rating-stars">
                        <i className="fa fa-star" />
                        <i className="fa fa-star" />
                        <i className="fa fa-star" />
                        <i className="fa fa-star" />
                        <i className="fa fa-star-o" />
                      </div>
                      <div className="rating-progress">
                        <div style={{ width: "60%" }} />
                      </div>
                      <span className="sum">2</span>
                    </li>
                    <li>
                      <div className="rating-stars">
                        <i className="fa fa-star" />
                        <i className="fa fa-star" />
                        <i className="fa fa-star" />
                        <i className="fa fa-star-o" />
                        <i className="fa fa-star-o" />
                      </div>
                      <div className="rating-progress">
                        <div />
                      </div>
                      <span className="sum">0</span>
                    </li>
                    <li>
                      <div className="rating-stars">
                        <i className="fa fa-star" />
                        <i className="fa fa-star" />
                        <i className="fa fa-star-o" />
                        <i className="fa fa-star-o" />
                        <i className="fa fa-star-o" />
                      </div>
                      <div className="rating-progress">
                        <div />
                      </div>
                      <span className="sum">0</span>
                    </li>
                    <li>
                      <div className="rating-stars">
                        <i className="fa fa-star" />
                        <i className="fa fa-star-o" />
                        <i className="fa fa-star-o" />
                        <i className="fa fa-star-o" />
                        <i className="fa fa-star-o" />
                      </div>
                      <div className="rating-progress">
                        <div />
                      </div>
                      <span className="sum">0</span>
                    </li>
                  </ul>
                </div>
              </div>
              {/* /Rating */}
              {/* Reviews */}
              <div className="col-md-6">
                <div id="reviews">
                  <ul className="reviews">
                    <li>
                      <div className="review-heading">
                        <h5 className="name">John</h5>
                        <p className="date">27 DEC 2018, 8:0 PM</p>
                        <div className="review-rating">
                          <i className="fa fa-star" />
                          <i className="fa fa-star" />
                          <i className="fa fa-star" />
                          <i className="fa fa-star" />
                          <i className="fa fa-star-o empty" />
                        </div>
                      </div>
                      <div className="review-body">
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipisicing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua
                        </p>
                      </div>
                    </li>
                    <li>
                      <div className="review-heading">
                        <h5 className="name">John</h5>
                        <p className="date">27 DEC 2018, 8:0 PM</p>
                        <div className="review-rating">
                          <i className="fa fa-star" />
                          <i className="fa fa-star" />
                          <i className="fa fa-star" />
                          <i className="fa fa-star" />
                          <i className="fa fa-star-o empty" />
                        </div>
                      </div>
                      <div className="review-body">
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipisicing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua
                        </p>
                      </div>
                    </li>
                    <li>
                      <div className="review-heading">
                        <h5 className="name">John</h5>
                        <p className="date">27 DEC 2018, 8:0 PM</p>
                        <div className="review-rating">
                          <i className="fa fa-star" />
                          <i className="fa fa-star" />
                          <i className="fa fa-star" />
                          <i className="fa fa-star" />
                          <i className="fa fa-star-o empty" />
                        </div>
                      </div>
                      <div className="review-body">
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipisicing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua
                        </p>
                      </div>
                    </li>
                  </ul>
                  <ul className="reviews-pagination">
                    <li className="active">1</li>
                    <li>
                      <a href="#">2</a>
                    </li>
                    <li>
                      <a href="#">3</a>
                    </li>
                    <li>
                      <a href="#">4</a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-angle-right" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              {/* /Reviews */}
              {/* Review Form */}
              <div className="col-md-3">
                <div id="review-form">
                  <form className="review-form">
                    <input
                      className="input"
                      type="text"
                      placeholder="Your Name"
                    />
                    <input
                      className="input"
                      type="email"
                      placeholder="Your Email"
                    />
                    <textarea
                      className="input"
                      placeholder="Your Review"
                      defaultValue={""}
                    />
                    <div className="input-rating">
                      <span>Your Rating: </span>
                      <div className="stars">
                        <input
                          id="star5"
                          name="rating"
                          defaultValue={5}
                          type="radio"
                        />
                        <label htmlFor="star5" />
                        <input
                          id="star4"
                          name="rating"
                          defaultValue={4}
                          type="radio"
                        />
                        <label htmlFor="star4" />
                        <input
                          id="star3"
                          name="rating"
                          defaultValue={3}
                          type="radio"
                        />
                        <label htmlFor="star3" />
                        <input
                          id="star2"
                          name="rating"
                          defaultValue={2}
                          type="radio"
                        />
                        <label htmlFor="star2" />
                        <input
                          id="star1"
                          name="rating"
                          defaultValue={1}
                          type="radio"
                        />
                        <label htmlFor="star1" />
                      </div>
                    </div>
                    <button className="primary-btn">Submit</button>
                  </form>
                </div>
              </div>
              {/* /Review Form */}
            </div>
          </TabPanel>
          {/* /tab2  */}
        </div>
        {/* /product tab content  */}
      </Tabs>
    </div>
  )
}

export default TabPaneDetail
