import React from "react";
import FeedHeading from "../../misc/FeedHeading";
import Image from "next/image";
import image2 from "public/assets/feedImg2.png";
import play from "public/icons/play.svg";

const Format2 = () => {
  return (
    <section className="flex flex-col gap-4">
      <FeedHeading>
        Weaving Independence: Akwete Women's Fabric Empowerment
      </FeedHeading>
      <div className="relative ">
        <Image src={image2} alt="cover-image" className="r-10 object-fill" />
        <Image
          src={play}
          alt="play-icon"
          className="absolute top-[40%] left-[46%]"
          width={46.72}
          height={46.72}
        />
        <span className="bg-[#00000080] text-white rounded-[5px] w-[37px] h-6 p-1 absolute top-[90%] left-[90%] flex items-center">
          8:32
        </span>
      </div>
    </section>
  );
};

export default Format2;
