import { StaticImageData } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";
import React from "react";
import image2 from "public/assets/feedImg2.png";
import play from "public/icons/play.svg";

interface WorkCardProps {
  imageSrc: StaticImageData;
  gigTitle: string;
  isVideo: boolean;
}

const WorkCard = ({ imageSrc, gigTitle, isVideo }: WorkCardProps) => {
  return (
    <div className="flex flex-col gap-2 text-sm w-[176px]">
      {isVideo ? (
        <div className="relative">
          <Image
            src={imageSrc}
            alt=""
            height={138}
            width={176}
            className="rounded-[8px]"
          />
          <Image
            src={play}
            alt="play-icon"
            className="absolute top-[40%] left-[46%]"
            width={26}
            height={26}
          />
          <span className="bg-[#00000080] text-[10px] h-4 text-white rounded-[5px] p-1 absolute top-[85%] left-[80%] flex items-center">
            8:32
          </span>
        </div>
      ) : (
        <Image
          src={imageSrc}
          alt=""
          height={138}
          width={176}
          className="rounded-[8px]"
        />
      )}
      <p>{gigTitle}</p>
    </div>
  );
};

export default WorkCard;
