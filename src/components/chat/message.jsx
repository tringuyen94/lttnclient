import React, { useEffect } from "react"
import { Box } from "@material-ui/core"
import Moment from "react-moment"

const Message = ({
  nickName,
  message: { textChat, sentAt, isSentByAdmin },
}) => {
  return isSentByAdmin ? (
    <Box
      flexWrap="nowrap"
      display="flex"
      justifyContent="flex-start"
      alignItems="center"
    >
      <Box borderRadius={4} margin={1} bgcolor="primary.light" p={2}>
        <b>{textChat}</b> <Moment format="HH:mm">{sentAt}</Moment>
      </Box>
    </Box>
  ) : (
    <Box
      flexWrap="nowrap"
      display="flex"
      justifyContent="flex-end"
      alignItems="center"
    >
      <i>You : </i>
      <Box borderRadius={4} margin={1} p={2} bgcolor="primary.dark">
        <b>{textChat}</b> <Moment format="HH:mm">{sentAt}</Moment>
      </Box>
    </Box>
  )
}

export default Message
