import React, { Fragment } from "react"
import { makeStyles } from "@material-ui/core/styles"
import Fab from "@material-ui/core/Fab"
import { ArrowUpwardRounded } from "@material-ui/icons"

const useStyles = makeStyles((theme) => ({
  fab: {
    position: "fixed",
    bottom: "150px",
    right: "20px",
    color: "#d10024",
    backgroundColor: "transparent",
  },
}))

const ScrollToTop = () => {
  const classes = useStyles()
  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }
  return (
    <Fragment>
      <Fab className={classes.fab} onClick={scrollTop}>
        <ArrowUpwardRounded />
      </Fab>
    </Fragment>
  )
}

export default ScrollToTop
