import Image from "next/image";
import React from "react";
import remove from "../../../public/icons/remove.svg";
import { StaticImport } from "next/dist/shared/lib/get-img-props";

type ResultCardProps = {
  name: string;
  title: string;
  location: string;
  rate: number;
  earned: number;
  brief: string | undefined;
  date: string;
  imageSrc: string | StaticImport;
  handleClick: () => void;
  isActive: boolean;
};

const ResultCard = (props: ResultCardProps) => {
  return (
    <section
      onClick={props.handleClick}
      className={`px-3 cursor-pointer ${
        props.isActive ? "bg-amaka-grey-highlight" : ""
      }`}
    >
      <div className="h-fit border-b border-b-amaka-grey-border flex gap-3 justify-center items-start py-4">
        <Image src={props.imageSrc} alt={props.name} className="rounded-full" />
        <section className="flex flex-col gap-3">
          <div id="details" className="flex flex-col gap-1">
            <span className="text-sm font-medium">{props.name}</span>
            <span className="text-base font-medium">{props.title}</span>
            <div className="flex gap-[2px] text-amaka-grey text-xs">
              <span>{props.location}</span>
              <span>- Hourly: ${props.rate}</span>
              <span>- ${props.earned} earned</span>
            </div>
          </div>
          <div id="brief" className="text-sm">
            {props.brief}
          </div>
          <span className="text-[10px] text-amaka-grey">{props.date}</span>
        </section>
        <Image src={remove} alt="remove-icon" />
      </div>
    </section>
  );
};

export default ResultCard;
