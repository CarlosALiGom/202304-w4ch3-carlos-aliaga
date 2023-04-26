interface InfoProps {
  infoText: string;
}

const Info = ({ infoText }: InfoProps): JSX.Element => {
  return <p>{infoText}</p>;
};

export default Info;
