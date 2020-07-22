import React, { useEffect } from "react"
import "./App.css"
import Header from "./layouts/header/Header"
import HomeScreen from "./screens/home/home"
import Footer from "./layouts/footer/Footer"
import { Route, withRouter, Switch } from "react-router-dom"
import { connect } from "react-redux"
import { fetchCategories } from "./redux/actions/category.actions"
import { fetchProducts } from "./redux/actions/product.actions"
import DetailScreen from "./screens/detail/detail"
import Converter from "./screens/category/converter/converter"
import Plc from "./screens/category/plc/plc"
import NotFound from "./screens/notfound"
import ResultsSearching from "./screens/resultssearching"

import { ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

function App({ dispatch }) {
  useEffect(() => {
    dispatch(fetchCategories())
    dispatch(fetchProducts())
  }, [])
  return (
    <>
      <ToastContainer positcion="top-right" autoClose={3000} closeOnClick />
      <Header />
      <Switch>
        <Route path="/categories/bien-tan" exact component={Converter} />
        <Route path="/categories/hmi" exact component={Converter} />
        <Route path="/categories/plc" exact component={Plc} />
        <Route path="/result" exact component={ResultsSearching} />
        <Route path="/categories/phu-kien" exact component={Converter} />
        <Route path="/categories/cam-bien" exact component={Converter} />
        <Route path="/detail/:productId" exact component={DetailScreen} />
        <Route path="/notfound" exact component={NotFound} />
        <Route path="/home" exact component={HomeScreen} />
        <Route path="/" component={HomeScreen} />
      </Switch>
      <Footer />
    </>
  )
}
export default withRouter(connect()(App))
