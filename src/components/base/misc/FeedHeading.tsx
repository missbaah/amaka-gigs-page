import React, { FC } from "react";

interface FeedHeadingProps {
  children: React.ReactNode;
}

const FeedHeading: FC<FeedHeadingProps> = ({ children }: FeedHeadingProps) => {
  return <h4 className="text-lg font-canela">{children}</h4>;
};

export default FeedHeading;
