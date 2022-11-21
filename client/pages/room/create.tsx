import {useState, useContext} from 'react'
import {ClientContext} from '../_app'
import Link from 'next/link'
import {Visibility} from 'matrix-js-sdk'

type User = {
  avatar_url?: string,
  display_name?: string,
  user_id: string
}

enum CreationState {
  Ready,
  Success,
  Error
}

export default function CreateRoom() {
  const client = useContext(ClientContext)
  const [roomName, setRoomName] = useState("")
  const [userId, setUserId] = useState("")
  const [searchResults, setSearchResults] = useState<User[]>([])
  const [userInvites, setUserInvites] = useState<Map<string, User>>(new Map())
  const [creationState, setCreationState] = useState<CreationState>(CreationState.Ready)
  
  // TODO: Invite users to room
  
  function createHandler(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    client.createRoom({
      visibility: Visibility.Public,
      invite: [],
      name: roomName,
      topic: "" 
    }).then(res => {
      setCreationState(CreationState.Success)    
      console.log(res)
    }).catch(err => {
      setCreationState(CreationState.Error)
      console.error(err)
    })
  }

  function searchUserDirectory (e: React.FormEvent<HTMLInputElement>) {
    setUserId(e.currentTarget.value)
    client.searchUserDirectory({
      term: userId,
      limit: 10
    }).then(res => {
      setSearchResults(res.results)
    })
  }
  
  function addHandler(result: User) {
    setUserInvites(new Map(userInvites.set(result.user_id, result)))
    console.log(userInvites)
  }
  
  return (
    <>
      <form onSubmit={createHandler}>
        <label htmlFor="room-name">Room Name</label>
        <input type="text" value={roomName} id="room-name" onChange={e => setRoomName(e.currentTarget.value)}/>
     
        <label htmlFor="user-search">Invite users to join</label>
        <input type="text" value={userId} id="user-search" onChange={searchUserDirectory}/>

        <ul>
          {searchResults.map(result => (
            <li>
              {result.user_id} - {result.display_name ? result.display_name : ""}
              <button type="button" onClick={() => addHandler(result)}>Add User</button>
            </li>
          ))}
        </ul>
    
        <ul>
          {[...userInvites.values()].map(userInvite => <li>{userInvite.user_id} - {userInvite.display_name ? userInvite.display_name : ""}</li>)}
        </ul>

        <button type="submit">Create</button>
    
        <p>
          {(() => {switch(creationState) {
            case CreationState.Success: return "Success"
            case CreationState.Error: return "Error"
            default: return ""
          }})()}
        </p>
      </form>

      <Link href="/">Back</Link>
    </>
  )
}
