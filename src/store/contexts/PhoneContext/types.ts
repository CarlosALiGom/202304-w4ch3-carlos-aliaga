export interface PhoneContextStructure {
  isCalling: boolean;
  display: [];
  setPhoneData?: (phoneData: PhoneContextStructure) => void;
}
