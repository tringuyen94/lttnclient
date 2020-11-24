import React, { Fragment } from "react"
import { makeStyles } from "@material-ui/core/styles"
import Fab from "@material-ui/core/Fab"
import TextsmsRoundedIcon from "@material-ui/icons/TextsmsRounded"
import CloseIcon from "@material-ui/icons/Close"

const useStyles = makeStyles((theme) => ({
  fab: {
    position: "fixed",
    bottom: "40px",
    right: "20px",
    color: "#d10024",
    backgroundColor: "transparent",
  },
}))

const ChatButton = ({ displayChatBox, setDisplayChatBox }) => {
  const classes = useStyles()

  return (
    <Fragment>
      <Fab
        className={classes.fab}
        onClick={() => setDisplayChatBox(!displayChatBox)}
      >
        {displayChatBox ? <CloseIcon /> : <TextsmsRoundedIcon />}
      </Fab>
    </Fragment>
  )
}
export default ChatButton
