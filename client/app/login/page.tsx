'use client'

import {FormEvent, useState } from 'react'

export default function Home() {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")

  function login(e: FormEvent) {
    e.preventDefault()
    client?.login("m.login.password", {"user": username, "password": password, "refresh_token": true}).then((response) => {
      document.cookie = `access_token=${response.access_token}`
      document.cookie = `user_id=${response.user_id}`
      console.log(response)
      // router.push('/')
    })
  }
  
  return (
    <div>
      <h1>Login to Matrix</h1>
      <form onSubmit={(e) => login(e)}>
        <input type="text" onChange={(e)=>setUsername(e.target.value)} />
        <input type="password" onChange={(e)=>setPassword(e.target.value)} />
        <button type="submit">Login</button>
      </form>
    </div>
  )
}
