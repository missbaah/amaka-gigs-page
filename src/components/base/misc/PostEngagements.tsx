import React from "react";
import heart from "public/icons/heart.svg";
import bars from "public/icons/bars.svg";
import bookmark from "public/icons/bookmark.svg";
import share from "public/icons/share.svg";
import comments from "public/icons/comments.svg";
import Image from "next/image";

const PostEngagements = () => {
  const engagementsData = [
    {
      name: "Likes",
      count: "32.K",
      icon: heart,
    },
    {
      name: "Bookmarks",
      count: "1.4K",
      icon: bookmark,
    },
    {
      name: "Comments",
      count: "1.4K",
      icon: comments,
    },
    {
      name: "Views",
      count: "1.4K",
      icon: bars,
    },
  ];

  const engagements = engagementsData.map((item, index) => {
    return (
      <div key={index} className="flex gap-1 text-amaka-grey text-xs">
        <Image src={item.icon} alt={item.name} width={16} height={16} />
        <span>{item.count}</span>
      </div>
    );
  });

  return (
    <div className="flex justify-between">
      <div className="flex gap-[33px]">{engagements}</div>
      <Image src={share} alt="share" width={16} height={16} />
    </div>
  );
};

export default PostEngagements;
