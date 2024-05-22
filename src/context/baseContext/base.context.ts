import { createContext, useContext } from "react";

export const BaseContext = createContext<{
  mutableData: unknown;
  setMutableData: React.Dispatch<React.SetStateAction<unknown>>;
} | null>(null);

export const useBaseContext = <T>(): {
  mutableData: T;
  setMutableData: React.Dispatch<React.SetStateAction<T>>;
} => {
  const context = useContext(BaseContext);

  if (!context) {
    throw new Error("useBaseContext must be used within a Base.Provider");
  }

  const { mutableData, setMutableData } = context;

  return {
    mutableData,
    setMutableData,
  } as {
    mutableData: T;
    setMutableData: React.Dispatch<React.SetStateAction<T>>;
  };
};
