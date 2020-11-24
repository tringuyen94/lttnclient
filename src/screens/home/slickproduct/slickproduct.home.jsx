import React, { useEffect } from "react"
import Slider from "react-slick"
import { connect } from "react-redux"
import { fetchProducts } from "../../../redux/actions/product.actions"
import { domain } from "../../../services/baseURL.services"

const SlickProduct = ({ dispatch, products }) => {
  useEffect(() => {
    dispatch(fetchProducts())
  }, [])
  const renderProducts = () => {
    return (
      products &&
      products.map((prod) => {
        return (
          <div className="col-md-3 p-4">
            <img
              src={domain + "/" + prod.image.path}
              width="70px"
              height="70px"
            />
          </div>
        )
      })
    )
  }
  const setting = {
    autoplay: true,
    autoPlaySpeed: 2000,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 3,
  }
  return (
    <div className="section">
      <div className="container">
        <h3 className="text-center">Tất cả sản phẩm</h3>
        <Slider {...setting}>{renderProducts()}</Slider>
      </div>
    </div>
  )
}
const mapStateToProps = (state) => {
  return {
    products: state.product.products,
  }
}
export default connect(mapStateToProps)(SlickProduct)
