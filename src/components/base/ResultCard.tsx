import Image from "next/image";
import React from "react";
import remove from "../../../public/icons/remove.svg";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import { SearchResultsData } from "@/data";

interface ResultCardProps {
  data?: SearchResultsData;
  handleClick: () => void;
  isActive: boolean;
}

const ResultCard = ({ data, handleClick, isActive }: ResultCardProps) => {
  return (
    <section
      onClick={handleClick}
      className={`px-3 cursor-pointer ${
        isActive ? "bg-amaka-grey-highlight" : ""
      }`}
    >
      <div className="h-fit border-b border-b-amaka-grey-border flex gap-3 justify-center items-start py-4">
        <Image
          src={data?.image}
          alt="image of creator"
          className="rounded-full"
        />
        <section className="flex flex-col gap-3">
          <div id="details" className="flex flex-col gap-1">
            <span className="text-sm font-medium">{data?.name}</span>
            <span className="text-base font-medium">{data?.title}</span>
            <div className="flex gap-[2px] text-amaka-grey text-xs">
              <span>{data?.location}</span>
              <span>- Hourly: ${data?.rate}</span>
              <span>- ${data?.earned} earned</span>
            </div>
          </div>
          <div id="brief" className="text-sm">
            {data?.brief}
          </div>
          <span className="text-[10px] text-amaka-grey">
            {data?.timeCreated}
          </span>
        </section>
        <Image src={remove} alt="remove-icon" />
      </div>
    </section>
  );
};

export default ResultCard;
