import React from "react";

interface SideMenuButtonProps {
  handleClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
  children: React.ReactNode;
  isActive: boolean;
}

const SideMenuBtn = (props: SideMenuButtonProps) => {
  const { isActive } = props;
  return (
    <button
      className={`w-[212px] h-10 px-2 flex gap-3 items-center r-10 text-amaka-grey hover:bg-amaka-grey-highlight ${
        isActive ? "bg-amaka-highlight text-black hover:bg-amaka-highlight" : ""
      }`}
      onClick={props.handleClick}
    >
      {props.children}
    </button>
  );
};

export default SideMenuBtn;
