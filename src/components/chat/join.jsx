import React, { Fragment } from "react"
import CardContent from "@material-ui/core/CardContent"
import { Button, CardActions, TextField } from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles((theme) => ({
  button: {
    color: "white",
    backgroundColor: "#d10024",
  },
  floatingLabelFocusStyle: {
    color: "#d10024"
  }
}))
const Join = ({ nickName, setNickname, setDisplayInput, socket }) => {
  const joinRoom = (nickName) => {
    socket.emit("join", nickName)
    setDisplayInput(false)
  }
  const classes = useStyles()
  return (
    <Fragment>
      <CardContent>
        <CardActions>
          <TextField
            type="number"
            label="Nhập số điện thoại để chat"
            helperText="Chỉ nhập số"
            InputLabelProps={{ className: classes.floatingLabelFocusStyle }}
            fullWidth
            required
            autoFocus
            onChange={(e) => setNickname(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                joinRoom(nickName)
              }
            }}
          />
          <Button
            variant="contained"
            className={classes.button}
            onClick={() => {
              joinRoom(nickName)
            }}
          >
            Chat
          </Button>
        </CardActions>
      </CardContent>
    </Fragment>
  )
}

export default Join
