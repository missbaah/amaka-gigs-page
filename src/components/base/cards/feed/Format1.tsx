import React from "react";
import Image1 from "public/assets/image-1.png";
import Image from "next/image";
import SkillsChip from "../../misc/SkillsChip";
import FeedHeading from "../../misc/FeedHeading";

const Format1 = () => {
  const tags = ["Design", "Lagos", "Architecture"];

  const renderTags = tags.map((tag, index) => {
    return <SkillsChip key={index}>{tag}</SkillsChip>;
  });

  return (
    <section className="flex gap-3">
      <div className="flex flex-col gap-4 w-[368px]">
        <FeedHeading>
          Covering Nollywood: The Film Journalists Channeling
        </FeedHeading>
        <p className="text-sm">
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
          nonummy nibh euismod tincidunt ut laoree... <strong>Read more</strong>
        </p>
        <div className="flex gap-3 flex-wrap">{renderTags}</div>
      </div>
      <div className="w-[176px] h-[137px]">
        <Image src={Image1} alt="cover image" className="r-10" />
      </div>
    </section>
  );
};

export default Format1;
