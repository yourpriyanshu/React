import "bootstrap/dist/css/bootstrap.min.css";
import Display from "./Component/Display";
import ButtonConatiner from "./Component/ButtonContainer";
import styles from "./App.module.css";
function App() {
  return (
    <div className={styles.parent_container}>
      <div className={styles.calculator}>
        <Display />
        <ButtonConatiner />
      </div>
    </div>
  );
}
export default App;
