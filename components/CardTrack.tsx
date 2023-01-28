import React, { FunctionComponent } from "react";
import Image from "next/image";

interface TracksProps {
  imgsrc: string;
  title: string;
  description: string;
  urltrack?: string;
}

const CardTrack: FunctionComponent<TracksProps> = (props) => {
  const { imgsrc, title, description } = props;
  return (
    <div className="md:w-[11.5rem] w-full bg-[#1c1c1c] rounded-md p-3.5 hover:cursor-pointer transition-all ease-linear duration-150 hover:bg-[#414548] hover:bg-opacity-30">
      <div className="lg:h-40 h-56 w-full overflow-hidden relative rounded-md">
        <Image src={imgsrc} fill alt="image" className="object-cover" />
        <div></div>
      </div>
      <div className="mt-3 space-y-3">
        <p className="text-white font-bold text-ellipsis overflow-hidden">
          {title}
        </p>
        <p className="text-[#A7A7A7] text-sm">{description}</p>
      </div>
    </div>
  );
};

export default CardTrack;
