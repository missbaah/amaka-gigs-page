import { StaticImport } from "next/dist/shared/lib/get-img-props";
import React from "react";
import { PrimaryBtn } from "./PrimaryBtn";
import { SecondaryBtn } from "./SecondaryBtn";
import Image from "next/image";
import bookmark from "../../../public/icons/bookmark.svg";
import more from "../../../public/icons/more-horizontal.svg";

type DetailCardProps = {
  name: string;
  location: string;
  imageSrc: string | StaticImport;
  title: string;
  rate: number;
  earned: number;
  experienceLevel: string;
  date: string;
};

const DetailCard = (props: DetailCardProps) => {
  const {
    name = "Unknown",
    location = "Unknown",
    imageSrc,
    title = "Unknown",
    rate = 0,
    earned = 0,
    experienceLevel = "Unknown",
    date = "Unknown",
  } = props;
  return (
    <section className="w-full">
      <section className="flex justify-between">
        <div className="flex flex-col gap-2">
          <div className="flex gap-3 items-center">
            <Image src={imageSrc} alt="image" className="rounded-full" />
            <span className="font-medium text-2xl">{name}</span>
          </div>
          <div>
            <span className="text-sm font-medium">{location} </span>
            <span className="text-sm font-medium text-amaka-grey">
              · Sent: {date}
            </span>
          </div>
        </div>
        <div className="flex gap-3">
          <Image src={bookmark} alt="bookmark-icon" />
          <Image src={more} alt="more-icon" />
        </div>
      </section>

      <div className="flex gap-4">
        <PrimaryBtn width="w-[160px]">Hire</PrimaryBtn>
        <SecondaryBtn width="w-[160px]">Message</SecondaryBtn>
      </div>
    </section>
  );
};

export default DetailCard;
