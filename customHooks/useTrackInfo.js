import { signIn, useSession } from "next-auth/react";
import React, { useEffect, useState } from "react";
import useSpotify from "../customHooks/useSpotify";
import { useSelector } from "react-redux";

export default function useTrackInfo() {
  const { data: session, status } = useSession();
  const spotifyAPI = useSpotify();
  const [songInfo, setSongInfo] = useState(null);
  const currentSong = useSelector((state) => state.currentSong.value);

  useEffect(() => {
    const fetchSongInfo = async () => {
      if (currentSong) {
        SpotifiApi.getMyCurrentPlayingTrack().then((data) => {
          dispatch(setCurrentSong(data.body));

          console.log(data.body);
        });
      }
    };

    fetchSongInfo();
  }, [spotifyAPI, session]);

  return songInfo;
}
