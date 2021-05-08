import React, { useState, useEffect, Fragment } from "react"
import { makeStyles } from "@material-ui/core/styles"
import ScrollToBottom from "react-scroll-to-bottom"
import Card from "@material-ui/core/Card"
import CardHeader from "@material-ui/core/CardHeader"
import CardContent from "@material-ui/core/CardContent"
import { Button, CardActions, TextField } from "@material-ui/core"
import SendIcon from "@material-ui/icons/Send"
import Join from "./join"
import Message from "./message"
import io from "socket.io-client"
import Moment from "react-moment"
import { domain } from "../../services/baseURL.services"

let socket = io(domain)

const useStyles = makeStyles((theme) => ({
  root: {
    width: 345,
    right: 5,
    bottom: 100,
    position: "fixed",
    zIndex: 20,
  },
  header: {
    backgroundColor: "#d10024",
    color: "white",
  },
  scroll: {
    width: 310,
    height: 300,
  },
}))
const ChatBox = () => {
  const classes = useStyles()
  let joinTime = new Date()
  const [nickName, setNickname] = useState()
  const [textChat, setTextChat] = useState()
  const [messages, setMessages] = useState([])
  const [displayInput, setDisplayInput] = useState(true)
  useEffect(() => {
    socket.on("welcome", (content) => {
      setMessages([...messages, content])
    })
    socket.on("admin-message", (content) => {
      setMessages([...messages, content])
    })
    socket.on("client-message", (content) => {
      setMessages([...messages, content])
    })
    return () => socket.off()
  }, [domain, messages])

  const sendMessage = (e) => {
    e.preventDefault()
    if (textChat) {
      socket.emit("message", {
        socketId: socket.id,
        textChat: textChat,
        sentAt: new Date(),
      })
      setTextChat("")
    }
  }
  return (
    <Card className={classes.root}>
      <CardHeader
        className={classes.header}
        title="Công ty TNHH LTTN Electric"
        titleTypographyProps={{ variant: "h6" }}
      />
      {displayInput ? (
        <Join
          nickName={nickName}
          setNickname={setNickname}
          socket={socket}
          setDisplayInput={setDisplayInput}
        />
      ) : (
          <Fragment>
            <CardContent>
              <i style={{ textAlign: "center", fontSize: "13px" }}>
                <Moment format="ddd DD-MM-YYYY ">{joinTime}</Moment>
              </i>

              <ScrollToBottom className={classes.scroll}>
                {messages.map((message, i) => (
                  <div key={i}>
                    <Message message={message} nickName={nickName} />
                  </div>
                ))}
              </ScrollToBottom>
              <CardActions>
                <TextField
                  fullWidth
                  variant="standard"
                  color="primary"
                  autoFocus
                  value={textChat}
                  label="Type your message here...."
                  onChange={(e) => setTextChat(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter") {
                      sendMessage(e)
                    }
                  }}
                />
                <Button
                  variant="contained"
                  onClick={(e) => sendMessage(e)}
                >
                  <SendIcon />
                </Button>
              </CardActions>
            </CardContent>
          </Fragment>
        )}
    </Card>
  )
}
export default ChatBox
