import React from "react";
import { PrimaryBtn } from "../buttons/BaseBtns";
import Image from "next/image";
import verify from "public/icons/verify.svg";
import { SearchResultsData } from "@/data";
import GigCard from "./GigCard";
import Wrapper from "../misc/Wrapper";
import SkillsChip from "../misc/SkillsChip";
import PostEngagements from "../misc/PostEngagements";

interface AboutCardProps {
  data?: SearchResultsData;
}

const AboutCard = ({ data }: AboutCardProps) => {
  const renderGigHistory = data?.gigHistory.map((history, index) => {
    return (
      <GigCard
        key={index}
        title={history.name}
        gigSummary={history.gigSummary}
        gigLocation={history.gigLocation}
        startDate={history.startDate}
        endDate={history.endDate}
        work={history.work}
        rating={history.rating}
        price={history.price}
        priceType={history.priceType}
      />
    );
  });

  const renderSkills = data?.skills.map((skill, index) => {
    return <SkillsChip key={index}>{skill}</SkillsChip>;
  });

  return (
    <section className="h-auto ">
      <div className="border p-3 border-amaka-grey-border rounded-t-[10px]">
        <h2 className="text-xl font-medium">About the creator</h2>
        <section className="flex flex-col gap-4 pb-3 ">
          <div className="flex justify-between items-center">
            <div className="text-sm font-medium flex gap-2 py-4">
              <Image
                src={data?.image}
                height={40}
                width={40}
                alt="avatar"
                className="rounded-full"
              />
              <div className="flex gap-1 items-center">
                <span>{data?.name}</span>
                <Image src={verify} alt="icon" />
              </div>
            </div>
            <PrimaryBtn width="w-auto">Subscribe</PrimaryBtn>
          </div>
          <div className="text-sm text-amaka-grey flex flex-col gap-3">
            <p>
              @{data?.userName} · {data?.subs} subscribers · {data?.posts} posts
            </p>
            <p>{data?.brief}</p>
          </div>
        </section>
      </div>
      <Wrapper title="Gig History" count={10}>
        {renderGigHistory}
      </Wrapper>
      <Wrapper title="Feed" count={10}>
        {renderGigHistory}
      </Wrapper>
      <PostEngagements />
      <section className="border-b border-x p-3 border-b-amaka-grey-border border-x-amaka-grey-border rounded-b-[10px] flex flex-col gap-3">
        <h3 className="text-base font-medium pt-3">Skills</h3>
        <div className="flex gap-3 flex-wrap">{renderSkills}</div>
      </section>
    </section>
  );
};

export default AboutCard;
