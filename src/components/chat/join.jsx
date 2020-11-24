import React, { Fragment } from "react"
import CardContent from "@material-ui/core/CardContent"
import { Button, CardActions, TextField } from "@material-ui/core"

const Join = ({ nickName, setNickname, setDisplayInput, socket }) => {
  const joinRoom = (nickName) => {
    socket.emit("join", nickName)
    setDisplayInput(false)
  }
  return (
    <Fragment>
      <CardContent>
        <CardActions>
          <TextField
            type="number"
            label="Nhập số điện thoại của bạn"
            patern="[0-9]*"
            helperText="Chỉ nhập số"
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
            color="primary"
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
