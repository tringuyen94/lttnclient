import React from "react"
import BottomFooter from "./bottom/bottom.footer"
import TopFooter from "./top/top.footer"

const Footer = () => {
  return (
    <>
      {/* FOOTER */}
      <footer id="footer">
        {/* top footer */}
        <TopFooter />
        {/* /top footer */}
        {/* bottom footer */}
        <BottomFooter />
        {/* /bottom footer */}
      </footer>
      {/* /FOOTER */}
    </>
  )
}

export default Footer
