import Head from 'next/head'
import {useState, useContext, useEffect} from 'react'
import {ClientContext} from './_app'
// import {useRouter} from 'next/router'
import Link from 'next/link';
import {Room} from 'matrix-js-sdk'

export default function Home() {
  const client = useContext(ClientContext)
  // const router = useRouter()
  const [rooms, setRooms] = useState<Room[]>([])
  const [prepared, setPrepared] = useState(false)

  // TODO: bug: rooms do not always load
  
  client.once('sync', function(state, prevState, res) {
    console.log(state); // state will be 'PREPARED' when the client is ready to use
    if (state === 'PREPARED') setPrepared(true)
    if (prepared) accessRooms()
  });
  
  function accessRooms() {
    setRooms(client.getRooms())    
    console.log(client.getRooms())
  }

  
  return (
    <div>
      <Head>
        <title>Organ</title>
        <meta name="description" content="Decentralised event organising on Matrix" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <h1>Organ</h1>

      {client?.isLoggedIn() 
        ? `Hello ${client.getUserIdLocalpart()}` 
        : <Link href="/login">Login</Link>
      }

      <p>
        <Link href="/room/create">Create Room</Link>
      </p>
  
      <h2>Rooms</h2>

      {rooms.map((room, i) => <Link key={i} href={`/room/${room.roomId}`}><p>{room.name}</p></Link>)}
    
    </div>
  )
}
