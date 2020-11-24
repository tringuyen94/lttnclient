import React from "react"
import Collection from "./collection/collection.home"
import ProductsList from "./productslist/productslist.home"
import NewsletterHome from "./newsletter/newsletter.home"
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
      <NewsletterHome />
      <Assurance />
    </>
  )
}

export default HomeScreen
