import { FilterItems } from "@/data";
import React from "react";
import { FilterBtn } from "./base/FilterBtn";

const FilterMenu = () => {
  const filters = FilterItems.map((item) => {
    return <FilterBtn key={item}>{item}</FilterBtn>;
  });

  return (
    <div className="flex px-4 items-center justify-start gap-3 border-b py-2 border-b-amaka-grey-border w-screen">
      {filters}
      <span className="border h-6"></span>
      <button className="px-4 h-8 flex gap-4 items-center rounded-full text-sm border border-amaka-grey-border">
        All filters
      </button>
    </div>
  );
};

export default FilterMenu;
