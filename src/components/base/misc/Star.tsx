import React, { FC } from "react";

interface StarProps {
  rating: number;
}

const Star: FC<StarProps> = (props: StarProps) => {
  return (
    <div>
      {[1, 2, 3, 4, 5].map((star, index) => {
        return (
          <span
            key={index}
            className={`text-base ${
              props.rating >= star ? "text-[#00875A]" : "grey"
            }`}
          >
            {" "}
            ★{" "}
          </span>
        );
      })}
    </div>
  );
};

export default Star;
