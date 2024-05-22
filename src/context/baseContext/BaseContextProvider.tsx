import { ReactElement, useState } from "react";
import { BaseContext } from "./base.context";

export const BaseContextProvider = ({
  children,
}: {
  children: ReactElement | ReactElement[];
}) => {
  const [mutableData, setMutableData] = useState<unknown>();
  return (
    <BaseContext.Provider value={{ mutableData, setMutableData }}>
      {children}
    </BaseContext.Provider>
  );
};
