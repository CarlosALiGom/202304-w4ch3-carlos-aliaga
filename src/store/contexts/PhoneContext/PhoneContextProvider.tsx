import { PropsWithChildren, useState } from "react";
import { PhoneContextStructure } from "./types";
import PhoneContext from "./PhoneContext";

const PhoneContextProvider = ({ children }: PropsWithChildren): JSX.Element => {
  const [phoneData, setPhoneData] = useState<PhoneContextStructure>({
    display: [],
    isCalling: false,
  });

  const PhoneContextStore: PhoneContextStructure = {
    ...phoneData,
    setPhoneData,
  };

  return (
    <PhoneContext.Provider value={PhoneContextStore}>
      {children}
    </PhoneContext.Provider>
  );
};

export default PhoneContextProvider;
