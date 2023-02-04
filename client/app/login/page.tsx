"use client";

import { FormEvent, useState, useEffect } from "react";
import Link from "next/link";
import { initClient, wrap, validateAccessToken, Option } from "/lib/init";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [client, setClient] = useState(initClient());

  useEffect(() => {
    const access_token = wrap<string>(sessionStorage.getItem("access_token"));
    setClient(initClient(access_token));
  }, []);

  useEffect(() => {
    (async () => {
      const [accessToken, refreshToken] = await validateAccessToken(
        client,
        localStorage.getItem("refresh_token") || ""
      ).catch((err) => { console.log(err); return ["", ""] })
      localStorage.setItem("refresh_token", refreshToken)
      sessionStorage.setItem("access_token", accessToken)
    })()
  }, [client]);

  // useEffect(() => {
  //   console.log("useEffect called")
  //   if (!navigator || !navigator.serviceWorker) return
  //   console.log("setting up Service Worker...")
  //   navigator.serviceWorker
  //     .register('/service-worker.js')
  //     .then((registration) =>
  //       console.log(
  //         'Service Worker registration successful with scope: ',
  //         registration.scope
  //       )
  //     )
  //     .catch((err) => console.log('Service Worker registration failed: ', err))
  // }, [navigator])

  function login(e: FormEvent) {
    e.preventDefault();
    client
      .login("m.login.password", {
        user: username,
        password: password,
        refresh_token: true,
      })
      .then((response) => {
        localStorage.setItem("refresh_token", response.refresh_token);
        sessionStorage.setItem("access_token", response.access_token);
        console.log(response);
        // router.push('/')
      });
  }

  return (
    <div>
      <h1>Login to Matrix</h1>
      <form onSubmit={(e) => login(e)}>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Login</button>
      </form>
      <Link href="/">Home</Link>
    </div>
  );
}
