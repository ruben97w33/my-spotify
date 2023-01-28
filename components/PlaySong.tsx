import React, { FunctionComponent } from "react";
import Image from "next/image";
import { AiOutlineHeart, AiFillPlayCircle } from "react-icons/ai";
import { MdPictureInPictureAlt } from "react-icons/md";
import { BiSkipNext, BiSkipPrevious } from "react-icons/bi";
import { TbMicrophone2, TbDevices2 } from "react-icons/Tb";
import { HiOutlineQueueList } from "react-icons/hi2";
import { RiVolumeUpFill } from "react-icons/ri";
import { FaRandom } from "react-icons/fa";
import { BiRepeat } from "react-icons/bi";

const PlaySong: FunctionComponent = () => {
  return (
    <div className="w-full content-center  lg:p-5 bg-[#181818] h-[5.6rem] text-white grid grid-cols-3 fixed bottom-0 left-0">
      <div className="flex items-center space-x-4">
        <div className="h-14 w-14 relative">
          <Image
            src="/images/charlie.webp"
            fill
            alt="album"
            className="cover rounded-sm"
          />
        </div>
        <div>
          <p className="font-bold text-sm">All of Me</p>
          <p className="text-xs text-[#BABABA]">Jhon legend</p>
        </div>

        <div className="flex items-center space-x-2">
          <button>
            <AiOutlineHeart
              size="1.1rem"
              className="text-[#BABABA] hover:cursor-pointer hover:text-white transition-colors ease-linear duration-150"
            />
          </button>

          <button>
            <MdPictureInPictureAlt
              size="1.1rem"
              className="text-[#BABABA] hover:cursor-pointer hover:text-white transition-colors ease-linear duration-150"
            />
          </button>
        </div>
      </div>
      <div className="flex justify-center flex-col items-center space-y-3">
        <div className="flex items-center space-x-4">
          <button>
            <FaRandom
              size="1rem"
              className="text-[#BABABA] hover:cursor-pointer hover:text-white transition-colors ease-linear duration-150"
            />
          </button>
          <button>
            <BiSkipPrevious
              size="2.2rem"
              className="text-[#BABABA] hover:cursor-pointer hover:text-white transition-colors ease-linear duration-150"
            />
          </button>
          <button>
            <AiFillPlayCircle
              size="2.2rem"
              className="text-[#BABABA] hover:cursor-pointer hover:text-white transition-colors ease-linear duration-150"
            />
          </button>
          <button>
            <BiSkipNext
              size="2.2rem"
              className="text-[#BABABA] hover:cursor-pointer hover:text-white transition-colors ease-linear duration-150"
            />
          </button>
          <button>
            <BiRepeat
              size="1.3rem"
              className="text-[#BABABA] hover:cursor-pointer hover:text-white transition-colors ease-linear duration-150"
            />
          </button>
        </div>
        <div>
          <div className="lg:w-[30rem] h-[3.2px] bg-[#5E5E5E] rounded-full">
            <div className="h-full bg-white w-[30%] rounded-full"></div>
          </div>
        </div>
      </div>
      <div className="flex items-center space-x-4 justify-center">
        <button>
          <TbMicrophone2
            size="1.3rem"
            className="text-[#BABABA] hover:cursor-pointer hover:text-white transition-colors ease-linear duration-150"
          />
        </button>
        <button>
          <HiOutlineQueueList
            size="1.3rem"
            className="text-[#BABABA] hover:cursor-pointer hover:text-white transition-colors ease-linear duration-150"
          />
        </button>
        <button>
          <TbDevices2
            size="1.3rem"
            className="text-[#BABABA] hover:cursor-pointer hover:text-white transition-colors ease-linear duration-150"
          />
        </button>
        <button>
          <RiVolumeUpFill
            size="1.3rem"
            className="text-[#BABABA] hover:cursor-pointer hover:text-white transition-colors ease-linear duration-150"
          />
        </button>
      </div>
    </div>
  );
};

export default PlaySong;
