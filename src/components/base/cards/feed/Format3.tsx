import Image from "next/image";
import React from "react";
import image3 from "public/assets/feedImg3.png";

const Format3 = () => {
  return (
    <section className="flex flex-col gap-3 border-x border-x-amaka-grey-border">
      <div className="px-3 text-sm flex flex-col gap-4">
        <span>What’s your female archetype?</span>
        <p>
          Lorem ipsum dolor sit amet consectetur. Egestas risus mauris pretium
          in sed aliquam dui in. Quam a eget consequat nulla nibh. Blandit in
          pellentesque odio massa. Eleifend volutpat molestie vulputate et
          faucibus. Eget in aliquam aenean id lectus phasellus elementum libero
          placerat.
        </p>
      </div>
      <Image src={image3} alt="cover-image" />
    </section>
  );
};

export default Format3;
