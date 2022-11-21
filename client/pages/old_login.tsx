import Head from 'next/head'
import {FormEvent, useState, useContext} from 'react'
import {ClientContext} from './_app'
import {useRouter} from 'next/router'

export default function Home() {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const client = useContext(ClientContext)
  const router = useRouter()

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
      <Head>
        <title>Login to Matrix</title>
        <meta name="description" content="Login page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <h1>Login to Matrix</h1>
      <form onSubmit={(e) => login(e)}>
        <input type="text" onChange={(e)=>setUsername(e.target.value)} />
        <input type="password" onChange={(e)=>setPassword(e.target.value)} />
        <button type="submit">Login</button>
      </form>
    </div>
  )
}
