import React from "react"
import Collection from "./collection/collection.home"
import ProductsList from "./productslist/productslist.home"
import NewsletterHome from "./newsletter/newsletter.home"
import BlogHome from "./blog/blog.home"
import MapHome from "./map/map.home"

const HomeScreen = () => {
  return (
    <>
      <Collection />
      <ProductsList />
      <BlogHome />
      <NewsletterHome />
      <MapHome />
    </>
  )
}

export default HomeScreen
