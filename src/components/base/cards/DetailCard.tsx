import React from "react";
import { PrimaryBtn, SecondaryBtn } from "../buttons/BaseBtns";
import Image from "next/image";
import bookmark from "public/icons/bookmark.svg";
import more from "public/icons/more-horizontal.svg";
import briefcase from "public/icons/briefcase-1.svg";
import hours from "public/icons/time.svg";
import userCog from "public/icons/user-cog.svg";
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
            <Image
              src={data?.image ?? "public/Avatar.svg"}
              alt="image"
              className="rounded-full"
            />
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
        <SecondaryBtn width="w-[160px]">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M17.3726 8.17276C20.0986 9.39695 22 12.1611 22 15.375V18.75C22 19.9926 21.0051 21 19.7778 21H13.1111C10.2084 21 7.73898 19.1217 6.82379 16.5M17.3726 8.17276C16.6711 5.20566 14.0344 3 10.8889 3H9.77778C5.48223 3 2 6.52576 2 10.875V14.25C2 15.4926 2.99492 16.5 4.22222 16.5H6.82379M17.3726 8.17276C17.4922 8.67875 17.5556 9.20688 17.5556 9.75C17.5556 13.4779 14.5708 16.5 10.8889 16.5H6.82379"
              stroke="#2C36F0"
              stroke-width="1.2"
              stroke-linejoin="round"
            />
          </svg>
          Message
        </SecondaryBtn>
      </div>
    </section>
  );
};

export default DetailCard;
