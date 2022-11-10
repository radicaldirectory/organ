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
  
  function setMessageMap(msg: MatrixEvent) {
    setMessages(new Map(messages.set(...messageKeyValue(msg))))
  }
  
  useEffect(() => {
    // messagesFromRoom(room)?.forEach(msg => setMessageMap(msg))
    setMessages(new Map(messagesFromRoom(room)))
  }, [room])
  
  // const messages = room?.timeline.filter(t=>t.event.type === "m.room.message").map(t=>t.event.content?.body)

  client.once('sync', function(state, prevState, res) {
    console.log(state); // state will be 'PREPARED' when the client is ready to use
    if (state === 'PREPARED') accessRoom()
  });
  
  function accessRoom() {
    const freshRoom = client.getRoom(roomId?.toString())
    if (freshRoom) setRoom(freshRoom)    
    console.log(freshRoom)
  }

  client.on('Room.timeline', function(event, room, toStartOfTimeline){
    console.log(event)
    if (event.event.type === "m.room.message") setMessageMap(event)
  })
  
  // create array of messages
  console.log(messages)

  return (
    <>
    <h1>{room?.name}</h1>
    {[...messages.values()].map((msg, i) => <p key={i}><em>{msg.sender.name}</em>: {msg.event.content?.body}</p>)}
    </>
  )
}
