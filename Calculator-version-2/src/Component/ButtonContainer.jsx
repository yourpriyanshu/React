import a from "./ButtonContainer.module.css";
const ButtonConatiner = ({ onButtonClick }) => {
  const buttonNames = [
    "C",
    "1",
    "2",
    "+",
    "3",
    "4",
    "-",
    "5",
    "6",
    "*",
    "7",
    "8",
    "/",
    "=",
    "9",
    "0",
    ".",
  ];
  return (
    <div className={a.button_container}>
      {buttonNames.map((names) => (
        <button
          key={names}
          className={a.button}
          onClick={() => onButtonClick(names)}
        >
          {names}
        </button>
      ))}
    </div>
  );
};
export default ButtonConatiner;
