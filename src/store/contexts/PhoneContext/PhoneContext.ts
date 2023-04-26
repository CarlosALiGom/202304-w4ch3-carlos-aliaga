import { PhoneContextStructure } from "./types";
import { createContext } from "react";

const PhoneContext = createContext<PhoneContextStructure>(
  {} as PhoneContextStructure
);

export default PhoneContext;
