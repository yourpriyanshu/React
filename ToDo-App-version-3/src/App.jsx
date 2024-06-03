import AppName from "./Components/AppName";
import AddTodo from "./Components/AddTodo";
import TodoItems from "./Components/TodoItems";
import { useState } from "react";
import "./App.css";
import WelcomeMessage from "./Components/WelcomeMessage";

function App() {
  const [todoItems, setTodoItems] = useState([]);

  const handleNewItem = (itemName, itemDueDate) => {
    console.log(`New Item Added : ${itemName} Date: ${itemDueDate}`);

    // setTodoItems((currentValue) => {
    //   const newTodoItems = [
    //     ...currentValue,
    //     { name: itemName, dueDate: itemDueDate },
    //   ];
    // return newTodoItems;
    // });
    // Alternate
    setTodoItems((currentValue) => [
      ...currentValue,
      { name: itemName, dueDate: itemDueDate },
    ]);
  };

  const handleDeleteItem = (todoItemName) => {
    const newTodoItems = todoItems.filter((item) => item.name !== todoItemName);
    setTodoItems(newTodoItems);
  };
  return (
    <center className="todo-container">
      <AppName />
      <AddTodo onNewItem={handleNewItem} />
      {todoItems.length === 0 && <WelcomeMessage />}
      <div className="item-container">
        <TodoItems todoItems={todoItems} onDeleteClick={handleDeleteItem} />
      </div>
    </center>
  );
}

export default App;
