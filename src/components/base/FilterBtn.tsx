import React from "react";
import arrowDown from "../../../public/icons/arrow-down.svg";
import Image from "next/image";

interface FilterBtnProps {
  children: React.ReactNode;
}

export const FilterBtn = (props: FilterBtnProps) => {
  return (
    <button className="px-4 h-8 flex gap-4 items-center rounded-full text-sm border border-amaka-grey-border">
      {props.children}
      <Image src={arrowDown} alt="arrow-down-icon" />
    </button>
  );
};
