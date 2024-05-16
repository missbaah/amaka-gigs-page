import React from "react";
import Star from "./Star";
import {
  StaticImageData,
  StaticImport,
} from "next/dist/shared/lib/get-img-props";
import WorkCard from "./WorkCard";

interface GigCardProps {
  title: string;
  startDate: string;
  endDate: string;
  rating: number;
  gigSummary: string;
  price: number;
  gigLocation: string;
  priceType: string;
  work: { title: string; media: StaticImageData }[];
}

const GigCard = (props: GigCardProps) => {
  const {
    title,
    startDate,
    endDate,
    rating,
    gigSummary,
    price,
    gigLocation,
    priceType,
    work,
  } = props;

  return (
    <section className="flex flex-col gap-2 py-4 border-b border-b-amaka-grey-border">
      <div>
        <p className="text-amaka-blue text-base font-medium">{title}</p>
        <span className="text-xs text-amaka-grey">
          {startDate} - {endDate}
        </span>
      </div>
      <div className="flex flex-col gap-3">
        <div className="text-xs flex gap-2 items-center">
          <Star rating={rating} />
          <div>
            {rating} | {gigLocation}
          </div>
        </div>
        <p className="text-xs">{gigSummary}</p>
        <div className="flex gap-4">
          {work?.map((item, index) => {
            return (
              <WorkCard
                key={index}
                gigTitle={item.title}
                imageSrc={item.media}
              />
            );
          })}
        </div>
        <div className="text-amaka-grey text-sm flex gap-10">
          <span>${price}</span>
          <span>{priceType}</span>
        </div>
      </div>
    </section>
  );
};

export default GigCard;
