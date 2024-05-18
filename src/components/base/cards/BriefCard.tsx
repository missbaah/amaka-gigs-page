import { SearchResultsData } from "@/data";
import React, { FC } from "react";

interface BriefCardProps {
  data?: SearchResultsData;
}

const BriefCard: FC<BriefCardProps> = ({ data }: BriefCardProps) => {
  return (
    <section className="flex flex-col gap-3">
      <h2 className="text-xl font-medium">Brief</h2>
      <div className="text-sm flex flex-col gap-3">
        <div>
          <p>Hello,</p>
          <p>{data?.about.intro}</p>
        </div>
        <p>{data?.about.body}</p>
        <ul className="list-disc pl-6">
          {data?.about.skills?.map((skill, index) => {
            return <li key={index}>{skill}</li>;
          })}
        </ul>
        <p>{data?.about.conclusion}</p>
        <div className="flex flex-col">
          <span>{data?.about.salutation}</span>
          <span>{data?.name}</span>
        </div>
      </div>
    </section>
  );
};

export default BriefCard;
