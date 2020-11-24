import React, { useState } from "react"
import ChatButton from "./chatbutton"
import ChatBox from "./chatbox"

const ChatComponent = () => {
  const [displayChatBox, setDisplayChatBox] = useState()
  return (
    <div>
      {displayChatBox && <ChatBox />}
      <ChatButton
        displayChatBox={displayChatBox}
        setDisplayChatBox={setDisplayChatBox}
      />
    </div>
  )
}

export default ChatComponent  
