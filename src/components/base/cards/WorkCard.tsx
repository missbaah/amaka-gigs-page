import { StaticImageData } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";
import React from "react";

interface WorkCardProps {
  imageSrc: StaticImageData;
  gigTitle: string;
}

const WorkCard = ({ imageSrc, gigTitle }: WorkCardProps) => {
  return (
    <div className="flex flex-col gap-2 text-sm w-[176px]">
      <div>
        <Image
          src={imageSrc}
          alt=""
          height={138}
          width={176}
          className="rounded-[8px]"
        />
      </div>
      <p>{gigTitle}</p>
    </div>
  );
};

export default WorkCard;
