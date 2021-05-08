import React from "react"
import Collection from "./collection/collection.home"
import ProductsList from "./productslist/productslist.home"
import Assurance from "./assurance/assurance.home"
import MapHome from "./map/map.home"
import SlickProduct from "./slickproduct/slickproduct.home"

const HomeScreen = () => {
  return (
    <>
      <Collection />
      <ProductsList />
      <SlickProduct />
      <MapHome />
      <Assurance />
    </>
  )
}

export default HomeScreen
