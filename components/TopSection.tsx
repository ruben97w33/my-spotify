import React, { FunctionComponent } from "react";
import {
  RiArrowRightSLine,
  RiArrowLeftSLine,
  RiAccountCircleFill,
} from "react-icons/ri";

const TopSection: FunctionComponent = () => {
  return (
    <div className="h-[64px] top-0 right-0 z-30 main-container flex items-center px-8 bg-[#493633] fixed">
      <div className="flex justify-between items-center w-full">
        <div className="flex space-x-4">
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
              <div>Iniciar sesión</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopSection;
