import '../styles/globals.css'
import type { AppProps } from 'next/app'
import {useEffect, useState } from 'react'
import * as sdk from 'matrix-js-sdk'
import React from 'react'

// export const client = sdk.createClient({baseUrl: "https://matrix.radical.directory" });

// TODO: Client side fetching process ?
// TODO: Sync process ?
// TODO: Create rooms
// TODO: If client not logged in, route to login page

const defaultClient = sdk.createClient({baseUrl:"https://matrix.radical.directory"})
export const ClientContext = React.createContext(defaultClient)

export default function App({ Component, pageProps }: AppProps) {
  const [client, setClient] = useState(defaultClient)
  
  useEffect(() => {

    const accessTokenCookie = document.cookie
      .split('; ')
      .find((row) => row.startsWith('access_token='))
      ?.split('=')[1];

    const userIdCookie = document.cookie
      .split('; ')
      .find((row) => row.startsWith('user_id='))
      ?.split('=')[1];

    console.log(`cookie = ${accessTokenCookie}, ${userIdCookie}`)

    if (accessTokenCookie && userIdCookie) {
      setClient(sdk.createClient({
        baseUrl: "https://matrix.radical.directory",
        accessToken: accessTokenCookie,
        userId: userIdCookie
      }))
      // client.startClient()
    }
  }, [])

  useEffect(() => {


    if (client.isLoggedIn()) {
      console.log("Starting Client...")
      client.startClient()
    }
  }, [client])

  return (
    <ClientContext.Provider value={client}>
      <Component {...pageProps} />
    </ClientContext.Provider>
  )
}
