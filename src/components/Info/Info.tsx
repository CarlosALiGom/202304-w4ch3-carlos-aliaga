import { useContext } from "react";
import PhoneContext from "../../store/contexts/PhoneContext/PhoneContext";

const Info = (): JSX.Element => {
  const { isCalling } = useContext(PhoneContext);
  return (
    <span className={`${isCalling ? "active" : "inactive"}`}>Calling...</span>
  );
};

export default Info;
