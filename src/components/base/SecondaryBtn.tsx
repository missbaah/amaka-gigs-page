type SecondaryBtnProps = {
  width: string;
  children: React.ReactNode;
};

export const SecondaryBtn = (props: SecondaryBtnProps) => {
  return (
    <button
      className={`border border-amaka-blue px-6 flex items-center justify-center gap-2 text-amaka-blue text-sm ${props.width} h-10 r-10 font-medium`}
    >
      {props.children}
    </button>
  );
};
