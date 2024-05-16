interface ButtonProps {
  width: string;
  children: React.ReactNode;
  primary?: boolean;
}

const Button = ({ width, children, primary = false }: ButtonProps) => {
  const baseStyles = `px-6 flex items-center justify-center gap-2 text-sm ${width} h-10 r-10 font-medium`;
  const primaryStyles = `bg-amaka-blue text-white`;
  const secondaryStyles = `border border-amaka-blue text-amaka-blue`;

  const styles = `${baseStyles} ${primary ? primaryStyles : secondaryStyles}`;

  return <button className={styles}>{children}</button>;
};

export const PrimaryBtn = ({ width, children }: ButtonProps) => {
  return <Button width={width} primary={true} children={children} />;
};

export const SecondaryBtn = ({ width, children }: ButtonProps) => {
  return <Button width={width} primary={false} children={children} />;
};
