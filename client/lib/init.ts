import * as sdk from "matrix-js-sdk";
import { Option, Some, None } from "@sniptt/monads";
import { MatrixClient } from "matrix-js-sdk";

const baseUrl = "http://localhost:8008";

export function initClient(access_token: Option<string> = None) {
  if (access_token.isNone()) {
    return sdk.createClient({ baseUrl });
  }

  console.log(`access_token: ${access_token.unwrap()}`);

  return sdk.createClient({
    baseUrl,
    accessToken: access_token.unwrap(),
  });
}

type RefreshToken = string;
type AccessToken = string;

export async function validateAccessToken(
  client: MatrixClient,
  refreshToken: RefreshToken
): Promise<[AccessToken, RefreshToken]> {
  try {
    console.log("Checking access token validity");
    await client.whoami();
    return [client.getAccessToken()!, refreshToken];
  } catch {
    try {
      console.log("No valid access token. Trying to refresh token");
      const { access_token, refresh_token } = await client.refreshToken(
        refreshToken
      );
      console.log("Refresh successful. Updating tokens");
      client.setAccessToken(access_token);
      return [access_token, refresh_token];
    } catch (error) {
      throw error;
      // return ["error", "refresh token didn't work"];
    }
  }
}

export function wrap<T>(value: T | undefined | null): Option<T> {
  if (!value || value === null) return None;
  else return Some(value);
}

export * from "@sniptt/monads";
