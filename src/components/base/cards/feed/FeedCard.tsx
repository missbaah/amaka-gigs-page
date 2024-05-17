import React from "react";
import PostEngagements from "../../misc/PostEngagements";

interface FeedCardProps {
  children: React.ReactNode;
}

const FeedCard = ({ children }: FeedCardProps) => {
  return (
    <section className="flex flex-col gap-4 py-4">
      {children}
      <PostEngagements />
    </section>
  );
};

export default FeedCard;
