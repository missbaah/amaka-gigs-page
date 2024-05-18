import React, { FC } from "react";

interface SkillsChipProps {
  children: React.ReactNode;
}

const SkillsChip: FC<SkillsChipProps> = ({ children }: SkillsChipProps) => {
  return (
    <span className="text-xs font-medium bg-amaka-grey-highlight py-2 px-3 rounded-full uppercase">
      {children}
    </span>
  );
};

export default SkillsChip;
