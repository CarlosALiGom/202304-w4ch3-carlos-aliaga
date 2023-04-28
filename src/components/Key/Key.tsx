import { useContext } from "react";
import PhoneContext from "../../store/contexts/PhoneContext/PhoneContext";

interface KeyProps {
  text: string;
  isBig: boolean;
  actionOnClick: () => void;
}

const Key = ({ text, isBig, actionOnClick }: KeyProps): JSX.Element => {
  const { isCalling } = useContext(PhoneContext);
  isBig;

  return (
    <>
      <li key={text}>
        <button
          className={isBig ? "key" : "key big"}
          disabled={isCalling ? true : false}
          onClick={actionOnClick}
        >
          {text}
        </button>
      </li>
    </>
  );
};

export default Key;
