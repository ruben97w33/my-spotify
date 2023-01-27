import React, { FunctionComponent } from "react";
import Image from "next/image";
import { RiContactsBookLine } from "react-icons/ri";

interface TracksProps {
  imgsrc: string;
  title: string;
  urltrack?: string;
}

const CardRecomend: FunctionComponent<TracksProps> = (props) => {
  const { imgsrc, title } = props;
  imgsrc;
  return (
    <div className="w-full h-[5.3rem] items-center relative bg-gray-500 pr-8 space-x-6 bg-opacity-50 flex rounded-md hover:cursor-pointer transition-all ease-linear duration-150 hover:bg-[#3f4346] hover:bg-opacity-30">
      <div className="overflow-hidden relative rounded-l-md w-[6.5rem] h-[5.3rem]">
        <Image src={imgsrc} fill alt="image" className="object-cover" />
      </div>
      <div className="w-full space-y-3">
        <p className="text-white font-bold text-ellipsis overflow-hidden">
          {title}
        </p>
      </div>
    </div>
  );
};

export default CardRecomend;
