import React, { FC } from "react";
import PostEngagements from "../../misc/PostEngagements";

interface FeedCardProps {
  children: React.ReactNode;
}

const FeedCard: FC<FeedCardProps> = ({ children }: FeedCardProps) => {
  return (
    <>
      {" "}
      <section className="flex flex-col gap-4 py-4">
        {children}
        <PostEngagements />
      </section>
      <div className="border-b border-b-amaka-grey-border w-full"></div>
    </>
  );
};

export default FeedCard;
