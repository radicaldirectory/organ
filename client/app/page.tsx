'use client'

import Link from 'next/link'
import {useEffect, useState} from 'react'
import {initClient} from '/lib/init'
import {Room} from 'matrix-js-sdk'

export default function RootPage() {
  const [client, setClient] = useState(initClient())
  const [rooms, setRooms] = useState<Room[]>([])

  useEffect(() => {
    // setClient(initClient(document.cookie))
  }, [])

  useEffect(() => {
    if (client.isLoggedIn()) {
      console.log("Starting Client...")
      client.startClient()
    }
  }, [client])
  return (
    <main>
      <h1>Hi</h1>
      <Link href="/login">Login</Link>

      <p>
        <Link href="/room/create">Create Room</Link>
      </p>
  
      <h2>Rooms</h2>

      {rooms.map((room, i) => <Link key={i} href={`/room/${room.roomId}`}><p>{room.name}</p></Link>)}

    </main>
  )
}
