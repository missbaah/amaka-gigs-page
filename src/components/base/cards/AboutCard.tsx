import React from "react";
import { PrimaryBtn } from "../buttons/BaseBtns";
import Image from "next/image";
import verify from "../../../public/icons/verify.svg";
import { SearchResultsData } from "@/data";
import GigCard from "./GigCard";
import Wrapper from "../misc/Wrapper";

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
    </section>
  );
};

export default AboutCard;
