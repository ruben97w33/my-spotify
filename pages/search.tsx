import React from "react";
import { NextPage } from "next";
import Header from "../components/Header";
import SideBar from "../components/SideBar";
import TopSection from "../components/TopSection";
import CardTrack from "../components/CardTrack";
import PlaySong from "../components/PlaySong";
import { FiSearch } from "react-icons/fi";

const Search: NextPage = () => {
  return (
    <div>
      <Header />
      <div className="lg:h-[calc(100vh-5.6rem)] bg-[#121212] lg:flex-row flex-col flex tracks-container overflow-y-auto">
        <div className="lg:w-60">
          <SideBar />
        </div>

        <TopSection>
          <div className="relative flex items-center">
            <FiSearch className="text-black absolute left-2" size="1.2rem" />
            <input
              type="text"
              placeholder="Que quieres escuchar? "
              className="w-[14rem] rounded-full  border-none py-1.5 outline-none pl-8 pr-3"
            />
          </div>
        </TopSection>
        <div className="relative lg:mt-[64px] main-container ">
          <div className="px-8 py-10">
            <h1 className="text-white text-2xl font-bold md:text-left text-center">
              Más de lo que te gusta
            </h1>

            <div className="grid lg:grid-cols-6 md:grid-col-3 grid-cols-1 lg:px-0 px-10 lg:gap-x-7 mt-7 gap-y-6 justify-between w-full"></div>
          </div>
        </div>
      </div>
      <PlaySong />
    </div>
  );
};

export default Search;
