import { FilterItems } from "@/data";
import React, { FC } from "react";
import FilterBtn from "../base/buttons/FilterBtn";

const FilterMenu: FC = () => {
  const filters = FilterItems.map((item) => {
    return <FilterBtn key={item}>{item}</FilterBtn>;
  });

  return (
    <>
      <div className="flex px-4 items-center justify-start gap-3 py-2 w-full lg:flex-nowrap flex-wrap">
        {filters}
        <span className="border h-6"></span>
        <button className="px-4 h-8 flex gap-4 items-center rounded-full text-sm border border-amaka-grey-border">
          All filters
        </button>
      </div>
    </>
  );
};

export default FilterMenu;
