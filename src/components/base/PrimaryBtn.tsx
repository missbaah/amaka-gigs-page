type ButtonProps = {
  width: string;
  children: React.ReactNode;
};

export const PrimaryBtn = (props: ButtonProps) => {
  return (
    <button
      className={`bg-amaka-blue px-6 flex items-center justify-center gap-2 text-white text-sm ${props.width} h-10 rounded-[10px] font-medium`}
    >
      {props.children}
    </button>
  );
};
