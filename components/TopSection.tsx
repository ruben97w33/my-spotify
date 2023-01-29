import { useSession } from "next-auth/react";
import React, { FunctionComponent, useState, useEffect } from "react";
import {
  RiArrowRightSLine,
  RiArrowLeftSLine,
  RiAccountCircleFill,
} from "react-icons/ri";
import { useSelector, useDispatch } from "react-redux";
import { change } from "../redux/slices/color";
import type { RootState } from "../redux/store";

const TopSection: FunctionComponent = () => {
  const playlistId = useSelector((state: RootState) => state.playlist.value);
  const dispatch = useDispatch();
  const { data: session, status } = useSession();
  console.log(session);
  const color = useSelector((state: RootState) => state.color.value);

  const colors = [
    "bg-indigo-500",
    "bg-blue-500",
    "bg-green-500",
    "bg-red-500",
    "bg-purple-500",
    "bg-teal-500",
    "bg-violet-500",
  ];
  useEffect(() => {
    dispatch(change);
  }, [playlistId]);

  return (
    <div
      className={`h-[64px] top-0 right-0 z-30 main-container flex items-center px-8 ${
        colors[color ? color : 0]
      }  lg:fixed`}>
      <div className="flex justify-between items-center w-full">
        <div className="flex lg:space-x-4">
          <div className="bg-black h-8 w-8 flex items-center justify-center rounded-full hover:cursor-pointer">
            <RiArrowLeftSLine className="text-white " size="1.8rem" />
          </div>
          <div className="bg-black h-8 w-8 flex items-center justify-center rounded-full hover:cursor-pointer">
            <RiArrowRightSLine className="text-white " size="1.8rem" />
          </div>
        </div>
        <div>
          <div className="flex space-x-4 text-white text-sm font-bold">
            <div className="rounded-full px-3.5 py-1 border">Premium</div>
            <div className="flex rounded-full items-center space-x-2 px-3 py-1 bg-black text-white hover:cursor-pointer">
              <RiAccountCircleFill size="1.5rem" />
              <div>{session?.user ? session?.user.name : "Iniciar sesión"}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopSection;
