import { useEffect, useState } from "react";
import * as sdk from "matrix-js-sdk";

export default function useMatrixClient() {
  const [client, setClient] = useState(
    sdk.createClient({ baseUrl: "https://localhost:8008" })
  );

  useEffect(() => {
    const accessTokenCookie = document.cookie
      .split("; ")
      .find((row) => row.startsWith("access_token="))
      ?.split("=")[1];

    const userIdCookie = document.cookie
      .split("; ")
      .find((row) => row.startsWith("user_id="))
      ?.split("=")[1];

    console.log(`cookie = ${accessTokenCookie}, ${userIdCookie}`);

    if (accessTokenCookie && userIdCookie) {
      setClient(
        sdk.createClient({
          baseUrl: "https://localhost:8008",
          accessToken: accessTokenCookie,
          userId: userIdCookie,
        })
      );
      // client.startClient()
    }
  }, []);

  useEffect(() => {
    if (client.isLoggedIn()) {
      console.log("Starting Client...");
      client.startClient();
    }
  }, [client]);

  return client;
}
