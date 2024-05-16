import React from "react";

type StarProps = {
  rating: number;
};

const Star = (props: StarProps) => {
  return (
    <div>
      {[1, 2, 3, 4, 5].map((star, index) => {
        return (
          <span
            key={index}
            className={`text-base ${
              props.rating >= star
                ? "text-[#00875A]"
                : "border border-[#00875A]"
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
