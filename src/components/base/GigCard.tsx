import React from "react";
import Star from "./star";

const GigCard = () => {
  return (
    <section className="flex flex-col gap-2 py-4">
      <div>
        <p className="text-amaka-blue text-base font-medium">Title</p>
        <span className="text-xs text-amaka-grey">period</span>
      </div>
      <div className="flex flex-col gap-3">
        <div className="text-xs flex gap-2 items-center">
          <Star rating={4.5} />
          <div>4.5 | Canada</div>
        </div>
        <p className="text-xs">Summary</p>
        <div></div>
        <div className="text-amaka-grey text-sm flex gap-10">
          <span>$230</span>
          <span>Fixed Price</span>
        </div>
      </div>
    </section>
  );
};

export default GigCard;
