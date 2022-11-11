import {useState, useContext} from 'react'
import {ClientContext} from '../_app'
import Link from 'next/link'

export default function CreateRoom() {
  const client = useContext(ClientContext)
  const [roomName, setRoomName] = useState("")
  const [userId, setUserId] = useState("")
  const [searchResults, setSearchResults] = useState<string[]>([])
  const [userInvites, setUserInvites] = useState<string[]>([])
  
  // TODO: Invite users to room
  
  function createHandler(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    client.createRoom({
      visibility: "public",
      invite: [],
      name: roomName,
      topic: "" 
    }).then(res => console.log(res))
    .catch(err => console.error(err))
  }

  function searchUserDirectory (e: React.KeyboardEvent<HTMLInputElement>) {
    setUserId(e.currentTarget.value)
    e.preventDefault()
    client.searchUserDirectory({
      term: userId,
      limit: 10
    }).then(value => console.log(value))
  }
  
  function addHandler() {
    //TODO
  }
  
  return (
    <>
      <form onSubmit={createHandler}>
        <input type="text" value={roomName} onChange={e => setRoomName(e.currentTarget.value)}/>
        <button type="submit">Create</button>
      </form>

      <form onSubmit={addHandler}>
        <input type="text" value={userId} onChange={searchUserDirectory}/>
        <button type="submit">Add User</button>
      </form>

      <Link href="/">Back</Link>
    </>
  )
}
