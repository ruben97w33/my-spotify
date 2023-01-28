import React, { FunctionComponent, useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import type { RootState } from "../redux/store";
import { change } from "../redux/slices/color";
import useSpotify from "../customHooks/useSpotify";
import { useSession } from "next-auth/react";
import CardRecomend from "./CardRecomend";

const TopTracks: FunctionComponent = () => {
  const { data: session, status } = useSession();

  const dispatch = useDispatch();
  const playlistId = useSelector((state: RootState) => state.playlist.value);
  const color = useSelector((state: RootState) => state.color.value);

  const [recomend, setRecomend] = useState<any>([]);
  const spotifyApi = useSpotify();
  const date: Date = new Date();

  const colors = [
    "from-indigo-500",
    "from-blue-500",
    "from-green-500",
    "from-red-500",
    "from-purple-500",
    "from-teal-500",
    "from-violet-500",
  ];

  const grettins = (date: Date) => {
    const hours = date.getHours();

    if (hours >= 0 && hours < 12) {
      return "Buenos días";
    }
    if (hours >= 12 && hours < 17) {
      return "Buenas tardes";
    }
    if (hours >= 17 && hours < 12) {
      return "Buenas noches";
    }
  };

  useEffect(() => {
    dispatch(change);
    color;
  }, [playlistId]);

  useEffect(() => {
    if (spotifyApi.getAccessToken()) {
      spotifyApi
        .getRecommendations({
          limit: 6,
          min_energy: 0.4,
          seed_artists: ["6mfK6Q2tzLMEchAr0e9Uzu", "4DYFVNKZ1uixa6SQTvzQwJ"],
          min_popularity: 50,
        })
        .then(
          function (data) {
            let recommendations = data.body;
            recommendations.tracks;
            setRecomend(recommendations.tracks);
          },
          function (err) {
            console.log("Something went wrong!", err);
          }
        );
    }
  }, [session, spotifyApi]);

  return (
    <div
      className={`w-full h-64 bg-gradient-to-b px-8 text-white ${
        colors[color ? color : 0]
      } to-[#121212]`}>
      <h1 className="text-3xl font-bold pt-4">{grettins(date)}</h1>

      <div className="grid grid-cols-3 gap-x-8 gap-y-6 pt-6">
        {recomend &&
          recomend.map((recomend: any) => {
            return (
              <div key={recomend.id}>
                <CardRecomend
                  imgsrc={recomend.album.images[0].url}
                  title={recomend.name}
                />
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default TopTracks;
