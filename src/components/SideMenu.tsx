import React, { useState } from "react";
import { DownloadApp, FooterNavItems, SideMenuItems, Socials } from "../data";
import { SideMenuBtn } from "./base/SideMenuBtn";
import brandmark from "../../public/icons/amaka-brandmark.svg";
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

  const appBtns = DownloadApp.map((item) => {
    return (
      <button className="w-[128px] h-10 border border-amaka-grey-border r-10 centered">
        <Image src={item.icon} alt={item.name} />
      </button>
    );
  });

  const socials = Socials.map((item) => {
    return (
      <button>
        <Image src={item.icon} alt={item.name} />
      </button>
    );
  });

  const footerNav = FooterNavItems.map((item) => {
    return <li className="text-sm pb-1 pr-2">{item}</li>;
  });

  return (
    <aside className="w-[280px] h-[820px] border-r border-b border-r-amaka-grey-border border-b-amaka-grey-border">
      <div className="grid gap-1 py-4 side-bar-padding">{sideMenu}</div>
      <div className="flex gap-2 border-y border-y-amaka-grey-border side-bar-padding py-4">
        <Image src={brandmark} alt="brand-mark" />
        <p>AMAKA Editorial</p>
      </div>

      <div
        id="app-btns"
        className="flex flex-col gap-[100px] justify-between pt-4 side-bar-padding w-full text-amaka-grey"
      >
        <div className="flex flex-col gap-4">{appBtns}</div>

        <div className="flex flex-col gap-6">
          <div className="flex gap-4">{socials}</div>
          <ul className="flex flex-wrap">{footerNav}</ul>
          <p className="text-xs">© 2023 AMAKA LTD</p>
        </div>
      </div>
    </aside>
  );
};

export default SideMenu;
