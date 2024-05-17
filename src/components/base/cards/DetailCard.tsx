import React from "react";
import { PrimaryBtn, SecondaryBtn } from "../buttons/BaseBtns";
import Image from "next/image";
import bookmark from "../../../public/icons/bookmark.svg";
import more from "../../../public/icons/more-horizontal.svg";
import briefcase from "../../../public/icons/briefcase-1.svg";
import hours from "../../../public/icons/time.svg";
import userCog from "../../../public/icons/user-cog.svg";
import { SearchResultsData } from "@/data";

interface DetailCardProps {
  data?: SearchResultsData;
}

const DetailCard = ({ data }: DetailCardProps) => {
  return (
    <section className="w-full flex flex-col gap-4">
      <section className="flex justify-between items-start">
        <div className="flex flex-col gap-2">
          <div className="flex gap-3 items-center">
            <Image src={data?.image} alt="image" className="rounded-full" />
            <span className="font-medium text-2xl">{data?.name}</span>
          </div>
          <div>
            <span className="text-sm font-medium">{data?.location} </span>
            <span className="text-sm font-medium text-amaka-grey">
              · Sent: {data?.timeCreated}
            </span>
          </div>
        </div>
        <div className="flex gap-3">
          <Image src={bookmark} alt="bookmark-icon" />
          <Image src={more} alt="more-icon" />
        </div>
      </section>

      <section className="flex flex-col gap-2 text-sm text-amaka-grey">
        <div className="flex gap-3 items-center">
          <Image src={briefcase} alt="icon" />
          <span>{data?.title}</span>
        </div>
        <div className="flex gap-3 items-center">
          <Image src={hours} alt="icon" />
          <span>
            Hourly · ${data?.rate} · ${data?.earned} earned
          </span>
        </div>
        <div className="flex gap-3 items-center">
          <Image src={userCog} alt="icon" />
          <span>Experience Level · {data?.experienceLevel}</span>
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
