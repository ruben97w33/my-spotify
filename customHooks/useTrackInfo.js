import { signIn, useSession } from "next-auth/react";
import React, { useEffect, useState } from "react";
import useSpotify from "../customHooks/useSpotify";
import { useSelector } from "react-redux";
import { setCurrentSong } from "../redux/slices/currentSong";

export default function useTrackInfo() {
  const { data: session, status } = useSession();
  const spotifyAPI = useSpotify();
  const currentSong = useSelector((state) => state.currentSong.value);

  useEffect(() => {
    const fetchSongInfo = async () => {
      if (currentSong) {
        spotifyAPI.getMyCurrentPlayingTrack().then((data) => {
          dispatch(setCurrentSong(data.body));

          console.log(data.body, "aqui");
        });
      }
    };

    fetchSongInfo();
  }, [spotifyAPI, session]);
}
