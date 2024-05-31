import { useState } from "react";
import Container from "./Components/Container";
import FoodInput from "./Components/FoodInput";
import FoodItems from "./Components/FoodItems";
function App() {
  let [foodItems, setFoodItems] = useState([]); //cretaed empty array using useState , setFoodItems will help to add Items .

  const onKeyDown = (event) => {
    if (event.key === "Enter") {
      let newFoodItem = event.target.value;
      event.target.value = "";
      let newItems = [...foodItems, newFoodItem];
      setFoodItems(newItems);
    }
  };
  return (
    <>
      <Container>
        <h1 className="food-heading">Healthy Food</h1>
        <FoodInput handleKeyDown={onKeyDown} />
        <FoodItems items={foodItems} />
      </Container>
    </>
  );
}
export default App;
