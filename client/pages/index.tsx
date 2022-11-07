import Head from 'next/head'
import * as sdk from 'matrix-js-sdk'
import {useState} from 'react'
import {useRouter} from 'next/router'
import Link from 'next/link';

export default function Home() {
  const client = sdk.createClient({baseUrl: "https://matrix.radical.directory" });
  const router = useRouter()
  
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <h1>Matrix</h1>
      <Link href="/login">Login</Link>
    </div>
  )
}