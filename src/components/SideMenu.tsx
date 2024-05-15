import React, { useState } from "react";
import { SideMenuItems } from "../data";
import { SideMenuBtn } from "./base/SideMenuBtn";
import Image from "next/image";

const SideMenu = () => {
  const [activeButtonIndex, setActiveButtonIndex] = useState<number | null>(
    null
  );

  const handleButtonClick = (index: number) => {
    setActiveButtonIndex(index);
  };

  const sideMenu = SideMenuItems.map((item, index) => {
    return (
      <SideMenuBtn
        handleClick={() => {
          handleButtonClick(index);
        }}
        isActive={activeButtonIndex === index}
      >
        <Image src={item.icon} alt={item.name} />
        {item.name}
      </SideMenuBtn>
    );
  });

  return (
    <aside className="w-[280px] pl-[56px] pr-3 py-4 border-r border-r-amaka-grey">
      <div className="grid gap-1">{sideMenu}</div>
    </aside>
  );
};

export default SideMenu;
