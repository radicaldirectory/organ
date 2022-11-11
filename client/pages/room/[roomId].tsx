import {ClientContext} from '../_app'
import link from 'next/link'
import {useContext, useState, useEffect} from 'react'
import {useRouter} from 'next/router'
import {Room, MatrixEvent} from 'matrix-js-sdk'

function messagesFromRoom (room: Room | undefined): [string, MatrixEvent][] {
  if (!room) return []
  return room.timeline?.filter(t => t.event.type === "m.room.message")
  .map(msg => messageKeyValue(msg))
}

function messageKeyValue (msg: MatrixEvent): [string, MatrixEvent] {
  return [msg.event.event_id || "", msg]
}

export default function RoomPage() {
  const router = useRouter()
  const client = useContext(ClientContext)
 
  const roomId = router.query.roomId
  const [room, setRoom] = useState<Room>()
  const [messages, setMessages] = useState(new Map(messagesFromRoom(room)))
  const [newMessage, setNewMessage] = useState("")

  function setMessageMap(msg: MatrixEvent) {
    setMessages(new Map(messages.set(...messageKeyValue(msg))))
  }

  console.log(messages)
  
  // Initial data fetch 
  function accessRoom() {
    const freshRoom = client.getRoom(roomId?.toString())

    if (freshRoom) setRoom(freshRoom)    

    console.log(freshRoom)
  }
  
  client.once('sync', function(state, prevState, res) {
    console.log(state); // state will be 'PREPARED' when the client is ready to use

    if (state === 'PREPARED') accessRoom()
  });
  
  useEffect(() => {
    setMessages(new Map(messagesFromRoom(room)))
  }, [room])

  // Realtime received events
  client.on('Room.timeline', function(event, room, toStartOfTimeline){
    console.log(event)

    if (event.event.type === "m.room.message") setMessageMap(event)
  })
  
  // Send messages
  function sendHandler(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    
    const content = {
      "body": newMessage,
      "msgtype": "m.text"
    }
    
    client.sendEvent(roomId, "m.room.message", content, "")
     
    setNewMessage("")
  }  

  return (
    <>
    <h1>{room?.name}</h1>
    {[...messages.values()].map((msg, i) => <p key={i}><em>{msg.sender.name}</em>: {msg.event.content?.body}</p>)}
    <form onSubmit={sendHandler}>
    <input type="text" value={newMessage} onChange={e => setNewMessage(e.currentTarget.value)}/>
    <button type="submit" >Send</button>
    </form>
    </>
  )
}
