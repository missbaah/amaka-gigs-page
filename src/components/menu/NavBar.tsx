import Image from "next/image";
import Logo from "public/assets/AmakaLogo.png";
import Plus from "public/icons/Plus.svg";
import user from "public/icons/user.svg";
import search from "public/icons/search.svg";
import maximize from "public/icons/maximize.svg";
import { PrimaryBtn } from "../base/buttons/BaseBtns";

const NavBar = () => {
  return (
    <nav className="h-20 flex px-6 items-center justify-between">
      <div className="flex gap-6 items-center">
        <Image src={Logo} alt="Amaka Logo" />
        <div className="flex gap-2">
          <a className="underline underline-offset-4 text-amaka-grey">
            How AMAKA Works{" "}
          </a>
          <Image src={maximize} alt="icon" />
        </div>
      </div>
      <div className="flex gap-6">
        <div className=" flex items-center rounded-full gap-2 bg-amaka-grey-highlight w-60 px-4">
          <Image src={search} alt="icon" />
          <input
            type="text"
            className="bg-inherit placeholder:text-amaka-grey outline-none"
            placeholder="Search AMAKA"
          />
        </div>
        <PrimaryBtn width="w-[120px]">
          <Image src={Plus} alt="icon" />
          Create
        </PrimaryBtn>
        <Image src={user} alt="icon" className="cursor-pointer" />
      </div>
    </nav>
  );
};

export default NavBar;
