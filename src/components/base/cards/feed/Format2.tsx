import React from "react";
import FeedHeading from "../../misc/FeedHeading";
import Image from "next/image";
import image2 from "public/assets/feedImg2.png";

const Format2 = () => {
  return (
    <section className="flex flex-col gap-4">
      <FeedHeading>
        Weaving Independence: Akwete Women's Fabric Empowerment
      </FeedHeading>
      <div className="w-full">
        <Image src={image2} alt="cover-image" className="r-10 object-fill" />
      </div>
    </section>
  );
};

export default Format2;
