import { PropsWithChildren } from "react";
import { PhoneContextStructure } from "./types";
import PhoneContext from "./PhoneContext";

const PhoneContextProvider = ({ children }: PropsWithChildren): JSX.Element => {
  const PhoneContextStore: PhoneContextStructure = {
    phoneNumber: [],
    isCalling: false,
  };

  return (
    <PhoneContext.Provider value={PhoneContextStore}>
      {children}
    </PhoneContext.Provider>
  );
};

export default PhoneContextProvider;
