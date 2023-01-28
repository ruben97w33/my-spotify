import { NextPage } from "next";
import CardTrack from "../components/CardTrack";
import Header from "../components/Header";
import SideBar from "../components/SideBar";
import TopSection from "../components/TopSection";
import TopTracks from "../components/TopTracks";
import React, { useEffect, useState } from "react";
import PlaySong from "../components/PlaySong";
import useSpotify from "../customHooks/useSpotify";
import { useSession } from "next-auth/react";

const Home: NextPage = () => {
  const { data: session, status } = useSession();
  const [topSongs, setTopSongs] = useState<any[]>([]);
  const spotifyApi = useSpotify();

  const popularity = (a: any, b: any): number => {
    return b.popularity - a.popularity;
  };

  useEffect(() => {
    if (spotifyApi.getAccessToken()) {
      spotifyApi.getMyTopTracks().then(
        function (data) {
          let topTracks = data.body.items;
          topTracks.sort(popularity);
          setTopSongs(topTracks);
        },
        function (err) {
          console.log("Something went wrong!", err);
        }
      );
    }
  }, [session, status]);

  return (
    <div>
      <Header />
      <div className="lg:h-[calc(100vh-5.6rem)] bg-[#121212] lg:flex-row flex-col flex tracks-container overflow-y-auto">
        <div className="lg:w-60">
          <SideBar />
        </div>

        <TopSection />
        <div className="relative lg:mt-[64px] main-container ">
          <TopTracks />
          <div className="px-8 py-10">
            <h1 className="text-white text-2xl font-bold md:text-left text-center">
              Más de lo que te gusta
            </h1>

            <div className="grid lg:grid-cols-6 md:grid-col-3 grid-cols-1 lg:px-0 px-10 lg:gap-x-7 mt-7 gap-y-6 justify-between w-full">
              {topSongs.map((el: any) => {
                return (
                  <div key={el.id}>
                    <CardTrack
                      imgsrc={el.album.images[0]?.url}
                      title={el.artists[0].name}
                      description="Exitos de Charlie en el 2020"
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      <PlaySong />
    </div>
  );
};

export default Home;
