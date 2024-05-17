import React from "react";

interface FeedHeadingProps {
  children: React.ReactNode;
}

const FeedHeading = ({ children }: FeedHeadingProps) => {
  return <h4 className="text-lg">{children}</h4>;
};

export default FeedHeading;
