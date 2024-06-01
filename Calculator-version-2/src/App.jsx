import "bootstrap/dist/css/bootstrap.min.css";
import Display from "./Component/Display";
import ButtonConatiner from "./Component/ButtonContainer";
import styles from "./App.module.css";
import { useState } from "react";
function App() {
  const [calVal, setCalVal] = useState("");

  const onButtonClick = (buttontext) => {
    if (buttontext === "C") {
      setCalVal("");
    } else if (buttontext === "=") {
      const result = eval(calVal);
      setCalVal(result);
    } else {
      const newDisplayValue = calVal + buttontext;
      setCalVal(newDisplayValue);
    }
  };
  return (
    <div className={styles.parent_container}>
      <div className={styles.calculator}>
        <Display displayValue={calVal} />
        <ButtonConatiner onButtonClick={onButtonClick} />
      </div>
    </div>
  );
}
export default App;
