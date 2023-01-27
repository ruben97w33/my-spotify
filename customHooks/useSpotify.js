import { signIn, useSession } from "next-auth/react";
import React, { useEffect } from "react";
const SpotifyWebApi = require("spotify-web-api-node");

const spotifyAPI = new SpotifyWebApi({
  clientId: process.env.NEX_PUBLIC_CLIENT_ID,
  clientSecret: process.env.NEXT_PUBLIC_SPOTIFY_SECRET_ID,
});
export default function useSpotify() {
  const { data: session, status } = useSession();

  useEffect(() => {
    if (session) {
      if (session.error === "RefreshAccessTokenError") {
        signIn();
      }

      spotifyAPI.setAccessToken(session.user.accessToken);
    }
  }, [status]);

  return spotifyAPI;
}
