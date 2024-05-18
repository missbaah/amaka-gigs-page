import React, { FC } from "react";
import { SecondaryBtn } from "../buttons/BaseBtns";

interface WrapperProps {
  children: React.ReactNode;
  title: string;
  count?: number;
}

const Wrapper: FC<WrapperProps> = (props: WrapperProps) => {
  const { children, title, count } = props;
  return (
    <section className="border-b border-x p-3 border-b-amaka-grey-border border-x-amaka-grey-border">
      <h3 className="text-base font-medium pt-3">
        {title} ({count})
      </h3>
      {children}
      <SecondaryBtn width="w-full">View Profile</SecondaryBtn>
    </section>
  );
};

export default Wrapper;
