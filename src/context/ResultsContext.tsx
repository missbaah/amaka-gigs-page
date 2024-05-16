import { createContext, useState } from "react";

type ResultsContextType = {
  id: number;
  setId: React.Dispatch<React.SetStateAction<number>>;
  setResultId: (arg: number) => void;
};

export const ResultsContext = createContext<ResultsContextType | null>(null);

type ResultsContextProviderType = {
  children: React.ReactNode;
};

export const ResultsContextProvider = ({
  children,
}: ResultsContextProviderType) => {
  const [id, setId] = useState(1);

  const setResultId = (resultID: number) => {
    setId(resultID);
  };

  return (
    <ResultsContext.Provider value={{ id, setId, setResultId }}>
      {children}
    </ResultsContext.Provider>
  );
};
